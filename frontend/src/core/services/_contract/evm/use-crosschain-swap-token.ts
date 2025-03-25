import { useMutation } from '@tanstack/react-query'
import { useEvmAccount } from '@/core/hooks/evm/use-account'
import { UseCrosschainSwapToken } from '@/core/types/contract'
import { addressToBytes32, createTxObject } from '@/core/utils'
import {
  switchUserChain,
  writeContractAndWaitForReceipt,
} from '@/core/utils/wagmi'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import TokenABI from '@/core/constants/abi/token'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { readContract } from '@wagmi/core'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import { parseEther, parseUnits } from 'viem'
import { LAYERZERO_CHAIN_ID_MAP, CHAIN_ID } from '@/core/constants/chains'
import { addressToBytes32 as solanaAddressToBytes32 } from '@layerzerolabs/lz-v2-utilities'

export const useCrosschainSwapToken: UseCrosschainSwapToken.FunctionType =
  () => {
    const { wallet } = useEvmAccount()

    return useMutation({
      mutationFn: async ({ data }) => {
        if (!wallet || !wallet.chainId) {
          throw new Error('No wallet found')
        }
        const _srcChainId = data.srcChainId
        const _dstChainId = data.dstChainId

        if (!TOKEN_FACTORY_ADDRESSES[_dstChainId]) {
          throw new Error('No token factory found')
        }

        if (!LAYERZERO_CHAIN_ID_MAP[_dstChainId]) {
          throw new Error('No layerzero chain id found')
        }

        const valueWithDecimals =
          _dstChainId === CHAIN_ID.SOLANA
            ? parseUnits(data.value, 9)
            : parseEther(data.value)

        if (data.sellBuyFlag === 'buy') {
          if (!data.value) {
            throw new Error('ETH amount is required for buy operations')
          }

          // Quote the cross-chain buy transaction
          const result = await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_srcChainId] as `0x${string}`,
            functionName: 'quoteBuyCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              _dstChainId === CHAIN_ID.SOLANA
                ? `0x${Buffer.from(solanaAddressToBytes32(data.memeTokenAddress)).toString('hex')}`
                : addressToBytes32(data.memeTokenAddress),
              _dstChainId === CHAIN_ID.SOLANA
                ? `0x${Buffer.from(solanaAddressToBytes32(data.receiptAddress)).toString('hex')}`
                : addressToBytes32(data.receiptAddress),
              valueWithDecimals,
            ],
            chainId: _srcChainId as ChainId,
          })

          if (!Array.isArray(result) || result.length !== 2) {
            throw new Error(
              'Unexpected result from quoteBuyCrossChainMemetoken',
            )
          }

          const [nativeFee, lzTokenFee] = result as [bigint, bigint]

          await switchUserChain({
            account: wallet.address,
            chainId: _srcChainId,
          })

          // Execute the cross-chain buy transaction
          const { hash, receipt } = await writeContractAndWaitForReceipt({
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_srcChainId],
            functionName: 'buyCrosschainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              _dstChainId === CHAIN_ID.SOLANA
                ? `0x${Buffer.from(solanaAddressToBytes32(data.memeTokenAddress)).toString('hex')}`
                : addressToBytes32(data.memeTokenAddress),
              _dstChainId === CHAIN_ID.SOLANA
                ? `0x${Buffer.from(solanaAddressToBytes32(data.receiptAddress)).toString('hex')}`
                : addressToBytes32(wallet.address),
              valueWithDecimals,
            ],
            chainId: _srcChainId,
            value: BigInt(nativeFee), // ETH amount + native fee + lzToken fee
          })

          return {
            ...createTxObject({ tx: { hash }, chainId: _srcChainId }),
          }
        } else {
          if (!data.value) {
            throw new Error('Token quantity is required for sell operations')
          }

          // Check balance before proceeding
          const balance = await readContract(wagmiConfig, {
            abi: TokenABI,
            address: data.memeTokenAddress as `0x${string}`,
            functionName: 'balanceOf',
            args: [wallet.address],
            chainId: _dstChainId as ChainId,
          })

          // Convert balance to BigInt
          const balanceBigInt = BigInt(balance as string)

          if (balanceBigInt < valueWithDecimals) {
            throw new Error('Not enough balance')
          }

          await switchUserChain({
            account: wallet.address,
            chainId: _dstChainId,
          })

          // If enough balance, approve
          const { hash: approvalHash } = await writeContractAndWaitForReceipt({
            abi: TokenABI,
            address: data.memeTokenAddress,
            functionName: 'approve',
            args: [TOKEN_FACTORY_ADDRESSES[_dstChainId], valueWithDecimals],
            chainId: _dstChainId,
          })

          await switchUserChain({
            account: wallet.address,
            chainId: _srcChainId,
          })

          // Quote the cross-chain sell transaction
          const result = await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_srcChainId] as `0x${string}`,
            functionName: 'quoteSellCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(wallet.address),
              valueWithDecimals,
            ],
            chainId: _srcChainId as ChainId,
          })

          if (!Array.isArray(result) || result.length !== 2) {
            throw new Error(
              'Unexpected result from quoteBuyCrossChainMemetoken',
            )
          }

          const [nativeFee, lzTokenFee] = result as [bigint, bigint]

          // Execute the cross-chain sell transaction
          const { hash, receipt } = await writeContractAndWaitForReceipt({
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_srcChainId],
            functionName: 'sellCrosschainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(wallet.address),
              BigInt(data.value),
            ],
            chainId: _srcChainId,
            value: BigInt(nativeFee), // Only need to send the native fee
          })

          return {
            ...createTxObject({ tx: { hash }, chainId: _srcChainId }),
          }
        }
      },
    })
  }

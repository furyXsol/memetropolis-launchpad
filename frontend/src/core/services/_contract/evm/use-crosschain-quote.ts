import { useMutation } from '@tanstack/react-query'
import { parseEther, formatEther, parseUnits, formatUnits } from 'viem'
import { readContract } from '@wagmi/core'
import { useEvmAccount } from '@/core/hooks/evm/use-account'
import { UseCrosschainQuote } from '@/core/types/contract'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import { CHAIN_ID, LAYERZERO_CHAIN_ID_MAP } from '@/core/constants/chains'
import { addressToBytes32 } from '@/core/utils'
import { quoteSolanaTokenOut, quoteSolanaSolOut } from '../solana/quoteToken'

export const useCrosschainQuote: UseCrosschainQuote.FunctionType = () => {
  const { wallet } = useEvmAccount()

  return useMutation({
    mutationFn: async ({ data }) => {
      if (!wallet || !wallet.chainId) {
        throw new Error('No wallet found')
      }

      const walletChainId: ChainId = wallet.chainId as ChainId
      const tokenChainId = data.chainId // tokenChainId
      const sourceChainId = data.sourceChainId

      if (!tokenChainId) throw new Error('ChainId not defined')

      if (!TOKEN_FACTORY_ADDRESSES[walletChainId]) {
        throw new Error('No token factory found')
      }

      const valueWithDecimals =
        tokenChainId === CHAIN_ID.SOLANA
          ? parseUnits(data.value, 9)
          : parseEther(data.value)
      if (data.sellBuyFlag === 'buy') {
        if (!data.value) {
          throw new Error('ETH amount is required for buy operations')
        }

        // Quote the cross-chain buy transaction
        if (tokenChainId === CHAIN_ID.SOLANA) {
          //quoted token Amount
          const tokenAddress = data.memeTokenAddress
          const lamportsAmount = valueWithDecimals
          const quotedTokenAmount = await quoteSolanaTokenOut(
            tokenAddress,
            Number(lamportsAmount.toString()),
          )

          const quoteResult = (await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[sourceChainId] as `0x${string}`,
            functionName: 'quoteBuyCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[tokenChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(data.walletAddress),
              lamportsAmount,
            ],
            chainId: sourceChainId as ChainId,
          })) as [bigint, bigint]
          const nativeFee = quoteResult?.[0]

          return {
            tokenAmount: formatUnits(BigInt(quotedTokenAmount), 9),
            nativeFee: formatEther(nativeFee),
          }
        } else {
          //evm
          const tokenAmount = await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[tokenChainId] as `0x${string}`,
            functionName: 'getTokenOutOnBuy',
            args: [data.memeTokenAddress, valueWithDecimals],
            chainId: tokenChainId as ChainId,
          })

          const quoteResult = (await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[sourceChainId] as `0x${string}`,
            functionName: 'quoteBuyCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[tokenChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(data.walletAddress),
              valueWithDecimals,
            ],
            chainId: sourceChainId as ChainId,
          })) as [bigint, bigint]
          const nativeFee = quoteResult?.[0]

          return {
            tokenAmount: formatEther(BigInt(String(tokenAmount))),
            nativeFee: formatEther(nativeFee),
          }
        }
      } else {
        // sell
        if (!data.value) {
          throw new Error('Token amount is required for sell operations')
        }
        if (tokenChainId === CHAIN_ID.SOLANA) {
          //quoted sol Amount
          const tokenAddress = data.memeTokenAddress
          const tokenAmount = valueWithDecimals
          const quotedSolAmount = await quoteSolanaSolOut(
            tokenAddress,
            Number(tokenAmount.toString()),
          )
          const quoteResult = (await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[sourceChainId] as `0x${string}`,
            functionName: 'quoteSellCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[tokenChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(data.walletAddress),
              valueWithDecimals,
            ],
            chainId: sourceChainId as ChainId,
          })) as [bigint, bigint]
          const nativeFee = quoteResult?.[0]
          return {
            tokenAmount: formatUnits(BigInt(String(quotedSolAmount)), 9),
            nativeFee: formatEther(nativeFee),
          }
        } else {
          // Quote the cross-chain sell transaction
          const ethAmount = await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[tokenChainId] as `0x${string}`,
            functionName: 'getEthAmountOnSell',
            args: [data.memeTokenAddress, valueWithDecimals], //valueWithDecimals: token amount to sell
            chainId: tokenChainId as ChainId,
          })

          const quoteResult = (await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[sourceChainId] as `0x${string}`,
            functionName: 'quoteSellCrossChainMemetoken',
            args: [
              LAYERZERO_CHAIN_ID_MAP[tokenChainId],
              addressToBytes32(data.memeTokenAddress),
              addressToBytes32(data.walletAddress),
              valueWithDecimals,
            ],
            chainId: sourceChainId as ChainId,
          })) as [bigint, bigint]
          const nativeFee = quoteResult?.[0]

          return {
            tokenAmount: formatEther(BigInt(String(ethAmount))),
            nativeFee: formatEther(nativeFee),
          }
        }
      }
    },
  })
}

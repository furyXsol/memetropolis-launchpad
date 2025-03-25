import { useMutation } from '@tanstack/react-query'
import {
  parseEther,
  formatEther,
  parseUnits,
  formatUnits,
  zeroAddress,
} from 'viem'
import { readContract } from '@wagmi/core'
import { UseCrosschainQuote } from '@/core/types/contract'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import {
  CHAIN_ID,
  LAYERZERO_CHAIN_ID_MAP,
  SOLANA_OAPP_CONFIG,
} from '@/core/constants/chains'
import { addressToBytes32 } from '@/core/utils'
import { useConnection } from '@solana/wallet-adapter-react'
import { quoteSolanaTokenOut, quoteSolanaSolOut } from '../solana/quoteToken'

import { useSolanaAccount } from '@/core/hooks/solana/use-account'

import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { quoteSolana } from '@/core/utils/quoteSolana'
import { PublicKey } from '@solana/web3.js'

export const useCrosschainQuote: UseCrosschainQuote.FunctionType = () => {
  const { connection } = useConnection()
  const { wallet } = useSolanaAccount()
  const anchorWallet = useAnchorWallet()
  return useMutation({
    mutationFn: async ({ data }) => {
      const tokenChainId = data.chainId // tokenChainId ( evm chainId)
      if (!tokenChainId || tokenChainId === CHAIN_ID.SOLANA) {
        throw new Error('ChainId not defined')
      }

      const valueWithDecimals = parseEther(data.value)
      if (data.sellBuyFlag === 'buy') {
        if (!data.value) {
          throw new Error('ETH amount is required for buy operations')
        }

        // Quote the cross-chain buy transaction
        //evm
        const tokenAmount = await readContract(wagmiConfig, {
          abi: TokenFactoryABI,
          address: TOKEN_FACTORY_ADDRESSES[tokenChainId] as `0x${string}`,
          functionName: 'getTokenOutOnBuy',
          args: [data.memeTokenAddress, valueWithDecimals],
          chainId: tokenChainId as ChainId,
        })
        const sendETH = valueWithDecimals // input token chain's native token amount
        const quoteAmount = await quoteSolana(
          connection,
          tokenChainId,
          new PublicKey(wallet?.address!),
          anchorWallet!,
          data.memeTokenAddress,
          sendETH,
        )
        const nativeFee = quoteAmount ?? BigInt(0)

        return {
          tokenAmount: formatEther(BigInt(String(tokenAmount))),
          nativeFee: formatUnits(nativeFee, 9),
        }
      } else {
        // sell
        if (!data.value) {
          throw new Error('Token amount is required for sell operations')
        }
        // Quote the cross-chain sell transaction
        const requiredETH = await readContract(wagmiConfig, {
          abi: TokenFactoryABI,
          address: TOKEN_FACTORY_ADDRESSES[tokenChainId] as `0x${string}`,
          functionName: 'getEthAmountOnSell',
          args: [data.memeTokenAddress, valueWithDecimals], //valueWithDecimals: token amount to sell
          chainId: tokenChainId as ChainId,
        })
        const sendETH = requiredETH as bigint
        const quoteAmount = await quoteSolana(
          connection,
          tokenChainId,
          new PublicKey(wallet?.address!),
          anchorWallet!,
          data.memeTokenAddress,
          sendETH,
        )
        const nativeFee = quoteAmount as bigint

        return {
          tokenAmount: formatEther(BigInt(String(requiredETH))),
          nativeFee: formatUnits(nativeFee, 9),
        }
      }
    },
  })
}

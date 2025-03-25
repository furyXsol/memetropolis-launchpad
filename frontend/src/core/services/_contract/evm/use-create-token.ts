import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { decodeEventLog, parseEther } from 'viem'
import { useEvmAccount } from '@/core/hooks/evm/use-account'
import { UseCreateToken } from '@/core/types/contract'
import {
  switchUserChain,
  writeContractAndWaitForReceipt,
} from '@/core/utils/wagmi'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { ChainId } from '@/core/lib/wagmi'
import moment from 'moment'
import { getKAndInitialPrice } from '@/core/lib/utils'

export const useCreateToken: UseCreateToken.FunctionType = () => {
  const { wallet } = useEvmAccount()

  return useMutation({
    mutationFn: async ({ data }) => {
      if (!wallet || !wallet.chainId) {
        throw new Error('No wallet found')
      }

      const _chainId = Number(data.chain) as ChainId
      await switchUserChain({ account: wallet.address, chainId: _chainId })

      if (!TOKEN_FACTORY_ADDRESSES[_chainId]) {
        throw new Error('No token factory found')
      }

      // Get k-value and initialPrice from raisedAmount and maxSupply
      const { kValue, initialPrice } = getKAndInitialPrice(
        data.raisedAmount,
        data.maxSupply,
        data.salesRatio,
      )

      // Call the contract to create the token
      const { receipt } = await writeContractAndWaitForReceipt({
        abi: TokenFactoryABI,
        address: TOKEN_FACTORY_ADDRESSES[_chainId],
        functionName: 'createMemeToken',
        args: [
          data.name,
          data.symbol,
          data.image,
          data.description,
          kValue,
          initialPrice,
          data.maxSupply ? parseEther(data.maxSupply.toString()) : '0',
          data.salesRatio ? data.salesRatio * 100 : '0',
          data.reservedRatio ? data.reservedRatio * 100 : '0',
          data.liquidityRatio ? data.liquidityRatio * 100 : '0',
          data.launchDate
            ? moment.utc(data.launchDate, 'YYYY/MM/DD h:mm A').unix().toString()
            : '0',
          data.maximumPerUser
            ? parseEther(data.maximumPerUser.toString())
            : '0',
        ],
        chainId: _chainId,
      })

      // Parse logs to find the event
      const emittedEvents = receipt.logs
        .map((log) => {
          try {
            return decodeEventLog({
              abi: TokenFactoryABI,
              data: log.data,
              topics: log.topics,
            })
          } catch (error) {
            return null
          }
        })
        .filter((event) => event !== null)
        .find((event) => event.eventName === 'CreatedMemeToken')

      const tokenAddress = (emittedEvents?.args as any)?.tokenAddress as string
      const creator = (emittedEvents?.args as any)?.creator as string

      // Include the meta field in the returned data
      return {
        ...data,
        meta: data.meta, // Pass meta back with the data
        launchDate: data.launchDate
          ? moment.utc(data.launchDate, 'YYYY/MM/DD h:mm A').unix()
          : 0,
        tokenAddress,
        creator,
      }
    },
    onError: (e: any) => {
      toast.error(e.shortMessage)
    },
  })
}

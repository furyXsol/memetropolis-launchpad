import ABI from './oapp-abi.json'
import { createWalletClient, createPublicClient, http, Address } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { arbitrumSepolia, bscTestnet } from 'viem/chains'
import { EVM_OAPP_ADDRESS, ADMIN_KEY, SOLANA_EID, SOLANA_OAPP } from './constant'

const main = async () => {
  const CONTRACT_ADDRESS = '0x000000000000000000000000000000000'
  const solanaOAppAddress = '0x00000000000000000000000000000000'
  const publicClient = createPublicClient({
    chain: bscTestnet,
    transport: http()
  })

  const res0 = await publicClient.readContract({
    address: EVM_OAPP_ADDRESS as Address,
    abi: ABI,
    functionName: 'owner',
  })
  // const res1 = await publicClient.readContract({
  //   address: EVM_OAPP_ADDRESS as Address,
  //   abi: ABI,
  //   functionName: 'receivedMsgType',
  // })
  // const res2 = await publicClient.readContract({
  //   address: EVM_OAPP_ADDRESS as Address,
  //   abi: ABI,
  //   functionName: 'receivedToAddress',
  // })

  // const res3 = await publicClient.readContract({
  //   address: EVM_OAPP_ADDRESS as Address,
  //   abi: ABI,
  //   functionName: 'receivedEthAmount',
  // })

  // const res4 = await publicClient.readContract({
  //   address: EVM_OAPP_ADDRESS as Address,
  //   abi: ABI,
  //   functionName: 'receivedTokenQty',
  // })

  console.log('owner:', res0)
  // console.log('receivedMsgType:', res1)
  // console.log('receivedToAddress:', res2)
  // console.log('receivedEthAmount:', res3)
  // console.log('receivedTokenQty:', res4)
}

main()
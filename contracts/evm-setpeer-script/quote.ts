import ABI from './oapp-abi.json'
import { createWalletClient, createPublicClient, http, Address, encodeFunctionData } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { arbitrumSepolia } from 'viem/chains'
import { EVM_OAPP_ADDRESS, ADMIN_KEY, SOLANA_EID, SOLANA_OAPP } from './constant'

const main = async () => {
//   const CONTRACT_ADDRESS = '0x000000000000000000000000000000000'
//   const solanaOAppAddress = '0x00000000000000000000000000000000'
  const publicClient = createPublicClient({
    chain: arbitrumSepolia,
    transport: http()
  })
  const account = privateKeyToAccount(ADMIN_KEY)
  const memeTokenAddress = '0xa63f275854dfdb547f26693513aec9e0b6c4b55520ceb81ab7a6b931b0012250'
  const recipientAddress = '0x7e0d26a569beaa94cbc3082cba80eabb9b133f19e12d92d8e2630abcb825cb61'
  const ethAmount = '10000'

  const res = await publicClient.readContract({
    address: EVM_OAPP_ADDRESS,
    abi: ABI,
    functionName: 'quote',
    args: [
        SOLANA_EID, memeTokenAddress, recipientAddress, ethAmount
    ]
  })
  console.log('---res:', res)

//   const data = encodeFunctionData({
//     abi: ABI,
//     functionName: 'quote',
//     args: [SOLANA_EID, memeTokenAddress, recipientAddress, tokenQty]
//   })

//   const nonce = await publicClient.getTransactionCount({ address: account.address})
//   const gasPrice = await publicClient.getGasPrice()
//   const gasLimit = BigInt(500000)
//   const tx = {
//     to: EVM_OAPP_ADDRESS as Address,
//     data,
//     nonce,
//     gasPrice,
//     gas: gasLimit,
//     chainId: arbitrumSepolia.id,
//   }

//   const signedTx = await account.signTransaction(tx)
//   const hash = await walletClient.sendRawTransaction({
//     serializedTransaction: signedTx
//   })
//   console.log('----hash:', hash)
//   const res = await publicClient.waitForTransactionReceipt({ hash})

//   console.log('finished send:', res.status)
}

main()
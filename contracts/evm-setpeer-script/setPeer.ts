import ABI from './oapp-abi.json'
import { createWalletClient, createPublicClient, http, Address, encodeFunctionData } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { baseSepolia, arbitrumSepolia, bscTestnet } from 'viem/chains'
import { EVM_OAPP_ADDRESS, ADMIN_KEY, SOLANA_EID, SOLANA_OAPP } from './constant'

const main = async () => {
  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http()
  })
  const account = privateKeyToAccount(ADMIN_KEY)
  const walletClient = createWalletClient({
    account,
    chain: baseSepolia,
    transport: http()
  })

  const data = encodeFunctionData({
    abi: ABI,
    functionName: 'setPeer',
    args: [SOLANA_EID, SOLANA_OAPP]
  })
  const nonce = await publicClient.getTransactionCount({ address: account.address})
  const gasPrice = await publicClient.getGasPrice()
  const gasLimit = BigInt(500000)
  const tx = {
    to: EVM_OAPP_ADDRESS as Address,
    data,
    nonce,
    gasPrice,
    gas: gasLimit,
    chainId: baseSepolia.id,
  }

  const signedTx = await account.signTransaction(tx)
  const hash = await walletClient.sendRawTransaction({
    serializedTransaction: signedTx
  })
  console.log('----hash:', hash)
  const res = await publicClient.waitForTransactionReceipt({ hash})

  console.log('finished setPeer:', res.status)
}

main()
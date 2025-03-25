import {
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js'
import { UlnProgram, EndpointProgram } from '@layerzerolabs/lz-solana-sdk-v2'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { Serializer, struct, u64 } from '@metaplex-foundation/umi/serializers'
import { Connection } from '@solana/web3.js'
import {
  CHAIN_ID,
  LAYERZERO_CHAIN_ID_MAP,
  SOLANA_OAPP_CONFIG,
} from '@/core/constants/chains'
import { addressToBytes32 as layerzeroAddressToBytes32 } from '@layerzerolabs/lz-v2-utilities'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { addressToBytes32 } from '@/core/utils'
import { getProgram } from '@/core/lib/anchor'
import { hexStringToByteArray } from '@/core/lib/utils'
import { zeroAddress } from 'viem'
import { BN } from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'

type MessagingFee = {
  nativeFee: bigint
  lzTokenFee: bigint
}
type MessagingFeeArgs = {
  nativeFee: number | bigint
  lzTokenFee: number | bigint
}

const getMessagingFeeSerializer = (): Serializer<
  MessagingFeeArgs,
  MessagingFee
> => {
  return struct(
    [
      ['nativeFee', u64()],
      ['lzTokenFee', u64()],
    ],
    { description: 'MessagingFee' },
  )
}

const parseQuoteData = (input: string): bigint | null => {
  try {
    const resQuote = Buffer.from(input, 'base64')
    const parsedData = getMessagingFeeSerializer().deserialize(resQuote)
    return parsedData[0].nativeFee as bigint
  } catch {
    return null
  }
}

export const quoteSolana = async (
  connection: Connection,
  tokenChainId: number,
  payerAddress: PublicKey,
  anchorWallet: AnchorWallet,
  memeTokenAddress: string,
  sendETH: bigint,
): Promise<bigint | null> => {
  const endpoint = new EndpointProgram.Endpoint(EndpointProgram.PROGRAM_ID)

  const { programId: msgLibProgram } = (await endpoint.getSendLibrary(
    //@ts-ignore
    connection,
    SOLANA_OAPP_CONFIG,
    LAYERZERO_CHAIN_ID_MAP[tokenChainId],
  ))!

  const msgLibProgram1 = new UlnProgram.Uln(msgLibProgram!)
  let remainingAccounts = await endpoint.getQuoteIXAccountMetaForCPI(
    //@ts-ignore
    connection,
    payerAddress,
    {
      sender: `0x${Buffer.from(layerzeroAddressToBytes32(SOLANA_OAPP_CONFIG.toBase58())).toString('hex')}`,
      srcEid: LAYERZERO_CHAIN_ID_MAP[CHAIN_ID.SOLANA],
      dstEid: LAYERZERO_CHAIN_ID_MAP[tokenChainId],
      receiver: addressToBytes32(TOKEN_FACTORY_ADDRESSES[tokenChainId]),
    },
    msgLibProgram1,
  )
  const oAppProgram = getProgram(connection, anchorWallet as any, {
    commitment: 'confirmed',
  })

  const bufferDstEid = Buffer.alloc(4)
  bufferDstEid.writeUInt32BE(LAYERZERO_CHAIN_ID_MAP[tokenChainId])
  const peerPDA = PublicKey.findProgramAddressSync(
    [Buffer.from('Peer', 'utf8'), SOLANA_OAPP_CONFIG.toBuffer(), bufferDstEid],
    oAppProgram.programId,
  )[0]

  const tokenAddr = hexStringToByteArray(
    `0x${addressToBytes32(memeTokenAddress)}`,
  )
  const toAddr = hexStringToByteArray(`0x${addressToBytes32(zeroAddress)}`)
  const options = Options.newOptions().addExecutorLzReceiveOption(
    '200000',
    sendETH,
  )
  const ins = await oAppProgram.methods
    .quote({
      dstEid: LAYERZERO_CHAIN_ID_MAP[tokenChainId],
      msgType: 1,
      tokenAddr,
      toAddr,
      ethAmount: new BN('0'),
      tokenAmount: new BN('0'),
      options: Buffer.from(options.toBytes()),
      composeMsg: null,
      payInLzToken: false,
    })
    .accounts({
      oappConfig: SOLANA_OAPP_CONFIG,
      peer: peerPDA,
    })
    .remainingAccounts(remainingAccounts)
    .instruction()
  const recentBlockHash = await connection.getLatestBlockhash()
  const txV = new VersionedTransaction(
    new TransactionMessage({
      payerKey: new PublicKey(payerAddress),
      instructions: [ins],
      recentBlockhash: recentBlockHash.blockhash,
    }).compileToV0Message(),
  )
  const res = await connection.simulateTransaction(txV, { sigVerify: false })
  if (!res) {
    return null
  }
  const resData = res.value.returnData?.data!
  const quoteNum = parseQuoteData(resData[0])
  return quoteNum
}

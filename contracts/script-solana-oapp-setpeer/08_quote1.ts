import * as utils from './utils'
import { MY_KEYPAIR, MY_OAPP_PROGRAM_ID, DST_EID, PEER_ADDR_ARBI, SRC_EID } from './constants'
import { PublicKey, clusterApiUrl, Transaction, VersionedTransaction, TransactionMessage } from '@solana/web3.js'
import { BN } from '@coral-xyz/anchor';
import { SimpleMessageLibProgram, UlnProgram, EndpointProgram } from '@layerzerolabs/lz-solana-sdk-v2'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { Serializer, struct, u64  } from '@metaplex-foundation/umi/serializers'

function hexStringToByteArray(hexString) {
    if (hexString.length % 2 !== 0) {
        throw new Error("Hex string length must be even");
    }

    return hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
}

type MessagingFee = {
    nativeFee: bigint;
    lzTokenFee: bigint;
};
type MessagingFeeArgs = {
    nativeFee: number | bigint;
    lzTokenFee: number | bigint;
};

const getMessagingFeeSerializer = (): Serializer<MessagingFeeArgs, MessagingFee> => {
    return struct(
        [
            ["nativeFee", u64()],
            ["lzTokenFee", u64()],
        ],
        { description: "MessagingFee" }
    )
}


const quote = async () => {
  const OAppProgram = utils.getDeployedProgram()
  const payer = MY_KEYPAIR
  const oAppConfigPda = utils.getOAppConfigPda()
  const connection = utils.getConnection()

  // const rpcURL = clusterApiUrl('devnet')
  // const umi = createUmi(rpcURL)
  const endpoint = new EndpointProgram.Endpoint(EndpointProgram.PROGRAM_ID)
  const { msgLib, programId: msgLibProgram } = await endpoint.getSendLibrary(connection, oAppConfigPda, DST_EID)
  const msgLibVersion = await endpoint.getMessageLibVersion(connection, payer.publicKey, msgLibProgram)
  let msgLibProgram1;
  if (msgLibVersion.major.toString() === "0" && msgLibVersion.minor == 0 && msgLibVersion.endpointVersion == 2) {
    msgLibProgram1 =new SimpleMessageLibProgram.SimpleMessageLib(msgLibProgram)
  } else if (msgLibVersion.major.toString() === "3" && msgLibVersion.minor == 0 && msgLibVersion.endpointVersion == 2) {
    msgLibProgram1 = new UlnProgram.Uln(msgLibProgram)
  } else {
    throw new Error('Error1')
  }
  
  const peerAddr = PEER_ADDR_ARBI
  let remainingAccounts = await endpoint.getQuoteIXAccountMetaForCPI(
    connection,
    payer.publicKey,
    {
      sender: '0x3d58f21ed4548fc5926609eac3d9c818e95cdab31ffeb3be743e007dc82c9ec3',
      srcEid: SRC_EID,
      dstEid: DST_EID,
      receiver: new PublicKey(peerAddr).toBase58()
    },
    msgLibProgram1
  )

//   const peerPda = utils.getPeerPda(oAppConfigPda, DST_EID)

  const isBuy = 1
  const tokenAddr = hexStringToByteArray('000000000000000000000000CbcEf8C1357a3abFd815413481F1f71ddb801A60') as number[]
  const toAddr = hexStringToByteArray('00000000000000000000000027B70489ac522C98E2B788fB2156ab4967850dbD') as number[]
  const ethAmount = new BN('10000')
  const tokenAmount = new BN('10000')

  const peerPda = utils.getPeerPda(oAppConfigPda, DST_EID)
  //simulate
  const options = Options.newOptions().addExecutorLzReceiveOption('200000', '0')

  const ins = await OAppProgram.methods.quote({
    dstEid: DST_EID,
    msgType: isBuy,
    tokenAddr,
    toAddr: toAddr,
    ethAmount,
    tokenAmount,
    options: Buffer.from(options.toBytes()),
    composeMsg: null,
    payInLzToken: false
  }).accounts({
    oappConfig: oAppConfigPda,
    peer: peerPda
  }).remainingAccounts(
    remainingAccounts
  )
  .instruction()
//   console.log('----hash:', hash)
  const recentBlockhash = await connection.getRecentBlockhash()
  const txV = new VersionedTransaction(
    new TransactionMessage({
      instructions: [ins],
      payerKey: payer.publicKey,
      recentBlockhash: recentBlockhash.blockhash
    }).compileToV0Message()
  )

  // const tx = new Transaction().add(ins)
  // const kk = payer.publicKey
  //@ts-ignore
  const res = await connection.simulateTransaction(txV, { sigVerify: false})
  const data = res.value.returnData.data
  const d = Buffer.from(data[0], 'base64')
  const k = getMessagingFeeSerializer().deserialize(d)
  console.log('----res:',k[0].nativeFee)

  // console.log(`✅ Created Global Config: ${hash}`)
}

quote()

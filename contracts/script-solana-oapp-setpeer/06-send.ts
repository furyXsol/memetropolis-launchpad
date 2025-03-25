import * as utils from './utils'
import { MY_KEYPAIR, MY_OAPP_PROGRAM_ID, DST_EID, SRC_EID, PEER_ADDR_ARBI } from './constants'
import { PublicKey } from '@solana/web3.js'
import { BN } from '@coral-xyz/anchor'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { SimpleMessageLibProgram, UlnProgram, EndpointProgram  } from '@layerzerolabs/lz-solana-sdk-v2'

function hexStringToByteArray(hexString) {
    if (hexString.length % 2 !== 0) {
        throw new Error("Hex string length must be even");
    }

    return hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
}


const send = async () => {
  const payer = MY_KEYPAIR
  const OAppProgram = utils.getDeployedProgram()
  const connection = utils.getConnection()
  const [globalConfig] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('Global'),
    ],
    MY_OAPP_PROGRAM_ID,
  )

  const oAppConfigPda = utils.getOAppConfigPda()
  const peerPda = utils.getPeerPda(oAppConfigPda, DST_EID)

  const isBuy = true
  const tokenAddr = hexStringToByteArray('000000000000000000000000CbcEf8C1357a3abFd815413481F1f71ddb801A60') as number[]
  const toAddr = hexStringToByteArray('00000000000000000000000027B70489ac522C98E2B788fB2156ab4967850dbD') as number[]

  const ethAmount = new BN('20000')
  const tokenAmount = new BN('30000')
  const options = Options.newOptions().addExecutorLzReceiveOption('200000', '0')

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
  const packetPath = {
      sender: '0x3d58f21ed4548fc5926609eac3d9c818e95cdab31ffeb3be743e007dc82c9ec3',
      srcEid: SRC_EID,
      dstEid: DST_EID,
      receiver: new PublicKey(peerAddr).toBase58()
  }

  const remainingAccounts = await endpoint.getSendIXAccountMetaForCPI(
    connection,
    payer.publicKey,
    packetPath,
    msgLibProgram1
  )
  console.log('----remainingAccounts:', remainingAccounts)
  const hash = await OAppProgram.methods.send({
    dstEid: DST_EID,
    isBuy,
    tokenAddr,
    to: toAddr,
    ethAmount,
    tokenAmount,
    options: Buffer.from(options.toBytes()),
    composeMsg: null,
    nativeFee: new BN('2221902'),
    lzTokenFee: new BN('0'),
  }).accounts({
    signer: payer.publicKey,
    peer: peerPda,
    oappConfig: oAppConfigPda,
  }).remainingAccounts(
    remainingAccounts
  )
  .signers([payer]).rpc()

  console.log(`✅ Send: ${hash}`)
}

send()

import { Keypair, PublicKey } from '@solana/web3.js'
import * as utils from './utils'
import { MY_OAPP_PROGRAM_ID, MY_KEYPAIR, DST_EID, ENDPOINT_PROGRAM_ID, PEER_ADDR_ARBI } from './constants'
import { decodeBase58, toBeHex  } from "ethers"
import { addressToBytes32, bytes32ToEthAddress } from '@layerzerolabs/lz-v2-utilities'
import { BN } from '@coral-xyz/anchor'
import { deserialize } from 'borsh'

printPda()

const MessageLibSchema = {
  struct : {
    messageLib: {
      array : {
        type: 'u8',
        len: 32
      }
    },
    bump : 'u8'
  }
}
async function printPda() {
  console.log("🔑 Payer PublicKey:",MY_KEYPAIR.publicKey.toBase58())
  // const oftConfigPda = utils.getOFTConfigPda(MY_OFT_PROGRAM_ID)
  // console.log("🔑 OFT Config PDA:", oftConfigPda.toBase58())
  // const vaultPda = utils.getVaultPda(oftConfigPda)
  // console.log("🔑 OFT Vault PDA:", vaultPda.toBase58())
  // const oappRegistryPda = utils.getOAppRegistryPda(oftConfigPda)
  // console.log("OApp Registry PDA:", oappRegistryPda.toBase58())
  // const peerID = toBeHex(decodeBase58(oftConfigPda.toString()))
  // console.log("OftConfig Peer:", peerID)

  const oAppConfigPda = utils.getOAppConfigPda()
  console.log('oApp:', oAppConfigPda.toBase58())
  console.log(addressToBytes32(oAppConfigPda.toBase58()))
  console.log('oApp-evm:', (Buffer.from(addressToBytes32(oAppConfigPda.toBase58())).toString('hex')))
  console.log('my-key:', (Buffer.from(addressToBytes32(MY_KEYPAIR.publicKey.toBase58())).toString('hex')))

   const [sendLibraryConfigPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('SendLibraryConfig'),
        oAppConfigPda.toBuffer(),
        new BN(DST_EID).toArrayLike(Buffer, "be", 4)
      ],
      ENDPOINT_PROGRAM_ID
    )
  
    const [defaultSendLibraryConfigPda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('SendLibraryConfig'),
        new BN(DST_EID).toArrayLike(Buffer, "be", 4)
      ],
      ENDPOINT_PROGRAM_ID
    )

    const [msgLib] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('MessageLib'),
        new BN(DST_EID).toArrayLike(Buffer, "be", 4)
      ],
      ENDPOINT_PROGRAM_ID
    )
  console.log('-------sendLibraryConfigPda:', sendLibraryConfigPda.toBase58())
  console.log('-------defaultSendLibraryConfigPda:', defaultSendLibraryConfigPda.toBase58())

  const accountInfo = await utils.getConnection().getAccountInfo(defaultSendLibraryConfigPda)
  const msgLibInfo = deserialize(MessageLibSchema, accountInfo.data.slice(8)) as any

  const pubKey = new PublicKey(msgLibInfo.messageLib)
  console.log('---pubKey:', pubKey.toBase58())

  const [noncePda] = PublicKey.findProgramAddressSync(
      [
        Buffer.from('Nonce'),
        oAppConfigPda.toBuffer(),
        new BN(DST_EID).toArrayLike(Buffer, "be", 4),
        PEER_ADDR_ARBI
      ],
      ENDPOINT_PROGRAM_ID
  )

  console.log('-------noncePda:', noncePda.toBase58())
  const sendLibraryProgram = new PublicKey("7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH")

  const [sendConfigPda] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('SendConfig'),
      new BN(DST_EID).toArrayLike(Buffer, "be", 4),
      oAppConfigPda.toBuffer()
    ],
    sendLibraryProgram
  )

  const [defaultSendConfigPda] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('SendConfig'),
      new BN(DST_EID).toArrayLike(Buffer, "be", 4),
    ],
    sendLibraryProgram
  )
  console.log('--------sendConfigPda:', sendConfigPda.toBase58())
  console.log('--------defaultSendConfigPda:', defaultSendConfigPda.toBase58())

  // console.log('Created Token:', 'HS2Ajde9zymi5ijJsHGcDTDshVDvotxafD8BVpTP3iPG')
  // console.log('Created Token-evm:', (Buffer.from(addressToBytes32('HS2Ajde9zymi5ijJsHGcDTDshVDvotxafD8BVpTP3iPG')).toString('hex')))


  // console.log('ether:', toBeHex(decodeBase58("9V413LbG97J9KLgJxuXGCQiGYUVDx46tSB2Tp4unYanc")))

  // console.log(`OApp evm string:`,(Buffer.from(addressToBytes32(oAppConfigPda.toBase58())).toString('hex')))

  

}
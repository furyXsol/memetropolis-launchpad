import { Connection, clusterApiUrl, Keypair, PublicKey } from '@solana/web3.js'
import { PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata/dist/src/generated'
import { MY_KEYPAIR, MY_OAPP_PROGRAM_ID } from './constants'
import * as anchor from '@coral-xyz/anchor'
import { MemeOapp, IDL as MemeOappIDL} from './memeapp_idl_types'
import { OAPP_SEED, EVENT_SEED, LZ_RECEIVE_TYPES_SEED, PEER_SEED } from '@layerzerolabs/lz-solana-sdk-v2'
import { ENDPOINT_PROGRAM_ID } from './constants'
export function getConnection() {
  return new Connection(clusterApiUrl('devnet'), 'confirmed') //devnet
//   return new Connection(clusterApiUrl('mainnet-beta'), 'confirmed') //mainnet
}

export function getOAppConfigPda(): PublicKey {
  return PublicKey.findProgramAddressSync(
    [Buffer.from(OAPP_SEED)],
    MY_OAPP_PROGRAM_ID,
  )[0]
}

export function getOAppRegistryPda(oAppConfigPda: PublicKey): PublicKey {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(OAPP_SEED, "utf8"), oAppConfigPda.toBuffer()],
        ENDPOINT_PROGRAM_ID
    )[0]
}

export function getEventAuthorityPda(): PublicKey {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(EVENT_SEED, "utf8")],
        ENDPOINT_PROGRAM_ID
    )[0];
}

export function getLzReceiveTypesPda(oappConfigPda: PublicKey): PublicKey {
    return PublicKey.findProgramAddressSync(
        [Buffer.from(LZ_RECEIVE_TYPES_SEED, "utf8"), oappConfigPda.toBuffer()],
        MY_OAPP_PROGRAM_ID
    )[0]
}

export function getPeerPda(oappConfigPda: PublicKey, dstEid: number): PublicKey {
    const bufferDstEid = Buffer.alloc(4);
    bufferDstEid.writeUInt32BE(dstEid)
    return PublicKey.findProgramAddressSync(
        [Buffer.from(PEER_SEED, "utf8"), oappConfigPda.toBuffer(), bufferDstEid],
        MY_OAPP_PROGRAM_ID
    )[0]
}


//MintToken's Metadata
export function getMintTokenMetadataPda(mintToken: PublicKey): PublicKey {
  const TOKEN_METADATA_PROGRAM_ID = PROGRAM_ID;
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      TOKEN_METADATA_PROGRAM_ID.toBuffer(),
      mintToken.toBuffer(),
    ],
    TOKEN_METADATA_PROGRAM_ID,
  )[0];
}


export function getDeployedProgram(): anchor.Program<MemeOapp> {
  const connection = getConnection()
  const wallet = new anchor.Wallet(MY_KEYPAIR)
  const provider = new anchor.AnchorProvider(connection, wallet, {commitment: 'confirmed'})
  const OAppProgram = new anchor.Program<MemeOapp>(MemeOappIDL, MY_OAPP_PROGRAM_ID, provider)
  return OAppProgram
}
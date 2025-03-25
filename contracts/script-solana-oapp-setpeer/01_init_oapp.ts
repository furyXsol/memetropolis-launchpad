import { Transaction,sendAndConfirmTransaction, SystemProgram } from '@solana/web3.js'
import * as utils from './utils'
import { ENDPOINT_PROGRAM_ID, MY_KEYPAIR } from './constants'

async function initializeOApp() {
  const payer = MY_KEYPAIR
  const connection = utils.getConnection()

  const oAppConfigPda = utils.getOAppConfigPda()

  const oappRegistryPda = utils.getOAppRegistryPda(oAppConfigPda)
  const eventAuthorityPda = utils.getEventAuthorityPda()
  const OAppProgram = utils.getDeployedProgram()
  const lzReceiveTypesPda = utils.getLzReceiveTypesPda(oAppConfigPda)

  const ixInitOapp = await OAppProgram.methods.initOapp({
    admin: payer.publicKey,
    endpointProgram: ENDPOINT_PROGRAM_ID,
  }).accounts({
    payer: payer.publicKey,
    oappConfig: oAppConfigPda,
    lzReceiveTypesAccounts: lzReceiveTypesPda,
    systemProgram: SystemProgram.programId
  }).remainingAccounts([
    {
      isSigner: false,
      isWritable: false,
      pubkey: ENDPOINT_PROGRAM_ID,
    },
    {
      isSigner: true,
      isWritable: true,
      pubkey: payer.publicKey,
    },
    {
      isSigner: false,
      isWritable: false,
      pubkey: oAppConfigPda,
    },
    {
      isSigner: false,
      isWritable: true,
      pubkey: oappRegistryPda
    },
    {
      isSigner: false,
      isWritable: false,
      pubkey: SystemProgram.programId
    },
    {
        isSigner: false,
        isWritable: true,
        pubkey: eventAuthorityPda
    },
    {
        isSigner: false,
        isWritable: false,
        pubkey: ENDPOINT_PROGRAM_ID
    },
  ]).instruction()
  const txInitOapp = new Transaction().add(ixInitOapp)
  const oAppSignature = await sendAndConfirmTransaction(connection, txInitOapp, [payer])
  console.log(`✅ Created OApp Config and Init OApp:`, oAppSignature)
}

initializeOApp()
import * as utils from './utils'
import { FEE_RATE, FEE_RECEIPT, MY_KEYPAIR, MY_OAPP_PROGRAM_ID } from './constants'
import { PublicKey, SystemProgram } from '@solana/web3.js'

const createGlobalConfig = async () => {
  const payer = MY_KEYPAIR
  const OAppProgram = utils.getDeployedProgram()
  const [globalConfig] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('pumpfun_config'),
    ],
    MY_OAPP_PROGRAM_ID,
  )

  const hash = await OAppProgram.methods.createGlobalConfig({
    feeRate: FEE_RATE,
    feeRecipient: FEE_RECEIPT,
    admin: payer.publicKey,
  }).accounts({
    payer: payer.publicKey,
    globalConfig,
    systemProgram: SystemProgram.programId
  }).signers([payer]).rpc()

  console.log(`✅ Created Global Config: ${hash}`)
}

createGlobalConfig()

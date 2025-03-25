import * as utils from './utils'
import { MY_KEYPAIR, MY_OAPP_PROGRAM_ID } from './constants'
import { Keypair, PublicKey, SYSVAR_RENT_PUBKEY, SystemProgram } from '@solana/web3.js'
import { getAssociatedTokenAddressSync, ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, createAssociatedTokenAccount } from '@solana/spl-token'
import { BN } from 'bn.js'

const createToken = async () => {
  const payer = MY_KEYPAIR
  const OAppProgram = utils.getDeployedProgram()
  const tokenName = "ABC"
  const tokenSymbol = "ABC"
  const tokenUri = "ABC_URI"
  const tokenMintKP = Keypair.generate()
  const [bondingCurve] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('pumpfun_bonding_curve'),
      tokenMintKP.publicKey.toBuffer(),
    ],
    MY_OAPP_PROGRAM_ID,
  )
  const associtedBondingCurve = getAssociatedTokenAddressSync(
    tokenMintKP.publicKey,
    bondingCurve,
    true,
  )

  const associtedFeeTokenAccount = getAssociatedTokenAddressSync(
    tokenMintKP.publicKey,
    payer.publicKey
  )

  const metaplexProgramId = new PublicKey(
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  )
  const [metadata] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('metadata'),
      metaplexProgramId.toBuffer(), // mpl_token_metadata program id
      tokenMintKP.publicKey.toBuffer(),
    ],
    metaplexProgramId,
  )

  const associtedUserTokenAccount = await getAssociatedTokenAddressSync(tokenMintKP.publicKey, payer.publicKey)

  const createTokenSig = await OAppProgram.methods.createToken({
    name: Buffer.from(tokenName),
    symbol: Buffer.from(tokenSymbol),
    uri: Buffer.from(tokenUri),
    k: 0.000005,
    initialPrice: new BN("8000"),
    maxSupply: new BN("1000000000000000"),
    maximumPerUser: new BN("100000000000000"), //100000
    reservedRatio: new BN("100"), //1%
    salesRatio: new BN("8000"), //80%
    liquidityPoolRatio: new BN("2000"), //20%
    launchDate: new BN("0"),
  }).accounts({
    payer: payer.publicKey,
    tokenMint: tokenMintKP.publicKey,
    bondingCurve,
    associtedBondingCurve,
    associtedUserTokenAccount,
    metadata,
    associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
    tokenProgram: TOKEN_PROGRAM_ID,
    tokenMetadataProgram: metaplexProgramId,
    rent: SYSVAR_RENT_PUBKEY,
    systemProgram: SystemProgram.programId
  }).signers([payer, tokenMintKP]).rpc()
  console.log(`✅ Created Mint Token: ${tokenMintKP.publicKey.toBase58()}} `, createTokenSig)
}

createToken()


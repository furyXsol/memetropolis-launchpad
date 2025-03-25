import { useMutation } from '@tanstack/react-query'
import { UseCreateToken } from '@/core/types/contract'
import { createSolanaTxObject } from '@/core/utils'
import { usePumpfunAnchor } from '@/core/lib/anchor'
import { useSolanaAccount } from '@/core/hooks/solana/use-account'
import {
  PublicKey,
  Keypair,
  SYSVAR_RENT_PUBKEY,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  MINT_SIZE,
  getAssociatedTokenAddressSync,
  getMinimumBalanceForRentExemptMint,
  createInitializeMint2Instruction,
  createAssociatedTokenAccountInstruction,
} from '@solana/spl-token'

export const useCreateToken: UseCreateToken.FunctionType = () => {
  const program = usePumpfunAnchor()
  const { wallet, isConnected } = useSolanaAccount()

  return useMutation({
    mutationFn: async ({ data }) => {
      if (!wallet || !isConnected || !program) {
        throw new Error('No wallet found')
      }

      const tokenMintKP = Keypair.generate()

      const [bondingCurve] = PublicKey.findProgramAddressSync(
        [
          Buffer.from('pumpfun_bonding_curve'),
          tokenMintKP.publicKey.toBuffer(),
        ],
        program.programId,
      )

      const associtedBondingCurve = getAssociatedTokenAddressSync(
        tokenMintKP.publicKey,
        bondingCurve,
        true,
      )

      const metaplexProgramId = new PublicKey(
        'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
      )

      const [metadata] = PublicKey.findProgramAddressSync(
        [
          Buffer.from('metadata'),
          metaplexProgramId.toBuffer(),
          tokenMintKP.publicKey.toBuffer(),
        ],
        metaplexProgramId,
      )

      const payer = new PublicKey(wallet.address)

      const hash = await program.methods
        .createToken({
          name: Buffer.from(data.name),
          symbol: Buffer.from(data.symbol),
          uri: Buffer.from(data.image || ''),
        })
        .accounts({
          payer,
          tokenMint: tokenMintKP.publicKey,
          bondingCurve,
          associtedBondingCurve,
          metadata,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          tokenProgram: TOKEN_PROGRAM_ID,
          tokenMetadataProgram: metaplexProgramId,
          rent: SYSVAR_RENT_PUBKEY,
          systemProgram: SystemProgram.programId,
        })
        .signers([tokenMintKP])
        .rpc()

      return {
        image: data.image || undefined,
        chain: data.chain || 'default_chain', // Assign a default if `chain` is missing
        jeetTax: data.jeetTax,
        name: data.name,
        symbol: data.symbol,
        description: data.description,
        kyc: data.kyc || undefined,
        twitter: data.twitter || undefined,
        telegram: data.telegram || undefined,
        tokenAddress: tokenMintKP.publicKey.toBase58(),
        creator: wallet.address,
        salesRatio: data.salesRatio || undefined,
        reservedRatio: data.reservedRatio || undefined,
        liquidityRatio: data.liquidityRatio || undefined,
        launchDate: data.launchDate || undefined,
        maximumPerUser: data.maximumPerUser || undefined,
      }
    },
  }) as UseCreateToken.ReturnType // Explicit casting to the expected ReturnType
}

import { getAccount, getAssociatedTokenAddressSync } from '@solana/spl-token'
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'
import { SOLANA_PROGRAM_ID } from '@/core/constants/address'

const K = 0.000005
const INITIAL_PRICE = 8000
const MAX_SUPPLY = 1000_000_000_000_000

export const quoteSolanaTokenOut = async (
  tokenMint: string,
  lamportsAmount: number,
): Promise<number> => {
  if (!lamportsAmount || lamportsAmount <= 4000000) {
    //fee
    return 0
  }

  const connection = new Connection(clusterApiUrl('devnet'))
  const programAddr = SOLANA_PROGRAM_ID
  const programId = new PublicKey(programAddr)
  //to get bonding-curve account
  const mint = new PublicKey(tokenMint)
  const [bondingCurve] = PublicKey.findProgramAddressSync(
    [Buffer.from('pumpfun_bonding_curve'), mint.toBuffer()],
    programId,
  )
  const associatedBondingCurve = getAssociatedTokenAddressSync(
    mint,
    bondingCurve,
    true,
  )
  const vaultTokenAccount = await getAccount(connection, associatedBondingCurve)
  const bondingCurveAmount = vaultTokenAccount.amount
  let currentSupply = MAX_SUPPLY - Number(bondingCurveAmount.toString())
  let tokenAmountToPurchased = calculateTokenAmount(
    currentSupply,
    Number((lamportsAmount - 4000000).toString()),
    9,
  )
  return tokenAmountToPurchased
}

export const quoteSolanaSolOut = async (
  tokenMint: string,
  tokenAmount: number,
): Promise<number> => {
  const connection = new Connection(clusterApiUrl('devnet'))
  const programAddr = SOLANA_PROGRAM_ID

  const programId = new PublicKey(programAddr)
  //to get bonding-curve account
  const mint = new PublicKey(tokenMint)
  const [bondingCurve] = PublicKey.findProgramAddressSync(
    [Buffer.from('pumpfun_bonding_curve'), mint.toBuffer()],
    programId,
  )
  const associatedBondingCurve = getAssociatedTokenAddressSync(
    mint,
    bondingCurve,
    true,
  )
  const vaultTokenAccount = await getAccount(connection, associatedBondingCurve)
  const bondingCurveAmount = vaultTokenAccount.amount
  let currentSupply = MAX_SUPPLY - Number(bondingCurveAmount.toString())
  let requiredSol = calculateRequiredSol(
    currentSupply - tokenAmount,
    tokenAmount,
    9,
  )
  return requiredSol
}

const calculateTokenAmount = (
  currentSupply: number,
  lamportsAmount: number,
  decimals: number,
) => {
  const exponent = (K * currentSupply) / 10 ** decimals
  const exp1 = Math.exp(exponent)
  const num = (lamportsAmount * K) / INITIAL_PRICE
  const ln = Math.log(num + exp1)
  const tokenAmount = (ln * 10 ** decimals) / K - currentSupply
  return tokenAmount < 0 ? 0 : Math.floor(tokenAmount)
}

const calculateRequiredSol = (
  currentSupply: number,
  tokenAmount: number,
  decimals: number,
) => {
  const exponent1 = (K * currentSupply + tokenAmount) / 10 ** decimals
  const exponent2 = (K * currentSupply) / 10 ** decimals
  const exp1 = Math.exp(exponent1)
  const exp2 = Math.exp(exponent2)
  return (INITIAL_PRICE * (exp1 - exp2)) / K
}

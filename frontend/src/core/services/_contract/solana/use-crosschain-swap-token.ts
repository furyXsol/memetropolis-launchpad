import { useMutation } from '@tanstack/react-query'
import { useSolanaAccount } from '@/core/hooks/solana/use-account'
import { UseCrosschainSwapToken } from '@/core/types/contract'
import { addressToBytes32, createTxObject } from '@/core/utils'
import TokenFactoryABI from '@/core/constants/abi/token-factory'
import { TOKEN_FACTORY_ADDRESSES } from '@/core/constants/address'
import { readContract } from '@wagmi/core'
import { ChainId, wagmiConfig } from '@/core/lib/wagmi'
import { parseEther } from 'viem'
import {
  LAYERZERO_CHAIN_ID_MAP,
  CHAIN_ID,
  SOLANA_OAPP_CONFIG,
} from '@/core/constants/chains'
import { addressToBytes32 as solanaAddressToBytes32 } from '@layerzerolabs/lz-v2-utilities'
import { quoteSolana } from '@/core/utils/quoteSolana'
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import { UlnProgram, EndpointProgram } from '@layerzerolabs/lz-solana-sdk-v2'
import { getProgram } from '@/core/lib/anchor'
import { hexStringToByteArray } from '@/core/lib/utils'
import { BN } from '@coral-xyz/anchor'
import { Options } from '@layerzerolabs/lz-v2-utilities'

export const useCrosschainSwapToken: UseCrosschainSwapToken.FunctionType =
  () => {
    const { wallet } = useSolanaAccount()
    const { connection } = useConnection()
    const anchorWallet = useAnchorWallet()

    return useMutation({
      mutationFn: async ({ data }: any) => {
        if (!wallet || !wallet.chainId) {
          throw new Error('No wallet found')
        }
        const _srcChainId = data.srcChainId // walletChain
        const _dstChainId = data.dstChainId // tokenChain

        if (!TOKEN_FACTORY_ADDRESSES[_dstChainId]) {
          throw new Error('No token factory found')
        }

        if (!LAYERZERO_CHAIN_ID_MAP[_dstChainId]) {
          throw new Error('No layerzero chain id found')
        }

        const valueWithDecimals = parseEther(data.value)

        if (data.sellBuyFlag === 'buy') {
          if (!data.value) {
            throw new Error('ETH amount is required for buy operations')
          }

          const sendETH = valueWithDecimals // input token chain's native token amount
          const quoteAmount = await quoteSolana(
            connection,
            _dstChainId,
            new PublicKey(wallet.address),
            anchorWallet!,
            data.memeTokenAddress,
            sendETH,
          )
          if (quoteAmount === null || quoteAmount === BigInt(0)) {
            throw new Error('Failed to get quote amount')
          }

          const endpoint = new EndpointProgram.Endpoint(
            EndpointProgram.PROGRAM_ID,
          )
          const { programId: msgLibProgram } = (await endpoint.getSendLibrary(
            //@ts-ignore
            connection,
            SOLANA_OAPP_CONFIG,
            LAYERZERO_CHAIN_ID_MAP[_dstChainId],
          ))!

          const msgLibProgram1 = new UlnProgram.Uln(msgLibProgram!)
          let remainingAccounts = await endpoint.getSendIXAccountMetaForCPI(
            //@ts-ignore
            connection,
            new PublicKey(wallet.address),
            {
              srcEid: LAYERZERO_CHAIN_ID_MAP[CHAIN_ID.SOLANA],
              sender: `0x${Buffer.from(solanaAddressToBytes32(SOLANA_OAPP_CONFIG.toBase58())).toString('hex')}`,
              dstEid: LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              receiver: new PublicKey(
                solanaAddressToBytes32(TOKEN_FACTORY_ADDRESSES[_dstChainId]),
              ).toBase58(),
            } as any,
            msgLibProgram1,
          )

          const oAppProgram = getProgram(connection, anchorWallet as any, {
            commitment: 'confirmed',
          })
          // const tokenAdr = solanaAddressToBytes32(data.memeTokenAddress)}
          const tokenAddr = hexStringToByteArray(
            `${Buffer.from(solanaAddressToBytes32(data.memeTokenAddress)).toString('hex')}`,
          )

          const toAddr = hexStringToByteArray(
            `${Buffer.from(solanaAddressToBytes32(data.receiptAddress)).toString('hex')}`,
          )

          const tokenAmount = (await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_dstChainId] as `0x${string}`,
            functionName: 'getTokenOutOnBuy',
            args: [data.memeTokenAddress, valueWithDecimals],
            chainId: _dstChainId as ChainId,
          })) as bigint

          const ethAmount = new BN(valueWithDecimals.toString())
          const bnTokenAmount = new BN(tokenAmount.toString())
          const options = Options.newOptions().addExecutorLzReceiveOption(
            '200000',
            sendETH,
          )
          const bufferDstEid = Buffer.alloc(4)
          bufferDstEid.writeUInt32BE(LAYERZERO_CHAIN_ID_MAP[_dstChainId])
          const peerPDA = PublicKey.findProgramAddressSync(
            [
              Buffer.from('Peer', 'utf8'),
              SOLANA_OAPP_CONFIG.toBuffer(),
              bufferDstEid,
            ],
            oAppProgram.programId,
          )[0]
          const hash = await oAppProgram.methods
            .send({
              dstEid: LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              msgType: 1,
              tokenAddr,
              toAddr,
              ethAmount,
              tokenAmount: bnTokenAmount,
              options: Buffer.from(options.toBytes()),
              composeMsg: null,
              nativeFee: new BN(quoteAmount.toString()),
              lzTokenFee: new BN('0'),
            })
            .accounts({
              signer: new PublicKey(wallet.address),
              peer: peerPDA,
              oappConfig: SOLANA_OAPP_CONFIG,
            })
            .remainingAccounts(remainingAccounts)
            .signers([])
            .rpc()

          return {
            ...createTxObject({ tx: { hash }, chainId: _srcChainId }),
          }
        } else {
          // sell
          if (!data.value) {
            throw new Error('Token quantity is required for sell operations')
          }

          const requiredETH = await readContract(wagmiConfig, {
            abi: TokenFactoryABI,
            address: TOKEN_FACTORY_ADDRESSES[_dstChainId] as `0x${string}`,
            functionName: 'getEthAmountOnSell',
            args: [data.memeTokenAddress, valueWithDecimals], //valueWithDecimals: token amount to sell
            chainId: _dstChainId as ChainId,
          })
          const sendETH = requiredETH as bigint
          const quoteAmount = await quoteSolana(
            connection,
            _dstChainId,
            new PublicKey(wallet?.address!),
            anchorWallet!,
            data.memeTokenAddress,
            sendETH,
          )

          if (quoteAmount === null || quoteAmount === BigInt(0)) {
            throw new Error('Failed to get quote amount')
          }

          const endpoint = new EndpointProgram.Endpoint(
            EndpointProgram.PROGRAM_ID,
          )
          const { programId: msgLibProgram } = (await endpoint.getSendLibrary(
            //@ts-ignore
            connection,
            SOLANA_OAPP_CONFIG,
            LAYERZERO_CHAIN_ID_MAP[_dstChainId],
          ))!

          const msgLibProgram1 = new UlnProgram.Uln(msgLibProgram!)
          let remainingAccounts = await endpoint.getQuoteIXAccountMetaForCPI(
            //@ts-ignore
            connection,
            new PublicKey(wallet.address),
            {
              srcEid: LAYERZERO_CHAIN_ID_MAP[CHAIN_ID.SOLANA],
              sender: `0x${Buffer.from(solanaAddressToBytes32(SOLANA_OAPP_CONFIG.toBase58())).toString('hex')}`,
              dstEid: LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              receiver: addressToBytes32(TOKEN_FACTORY_ADDRESSES[_dstChainId]),
            } as any,
            msgLibProgram1,
          )

          const oAppProgram = getProgram(connection, anchorWallet as any, {
            commitment: 'confirmed',
          })
          const tokenAddr = hexStringToByteArray(
            `0x${addressToBytes32(data.memeTokenAddress)}`,
          )
          const toAddr = hexStringToByteArray(
            `0x${addressToBytes32(data.receiptAddress)}`,
          )

          const bnTokenAmount = new BN(valueWithDecimals.toString())
          const options = Options.newOptions().addExecutorLzReceiveOption(
            '200000',
            sendETH,
          )
          const bufferDstEid = Buffer.alloc(4)
          const peerPDA = PublicKey.findProgramAddressSync(
            [
              Buffer.from('Peer', 'utf8'),
              SOLANA_OAPP_CONFIG.toBuffer(),
              bufferDstEid,
            ],
            oAppProgram.programId,
          )[0]
          const hash = await oAppProgram.methods
            .send({
              dstEid: LAYERZERO_CHAIN_ID_MAP[_dstChainId],
              msgType: 2,
              tokenAddr,
              toAddr,
              ethAmount: new BN(sendETH.toString()),
              tokenAmount: bnTokenAmount,
              options: Buffer.from(options.toBytes()),
              composeMsg: null,
              nativeFee: new BN(quoteAmount.toString()),
              lzTokenFee: new BN('0'),
            })
            .accounts({
              signer: new PublicKey(wallet.address),
              peer: peerPDA,
              oappConfig: SOLANA_OAPP_CONFIG,
            })
            .remainingAccounts(remainingAccounts)
            .signers([])
            .rpc()

          return {
            ...createTxObject({ tx: { hash }, chainId: _srcChainId }),
          }
        }
      },
    })
  }

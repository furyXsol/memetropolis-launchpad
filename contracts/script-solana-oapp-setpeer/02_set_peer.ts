import * as utils from './utils'
import { DST_EID, PEER_ADDR_ARBI, MY_KEYPAIR, ULN_PROGRAM_ID, MY_OAPP_PROGRAM_ID, ENDPOINT_PROGRAM_ID } from './constants'
import { sendAndConfirmTransaction, SystemProgram, Transaction } from '@solana/web3.js'
import { OftTools, OAPP_SEED } from '@layerzerolabs/lz-solana-sdk-v2'

async function setPeer(){
    const payer = MY_KEYPAIR
    const connection = utils.getConnection()
    const OAppProgram = utils.getDeployedProgram()
    const oAppConfigPda = utils.getOAppConfigPda()
    const peerPda = utils.getPeerPda(oAppConfigPda, DST_EID)

    const peerTransaction = new Transaction().add(
        await OftTools.createInitNonceIx(
            payer.publicKey,
            DST_EID,
            oAppConfigPda,
            PEER_ADDR_ARBI,
            ENDPOINT_PROGRAM_ID
        )
    )
    const peerSignature = await sendAndConfirmTransaction(
        connection,
        peerTransaction,
        [payer],
    )
    console.log(
    `✅ You initialized the peer account for dstEid ${DST_EID}!: ${peerSignature}`,
    )

    const initSendLibraryTransaction = new Transaction().add(
        await OftTools.createInitSendLibraryIx(payer.publicKey, oAppConfigPda, DST_EID),
      )
    const initSendLibrarySignature = await sendAndConfirmTransaction(
        connection,
        initSendLibraryTransaction,
        [payer],
    )
    console.log(
    `✅ You initialized the send library for dstEid ${DST_EID}!: ${initSendLibrarySignature}`,
    )

    // Build the transaction to initialize the receive library for the pathway
    const initReceiveLibraryTransaction = new Transaction().add(
        await OftTools.createInitReceiveLibraryIx(payer.publicKey, oAppConfigPda, DST_EID),
    )
    const initReceiveLibrarySignature = await sendAndConfirmTransaction(
        connection,
        initReceiveLibraryTransaction,
        [payer],
    )
    console.log(
        `✅ You initialized the receive library for dstEid ${DST_EID}!: ${initReceiveLibrarySignature}`,
    )

    // Build the transaction to initialize the OFT Config Account for the pathway
   const initConfigTransaction = new Transaction().add(
    await OftTools.createInitConfigIx(
      payer.publicKey, // Wallet public key
      oAppConfigPda, // Derived OFT Config PDA
      DST_EID, // Destination Endpoint ID (dstEid)
      ULN_PROGRAM_ID, // ULN Program ID
    )
  )

  // Send and confirm the config initialization transaction
  const initConfigSignature = await sendAndConfirmTransaction(
    connection,
    initConfigTransaction,
    [payer],
  )
  console.log(
    `✅ You initialized the config for dstEid ${DST_EID}!: ${initConfigSignature}`,
  )
  const ixInitOapp = await OAppProgram.methods.setPeer({
    dstEid: DST_EID,
    peer: Array.from(PEER_ADDR_ARBI)
  }).accounts({
    admin: payer.publicKey,
    peer: peerPda,
    oappConfig: oAppConfigPda,
    systemProgram: SystemProgram.programId
  }).instruction()
  const createPeerTransaction = new Transaction().add(
    ixInitOapp
  )
  const peerSignature1 = await sendAndConfirmTransaction(
    connection,
    createPeerTransaction,
    [payer]
  )

  // const createPeerTransaction = new Transaction().add(
  //   await OftTools.createSetPeerIx(
  //     MY_OAPP_PROGRAM_ID,
  //     payer.publicKey, // Admin public key
  //     oAppConfigPda, // Derived OFT Config PDA
  //     DST_EID, // Destination Endpoint ID (dstEid)
  //     PEER_ADDR_ARBI, // Peer EVM address converted to bytes32
  //   ),
  // )

  // const peerSignature1 = await sendAndConfirmTransaction(
  //   connection,
  //   createPeerTransaction,
  //   [payer],
  // )
  console.log(
    `✅ Created Peer Account for dstEid ${DST_EID}!: ${peerSignature1}`,
  )
}

setPeer()


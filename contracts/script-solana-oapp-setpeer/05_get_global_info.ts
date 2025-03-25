import { PublicKey } from "@solana/web3.js"
import { MY_OAPP_PROGRAM_ID } from "./constants"
import * as utils from './utils'
const getTokenInfo = async () => {
    const OAppProgram = utils.getDeployedProgram()
    // const tokenMint = new PublicKey("4wKsJsatg4rnddT942Qd6SsKhPdjnCLAzYAmtDcrqgch")
    const globalConfigAddr = PublicKey.findProgramAddressSync(
      [Buffer.from('Global')],
      MY_OAPP_PROGRAM_ID
    )[0]

    console.log('------globalInfo_Addr:', globalConfigAddr.toBase58())
    const globalInfo = await OAppProgram.account.globalConfig.fetch(globalConfigAddr)
    console.log('--------globalInfo_bump:', globalInfo.bump)
    console.log('--------isBuy:', globalInfo.isBuy)
    console.log('--------memeAddress:', globalInfo.memeAddress)
    console.log('--------receiver:', globalInfo.receiver)
    console.log('--------solAmount:', globalInfo.solAmount.toString())
    console.log('--------tokenAmount:', globalInfo.tokenAmount.toString())


}

getTokenInfo()
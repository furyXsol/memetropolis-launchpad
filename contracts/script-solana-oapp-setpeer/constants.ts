import { addressToBytes32 } from '@layerzerolabs/lz-v2-utilities';
import { Keypair, PublicKey } from '@solana/web3.js'
import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';
export const MY_KEYPAIR = Keypair.fromSecretKey(bs58.decode("4mSknaakS4UBMC7ThbkBTnTaBUSjmGfGbuKd1B2uZMYRHCZyRjZBtsb32doP5vUr2Wb538Rf9uFqHQyfQAfs4Hv8"))
export const MY_OAPP_PROGRAM_ID = new PublicKey('CiQZ4gYrjqkWE6QLWcRt5zYkjKrond7Ww1SD33qAtGQr')
export const ENDPOINT_PROGRAM_ID = new PublicKey('76y77prsiCMvXMjuoZ5VRrhG5qYBrUMYTE5WgHqgjEn6')
export const ULN_PROGRAM_ID = new PublicKey('7a4WjyR8VZ7yZz5XJAKm39BUGn5iT9CKcv2pmG9tdXVH')

// export const MSG_LIB_PDA = new PublicKey('2XgGZG4oP29U3w5h4nTk1V2LFHL23zKDPJjs3psGzLKQ')

export const FEE_RECEIPT = new PublicKey("4cASLHHXtomyWCD6muAGeEF17dran74LnXx78LhVfwz3");
export const FEE_RATE = 1000 //1%
// export const LIQUIDITY = new PublicKey("5KjtLUmuFenkLK8ZRsqcC2b7zoLaG1T4rGUeFgkqTGcL");

// export const PEER_ADDR_ARBI = addressToBytes32("0x16c19a9643b9f1dab1adb7543499e4976a3dd6c3")  //Arbitrum OApp Address
export const PEER_ADDR_ARBI = addressToBytes32("0x33844B1C9de1e9D61ec3af4610634D3C2268A6f4")  //bsc OApp Address
// export const DST_EID = 40231  //Arbitrum Sepolia Endpoint ID
export const DST_EID = 40102  //Arbitrum Sepolia Endpoint ID

export const SRC_EID = 40168



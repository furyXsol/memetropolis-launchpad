import { useMutation } from '@tanstack/react-query'
import { PinataSDK } from 'pinata-web3'

export function useUploadPinata() {
  return useMutation({
    mutationFn: async (file: File) => {
      const pinata = new PinataSDK({
        pinataJwt: process.env.NEXT_PUBLIC_PINATA_API_KEY || '',
        pinataGateway: 'gateway.pinata.cloud',
      })

      const upload = await pinata.upload.file(file)
      return `https://gateway.pinata.cloud/ipfs/${upload.IpfsHash}`
    },
  })
}

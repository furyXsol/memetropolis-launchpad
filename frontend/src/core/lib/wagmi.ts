import { fallback, Transport } from 'viem'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'

import {
  PUBLIC_ALL_NODES,
  SUPPORT_ALL_CHAINS,
  SUPPORT_CHAINS,
} from '@/core/constants/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'
import { CLIENT_CONFIG } from '@/core/lib/viem'

const chains = SUPPORT_ALL_CHAINS

export const transports = chains.reduce(
  (ts, chain) => {
    const httpsStrings = !!PUBLIC_ALL_NODES[chain.id]
      ? PUBLIC_ALL_NODES[chain.id]
      : []

    if (!!ts) {
      return {
        ...ts,
        [chain.id]: fallback(httpsStrings.map((url) => http(url))),
      }
    }

    return {
      [chain.id]: fallback(httpsStrings.map((url) => http(url))),
    }
  },
  {} as Record<number, Transport>,
)

export type ChainId = (typeof SUPPORT_CHAINS)[number]['id']

const coinbaseConnector = coinbaseWallet({
  appName: 'Memetropolis',
})

// Add a check to prevent duplicate initialization of WalletConnect modal
let walletConnectConnector
// Check if we're in a browser environment
if (typeof window !== 'undefined') {
  // Only initialize the connector if the custom elements aren't already defined
  if (!window.customElements.get('wcm-button')) {
    walletConnectConnector = walletConnect({
      showQrModal: true,
      projectId: 'd15625ebb0147eeff009c1187a01ffe2',
    })
  } else {
    // If already initialized, create a connector without re-registering components
    walletConnectConnector = walletConnect({
      showQrModal: false, // Don't show QR modal as it would try to register components
      projectId: 'd15625ebb0147eeff009c1187a01ffe2',
    })
  }
} else {
  // Server-side rendering case
  walletConnectConnector = walletConnect({
    showQrModal: true,
    projectId: 'd15625ebb0147eeff009c1187a01ffe2',
  })
}

const metamaskConnector = injected({
  target: 'metaMask',
  shimDisconnect: false,
})
const trustConnector = injected({ target: 'trust', shimDisconnect: false })

export const wagmiConfig = createConfig({
  ssr: false,
  chains,
  connectors: [
    metamaskConnector,
    // injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    trustConnector,
  ],
  transports,
  storage: createStorage({
    storage: cookieStorage,
  }),
  ...CLIENT_CONFIG,
})

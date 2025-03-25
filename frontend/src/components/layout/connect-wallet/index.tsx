'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { RemixIcon } from '@/components/ui/remix-icon'
import { ReactElement, useMemo, useState } from 'react'
import { create } from 'zustand'
import Image from 'next/image'

import { Collapsible } from '@/components/ui/collapsible'
import { Web3Wallet } from '@/core/types/web3'

import { ResponsiveDialog } from '../../ui/responsive-dialog'
import { useConnectWallet } from './use-connect-wallet-modal'
import { DialogClose } from '@/components/ui/dialog'
import { WalletOption } from '@/components/layout/connect-wallet/wallet-option'

type State = {
  open: boolean
  desiredChain?: number
}
type Actions = {
  onOpenChange: (open: boolean) => void
  setDesiredChain: (chainId?: number) => void
}

export const useConnectWalletModalState = create<State & Actions>((set) => ({
  open: false,
  desiredChain: undefined,
  onOpenChange: (open) => set(() => ({ open })),
  setDesiredChain: (chainId) => set(() => ({ desiredChain: chainId })),
}))

type ConnectorTab = {
  provider: Web3Wallet.Providers
  icon: ReactElement
  label: string
}

const CONNECTORS_TABS: ConnectorTab[] = [
  {
    provider: 'evm',
    icon: <RemixIcon icon="RiArrowLeftSLine" className="size-6" />,
    label: 'EVM Wallet',
  },
  {
    provider: 'solana',
    icon: <RemixIcon icon="RiArrowLeftSLine" className="size-6" />,
    label: 'Solana Wallet',
  },
]

export function ConnectWalletModal() {
  const { open, onOpenChange } = useConnectWalletModalState()
  const [view, setView] = useState<'connect' | 'compare'>('connect')

  return (
    <ResponsiveDialog.Root open={open} onOpenChange={onOpenChange}>
      <ResponsiveDialog.Content
        className="w-full border-none bg-[#07040B] md:w-[600px] md:rounded-xl"
        aria-describedby={undefined}
      >
        <div className="relative">
          <DialogClose asChild>
            <button className="absolute right-8 top-8 z-[10] rounded-full bg-[#322C3A] transition-all duration-300 hover:bg-[#5b4c6e]">
              <Image
                src="/assets/img/launch-token/advanced/icon-close.svg"
                width={24}
                height={24}
                alt="Close dialog"
              />
            </button>
          </DialogClose>
          <Image
            src="/assets/img/launch-token/start-with-the-info/bg-gradient.svg"
            width={300}
            height={300}
            alt="Background gradient"
            className="absolute left-0 top-0"
          />
          {
            {
              connect: (
                <ConnectWallet onCompareWallets={() => setView('compare')} />
              ),
              compare: (
                <ConnectWallet onCompareWallets={() => setView('connect')} />
              ),
            }[view]
          }
        </div>
      </ResponsiveDialog.Content>
    </ResponsiveDialog.Root>
  )
}

function ConnectWallet({ onCompareWallets }: { onCompareWallets: () => void }) {
  const {
    activeTab,
    setActiveTab,
    connectingWith,
    connectors,
    handleConnectWallet,
  } = useConnectWallet()

  const connectorTabs = useMemo<
    (ConnectorTab & { connectors: Web3Wallet.Connector[] })[]
  >(() => {
    let filteredConnectors = CONNECTORS_TABS

    return filteredConnectors.map((c) => ({
      ...c,
      connectors:
        connectors.find((con) => con.provider === c.provider)?.connectors || [],
    }))
  }, [connectors])

  return (
    <div className="overflow-auto">
      <ResponsiveDialog.Header className="space-y-1 border-b-0 p-8">
        <ResponsiveDialog.Title className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Connect your wallet</span>
          <span className="text-base font-normal text-[#B5B3B8]">
            You need to connect to a EVM or a Solana wallet.
          </span>
        </ResponsiveDialog.Title>
      </ResponsiveDialog.Header>
      <main>
        <TabsPrimitive.Root
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as Web3Wallet.Providers)}
        >
          <TabsPrimitive.List className="flex items-center gap-2 sm:gap-6 [&>*]:flex-1">
            {connectorTabs.map(({ provider, icon, label }) => (
              <TabsPrimitive.Trigger
                key={`trigger_${provider}`}
                value={provider}
                className="enabled:hover:border-primary-base enabled:hover:text-text-main-900 enabled:focus-visible:border-primary-base data-[state=inactive]:text-text-disabled-300 group z-[10] -mb-0.5 flex h-[52px] items-center justify-center gap-1.5 border-b-2 border-transparent text-center text-[#928E96] transition-all data-[state=active]:border-b-accent data-[state=active]:text-white"
              >
                {/* {icon} */}
                {label}
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          {connectorTabs.map(({ provider, connectors }) => (
            <TabsPrimitive.Content
              key={`content_${provider}`}
              value={provider}
              className="space-y-4 px-12 py-10"
            >
              <WalletConnectorsList
                connectors={connectors}
                connectingWith={connectingWith}
                onConnectWallet={handleConnectWallet}
                provider={provider}
              />
            </TabsPrimitive.Content>
          ))}
        </TabsPrimitive.Root>

        <div
          className="flex justify-center gap-2 pb-8"
          onClick={onCompareWallets}
        >
          <button className="bg-purple-light hover:bg-purple/60 inline-flex size-8 items-center justify-center rounded-full transition-all duration-300">
            <Image
              src="/assets/img/icons/mingcute_wallet-line.svg"
              width={24}
              height={24}
              alt="Wallet icon"
            />
          </button>
          {`I don't have a wallet`}
        </div>
      </main>
    </div>
  )
}

function WalletConnectorsList({
  connectors,
  connectingWith,
  provider = 'evm',
  onConnectWallet,
}: {
  connectors: Web3Wallet.Connector[]
  connectingWith?: string
  provider?: Web3Wallet.Providers
  onConnectWallet: (connectorId: string, provider: Web3Wallet.Providers) => void
}) {
  const splitConnectors = useMemo(() => {
    return [connectors.slice(0, 4), connectors.slice(4)]
  }, [connectors])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {splitConnectors[0].map((connector) => (
          <WalletOption
            key={connector.id}
            connector={connector}
            isConnecting={connector.id === connectingWith}
            provider={provider}
            onConnectWallet={onConnectWallet}
          />
        ))}
      </div>

      {splitConnectors[1].length > 0 && (
        <Collapsible.Root>
          <Collapsible.Trigger />
          <Collapsible.Content className="mt-6 space-y-2">
            {splitConnectors[1].map((connector) => (
              <WalletOption
                key={connector.id}
                connector={connector}
                isConnecting={connector.id === connectingWith}
                provider={provider}
                onConnectWallet={onConnectWallet}
              />
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </div>
  )
}

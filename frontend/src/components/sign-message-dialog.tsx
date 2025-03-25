'use client'

import Image from 'next/image'
import { useQueryClient } from '@tanstack/react-query'
import { useCallback, useMemo, useState } from 'react'

import { ResponsiveDialog } from '@/components/ui/responsive-dialog'
import { useConfirmAction } from '@/core/hooks/use-confirmation-action'
import { useWallet } from '@/core/hooks/use-wallet'
import { useWatchWallet } from '@/core/hooks/use-watch-wallet'
import { useLogin } from '@/core/services/auth/login'
import { useRefreshToken } from '@/core/services/auth/refresh-token'
import { Web3Wallet } from '@/core/types/web3'
import {
  checkJwtTokenExpiration,
  getJWTToken,
  removeJWTToken,
  setJWTToken,
} from '@/core/utils/auth'
import { Button } from '@/components/ui/button'

import { UserAgreementDialog } from '@/components/user-agreement-dialog'

function getSignMessage(address: string) {
  return `Welcome to the Memetropolis!\n\nYou are signing in from wallet address: ${address}\n\nBy clicking "Sign" you agree to our Terms and Conditions. This step does not transfer any funds.\n\nchallenge: ${Date.now()}`
}

export const SignMessageDialog = () => {
  const queryClient = useQueryClient()
  const { cancel, isOpen, proceed, triggerConfirm } = useConfirmAction()
  const { disconnect, signMessage, wallets } = useWallet()
  const { mutate: login } = useLogin()
  const { mutate: refreshToken } = useRefreshToken()

  const [provider, setProvider] = useState<Web3Wallet.Providers>('evm')
  const [isLoading, setIsLoading] = useState(false)

  const [showAgreement, setShowAgreement] = useState(false)

  const address = useMemo(
    () => wallets.find((w) => w.provider === provider)?.address,
    [provider, wallets],
  )

  const invalidateUserQueries = useCallback(async () => {
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: ['FETCH_LAUNCHPADS_BY_USER'],
      }),
      queryClient.invalidateQueries({
        queryKey: ['FETCH_LAUNCHPADS_INVESTED_BY_USER'],
      }),
    ])
  }, [queryClient])

  const handleDisconnect = useCallback(() => {
    disconnect(provider)
    cancel()
  }, [cancel, disconnect, provider])

  const handleSignMessage = useCallback(async () => {
    try {
      if (!address) return
      setIsLoading(true)

      const message = getSignMessage(address)
      const signature = await signMessage(provider, message)

      login(
        { address, message, signature },
        {
          onSuccess: async (data) => {
            setJWTToken({
              address,
              token: data.token,
              expires: data.exp,
            })
            await invalidateUserQueries()
            const hasAgreed = localStorage.getItem('USER_AGREEMENT_CONFIRMED')
            if (!hasAgreed) {
              setShowAgreement(true)
            } else {
              proceed()
            }
          },
          onError: handleDisconnect,
        },
      )
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [
    address,
    login,
    invalidateUserQueries,
    handleDisconnect,
    proceed,
    provider,
    signMessage,
  ])

  const handleRefreshToken = useCallback(
    async (token: string) => {
      try {
        if (!address) return

        refreshToken(
          { token },
          {
            onSuccess: async ({ data }) => {
              setJWTToken({
                address: address!,
                token: data.token,
                expires: data.exp,
              })
              await invalidateUserQueries()
            },
            onError: () => {
              removeJWTToken(address!)
              triggerConfirm()
            },
          },
        )
      } catch (error) {
        console.error(error)
      }
    },
    [address, invalidateUserQueries, triggerConfirm, refreshToken],
  )

  const onChange = useCallback(
    async (account: { address?: string; provider: Web3Wallet.Providers }) => {
      if (!account.address) return

      const token = getJWTToken(account.address)
      setProvider(account.provider)

      if (!token) {
        triggerConfirm()
        return
      }

      const status = checkJwtTokenExpiration(account.address)
      if (status === 'refresh') {
        await handleRefreshToken(token.token)
      }

      if (status === 'expired') {
        removeJWTToken(account.address)
        triggerConfirm()
        return
      }

      cancel()
    },
    [cancel, handleRefreshToken, triggerConfirm],
  )

  useWatchWallet({ onChange })

  return (
    <>
      <ResponsiveDialog.Root
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            const token = address ? getJWTToken(address) : null
            !token && handleDisconnect()
          }
        }}
      >
        <ResponsiveDialog.Content
          className="max-w-xl gap-10 !rounded-3xl border-none bg-primary px-16 py-12"
          aria-describedby={undefined}
        >
          <ResponsiveDialog.Close asChild>
            <button className="absolute right-8 top-8 z-[10] rounded-full bg-[#322C3A] transition-all duration-300 hover:bg-[#5b4c6e]">
              <Image
                src="/assets/img/launch-token/advanced/icon-close.svg"
                width={24}
                height={24}
                alt="Close dialog"
              />
            </button>
          </ResponsiveDialog.Close>
          <main className="flex flex-col items-center text-center">
            <Image
              src="/assets/img/verify-account/Checkmark.svg"
              width={130}
              height={130}
              alt=""
            />
            <span className="text-2xl font-semibold">Verify your account</span>
            <span className="mt-1 text-base font-normal text-secondary-foreground">
              Please sign the message in your wallet to verify your account
              ownership.
            </span>
          </main>
          <ResponsiveDialog.Footer className="flex !flex-row !justify-center gap-6">
            <ResponsiveDialog.Close asChild>
              <Button
                showBorder={false}
                className="h-[48px] w-[180px]"
                variant="outline"
              >
                Cancel
              </Button>
            </ResponsiveDialog.Close>
            <Button
              showBorder={false}
              className="h-[48px] w-[180px]"
              variant="yellow"
              onClick={handleSignMessage}
              loading={isLoading}
            >
              Sign message
            </Button>
          </ResponsiveDialog.Footer>
        </ResponsiveDialog.Content>
      </ResponsiveDialog.Root>

      <UserAgreementDialog
        isOpen={showAgreement}
        onClose={() => setShowAgreement(false)}
        onConfirm={proceed}
      />
    </>
  )
}

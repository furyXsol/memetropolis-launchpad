'use client'

import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface UserAgreementDialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const UserAgreementDialog = ({
  isOpen,
  onClose,
  onConfirm,
}: UserAgreementDialogProps) => {
  const handleConfirm = () => {
    localStorage.setItem('USER_AGREEMENT_CONFIRMED', 'true')
    onConfirm()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-xl gap-10 !rounded-3xl border-none bg-primary px-16 py-12"
        aria-describedby={undefined}
      >
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

        <main className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 rounded-full border-[3px] border-accent px-7 py-2">
            <span className="text-4xl font-semibold">M</span>
            <span className="text-xl">x</span>
            <div className="flex justify-center">
              <Image
                src="/assets/img/icons/avatar_ava.svg"
                className="h-8 w-8"
                width={32}
                height={32}
                alt="Avatar icon"
              />
            </div>
          </div>

          <h2 className="mt-6 text-2xl font-semibold">USER AGREEMENT</h2>

          <p className="mt-4 text-secondary-foreground">
            By participating in this alpha test, you agree to:
          </p>

          <ul className="mt-4 space-y-2 text-left text-secondary-foreground">
            <li>• Keep all technology and features confidential.</li>
            <li>• Provide honest feedback and report any issues.</li>
            <li>• Stress test the system as part of your usage.</li>
            <li>• Refrain from sharing or disclosing any test information.</li>
          </ul>

          <p className="mt-6 text-secondary-foreground">
            Click &quot;Account Sign&quot; to confirm and enter the Alpha Test
          </p>
        </main>

        <div className="flex justify-center gap-6">
          <Button
            className="h-[48px] w-[180px]"
            borderColor="border-accent"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="h-[48px] w-[180px]"
            borderColor="border-accent"
            variant="yellow"
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

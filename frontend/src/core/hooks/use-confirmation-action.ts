import { useCallback, useState } from 'react'

type ConfirmActionChildrenParams = {
  triggerConfirm: () => Promise<boolean>
  proceed: (...args: any[]) => void
  cancel: (...args: any[]) => void
  isOpen: boolean
}

export function useConfirmAction() {

  const [isOpen, setOpen] = useState(false);

  const proceed = useCallback(() => {
    setOpen(false)
  }, [])

  const cancel = useCallback(() => {
    setOpen(false)
  }, [])


  const triggerConfirm = useCallback(() => {
    setOpen(true)
  }, [])

  return { cancel, proceed, isOpen, triggerConfirm }
}

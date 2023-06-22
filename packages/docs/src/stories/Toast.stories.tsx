import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Toast,
  ToastProps,
} from '@joatan.dev/react'
import { useEffect, useRef, useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])
  return (
    <Box css={{ display: 'flex', flexDirection: 'row' }}>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Salvar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </Box>
  )
}

export default {
  title: 'Surfaces/Toast',
  component: DemoToast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {},
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
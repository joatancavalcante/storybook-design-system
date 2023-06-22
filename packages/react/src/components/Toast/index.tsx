import { ComponentProps } from 'react'
import * as ToastConfig from '@radix-ui/react-toast'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Close, ToastContainer, ToastViewport } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ description, ...props }: ToastProps) {
  return (
    <ToastConfig.Provider>
      <ToastContainer {...props}>
        <ToastConfig.Close asChild>
          <Close />
        </ToastConfig.Close>
        <ToastConfig.Title asChild>
          <Heading size="sm">Agendamento realizado</Heading>
        </ToastConfig.Title>
        <ToastConfig.Description asChild>
          <Text size="sm" css={{ color: '$gray200' }}>
            {description}
          </Text>
        </ToastConfig.Description>
      </ToastContainer>
      <ToastViewport />
    </ToastConfig.Provider>
  )
}

Toast.displayName = 'Toast'
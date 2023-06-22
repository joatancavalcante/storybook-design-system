import { ComponentProps } from 'react'
import * as TooltipConfig from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContainer, TooltipInfo } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipConfig.Root> {
  task: Date
  available: boolean
  holiday?: boolean
}
export function Tooltip({ task, available, holiday = false }: TooltipProps) {
  function dateFormate(date: Date): string {
    return Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long' })
      .format(date)
      .toString()
  }

  function dateFormateInDay(date: Date): string {
    return Intl.DateTimeFormat('pt-BR', { day: 'numeric' })
      .format(date)
      .toString()
  }

  return (
    <TooltipConfig.Provider>
      <TooltipConfig.Root>
        <TooltipInfo sideOffset={5}>
          {dateFormate(task)} - {available ? 'Disponível' : 'Indisponível'}
          <TooltipArrow />
        </TooltipInfo>

        <TooltipConfig.Trigger asChild>
          <TooltipContainer holiday={holiday}>
            {dateFormateInDay(task)}
          </TooltipContainer>
        </TooltipConfig.Trigger>
      </TooltipConfig.Root>
    </TooltipConfig.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
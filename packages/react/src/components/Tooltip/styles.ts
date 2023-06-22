import { styled, keyframes } from '../../styles'
import * as TooltipConfig from '@radix-ui/react-tooltip'

export const TooltipContainer = styled('div', {
  width: '4.178rem',
  height: '3.625rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '$sm',

  variants: {
    holiday: {
      true: {
        background: '$gray600',
      },
      false: {
        background: '$gray800',
      },
    },
  },

  fontFamily: '$default',
  fontSize: '$md',
  color: '$white',

  defaultVariants: {
    holiday: 'false',
  },
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipInfo = styled(TooltipConfig.Content, {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray900',
  borderRadius: '$sm',

  width: '13.6875rem',
  height: '2.75rem',

  boxShadow: '4px 16px 24px rgba(0, 0, 0, 0.25)',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const TooltipArrow = styled(TooltipConfig.Arrow, {
  fill: '$gray900',
})
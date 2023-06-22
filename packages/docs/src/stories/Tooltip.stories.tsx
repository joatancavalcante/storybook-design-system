import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@joatan.dev/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    task: new Date(),
    available: true,
    holiday: false,
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', background: '$gray100' }}
      >
        {Story()}
      </Box>
    ),
  ],
  argTypes: {},
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
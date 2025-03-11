import type { Meta, StoryObj } from '@storybook/react'

import TestComponent from './TestComponent'

const meta: Meta<typeof TestComponent> = {
  component: TestComponent,
}

export default meta

type Story = StoryObj<typeof TestComponent>

export const Main: Story = {
  args: {},
}

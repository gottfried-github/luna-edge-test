import type { Meta, StoryObj } from '@storybook/react'
import SelectStoriesWrapper from './SelectStoriesWrapper'

const meta: Meta<typeof SelectStoriesWrapper> = {
  component: SelectStoriesWrapper,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SelectStoriesWrapper>

const demoOptions = [
  {
    value: 'bulbasaur',
    label: 'bulbasaur',
  },
  {
    value: 'ivysaur',
    label: 'ivysaur',
  },
  {
    value: 'venusaur',
    label: 'venusaur',
  },
  {
    value: 'charmander',
    label: 'charmander',
  },
  {
    value: 'charmeleon',
    label: 'charmeleon',
  },
  {
    value: 'charizard',
    label: 'charizard',
  },
  {
    value: 'squirtle',
    label: 'squirtle',
  },
  {
    value: 'wartortle',
    label: 'wartortle',
  },
  {
    value: 'blastoise',
    label: 'blastoise',
  },
  {
    value: 'caterpie',
    label: 'caterpie',
  },
  {
    value: 'metapod',
    label: 'metapod',
  },
  {
    value: 'butterfree',
    label: 'butterfree',
  },
]

export const Empty: Story = {
  args: {
    chosenOptions: [],
    options: demoOptions,
    label: 'Choose your pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {},
  },
}

export const Chosen: Story = {
  args: {
    chosenOptions: [
      {
        value: 'bulbasaur',
        label: 'bulbasaur',
      },
      {
        value: 'charmeleon',
        label: 'charmeleon',
      },
      {
        value: 'charizard',
        label: 'charizard',
      },
    ],
    options: demoOptions,
    label: 'Choose your pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {},
  },
}

export const Error: Story = {
  args: {
    chosenOptions: [
      {
        value: 'bulbasaur',
        label: 'bulbasaur',
      },
    ],
    options: demoOptions,
    label: 'Choose your pokemons',
    errorText: 'you must pick 4 pokemons',
    helperText: 'This information is required',
    placeholder: 'Choose your pokemons',
    onChange: () => {},
    onBlur: () => {},
  },
}

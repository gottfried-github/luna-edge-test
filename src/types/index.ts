export type PokemonListEntry = {
  name: string
  url: string
}

export type Pokemon = {
  name: string
  height: number
  sprites: {
    front_default: string
  }
}

export type SelectOption = {
  value: string
  label: string
}

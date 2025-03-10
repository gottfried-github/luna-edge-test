import { useState, useEffect, useContext } from 'react'
import { PokemonListEntry, SelectOption } from '../../types'
import axios from '../../axios'
import { ErrorContext } from '../../contexts'
import Select from '../Select/Select'

interface Props {
  value: PokemonListEntry[]
  onChange: (v: PokemonListEntry[]) => void
  onBlur: () => void
}

const PokemonsSelect = ({ value, onChange, onBlur }: Props) => {
  const setError = useContext(ErrorContext)

  const [pokemons, setPokemons] = useState<PokemonListEntry[]>([])
  const [options, setOptions] = useState<SelectOption[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios('/pokemon?limit=100000&offset=0')

        setPokemons(data.results)
        setOptions(
          data.results.map((pokemon: PokemonListEntry) => ({
            value: pokemon.name,
            label: pokemon.name,
          }))
        )
      } catch (e) {
        setError(e)
      }
    }

    fetchPokemons()

    // setOptions(['pokemon one', 'pokemon two', 'pokemon three', 'pokemon four', 'pokemon five'])
  }, [])

  const handleChange = (chosenOptions: SelectOption[]) => {
    onChange(
      chosenOptions.map(chosenOption => {
        const chosenPokemon = pokemons.find(pokemon => pokemon.name === chosenOption.value)

        if (!chosenPokemon) {
          setError(new Error("pokemon with given name doesn't exist"))
          return undefined as unknown as PokemonListEntry
        }

        return chosenPokemon
      })
    )
  }

  return (
    <Select
      value={value.map(pokemon => ({
        value: pokemon.name,
        label: pokemon.name,
      }))}
      onChange={handleChange}
      onBlur={onBlur}
      options={options}
    />
  )
}

export default PokemonsSelect

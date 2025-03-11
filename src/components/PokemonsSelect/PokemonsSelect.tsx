import { useState, useEffect, useContext } from 'react'
import { PokemonListEntry, SelectOption } from '../../types'
import axios from '../../axios'
import { ErrorContext } from '../../contexts'
import Select from '../Select/Select'

interface Props {
  chosenPokemons: PokemonListEntry[]
  label?: string
  errorText?: string
  helperText?: string
  placeholder?: string
  disabled?: boolean
  onChange: (v: PokemonListEntry[]) => void
  onBlur: () => void
}

const PokemonsSelect = ({
  chosenPokemons,
  label,
  errorText,
  helperText,
  placeholder,
  disabled,
  onChange,
  onBlur,
}: Props) => {
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
      chosenOptions={chosenPokemons.map(pokemon => ({
        value: pokemon.name,
        label: pokemon.name,
      }))}
      label={label}
      errorText={errorText}
      helperText={helperText}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      onBlur={onBlur}
      options={options}
    />
  )
}

export default PokemonsSelect

import { useState, useEffect } from 'react'
import { PokemonListEntry } from '../../types'
import axios from '../../axios'
import Select from '../Select/Select'

interface Props {
  value: string[]
  onChange: (v: string[]) => void
  onBlur: () => void
}

const PokemonsSelect = ({ value, onChange, onBlur }: Props) => {
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios('/pokemon?limit=100000&offset=0')

      setOptions(data.results.map((pokemon: PokemonListEntry) => pokemon.name))
    }

    fetchPokemons()

    // setOptions(['pokemon one', 'pokemon two', 'pokemon three', 'pokemon four', 'pokemon five'])
  }, [])

  return <Select value={value} onChange={onChange} onBlur={onBlur} options={options} />
}

export default PokemonsSelect

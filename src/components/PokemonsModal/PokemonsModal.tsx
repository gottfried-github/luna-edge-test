import { useState, useEffect, useContext } from 'react'
import { PokemonListEntry, Pokemon } from '../../types'
import { ErrorContext } from '../../contexts'
import axios from '../../axios'
import Button from '../Button/Button'
import XMark from '../icons/XMark'

interface Props {
  pokemons: PokemonListEntry[]
  onClose: () => void
  onCancel: () => void
  onSave: () => void
}

const PokemonsModal = ({ pokemons, onClose, onCancel, onSave }: Props) => {
  const [pokemonsData, setPokemonsData] = useState<Pokemon[]>([])
  const setError = useContext(ErrorContext)

  useEffect(() => {
    console.log('PokemonsModal, pokemons:', pokemons)

    const fetchPokemonsData = async () => {
      const _pokemonsData = []

      for (const pokemon of pokemons) {
        try {
          const { data } = await axios.get(`/pokemon/${pokemon.name}`)
          console.log('PokemonsModal, fetchPokemonsData loop step')

          _pokemonsData.push(data)
        } catch (e) {
          setError(e)
          return
        }
      }

      setPokemonsData(_pokemonsData)
    }

    fetchPokemonsData()
  }, [])

  return (
    <div className="fixed top-0 left-0 z-10 flex h-screen w-screen flex-col" onClick={onClose}>
      <div className="mx-4 my-auto rounded-sm bg-neutral-50 p-6 shadow-md sm:m-auto sm:w-[600px]">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-2xl font-bold">Your pokemons team</h1>
          <XMark className="w-5" onClick={onClose} />
        </div>
        <div className="max-h-[300px] w-full overflow-auto">
          {pokemonsData.map(pokemonData => (
            <div key={pokemonData.name} className="flex gap-4">
              <img
                className="h-[96px] w-[96px] object-contain"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
              <div>
                <p>name: {pokemonData.name}</p>
                <p>height: {pokemonData.height}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end pt-4">
          <div className="flex gap-4">
            <Button label="Cancel" onClick={onCancel} />
            <Button label="Save" filled onClick={onSave} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonsModal

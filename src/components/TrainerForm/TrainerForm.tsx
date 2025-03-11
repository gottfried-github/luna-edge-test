import { useState, useEffect } from 'react'
import { useForm, useController } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, array } from 'yup'
import { PokemonListEntry } from '../../types'
import TextInput from '../TextInput/TextInput'
import PokemonsSelect from '../PokemonsSelect/PokemonsSelect'
import PokemonsModal from '../PokemonsModal/PokemonsModal'
import Button from '../Button/Button'

type FormData = {
  firstname: string
  lastname: string
  pokemons: PokemonListEntry[]
}

const schema = object({
  firstname: string()
    .required()
    .min(2)
    .max(12)
    .matches(/^[a-zA-Z]*$/, 'this field should only use alphabetical characters'),
  lastname: string()
    .required()
    .min(2)
    .max(12)
    .matches(/^[a-zA-Z]*$/, 'this field should only use alphabetical characters'),
  pokemons: array().required().length(4),
})

const TrainerForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      firstname: '',
      lastname: '',
      pokemons: [],
    },
    resolver: yupResolver(schema),
  })
  const { field: pokemonsField } = useController({ name: 'pokemons', control })

  useEffect(() => {
    console.log('TrainerForm, useEffect on errors - errors:', errors)
  }, [errors])

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const submitHandler = (data: FormData) => {
    console.log('TrainerForm, submitHandler - data:', data)

    setIsModalOpen(true)
  }

  return (
    <>
      <div className="mx-4 my-auto rounded-sm bg-neutral-50 p-6 shadow-md sm:m-auto sm:w-lg">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitHandler)}>
          <TextInput
            label="Firstname"
            fieldData={register('firstname')}
            helperText="This information is required"
            errorText={errors.firstname?.message}
            placeholder="Firstname"
          />
          <TextInput
            label="Lastname"
            fieldData={register('lastname')}
            helperText="This information is required"
            errorText={errors.lastname?.message}
            placeholder="Lastname"
          />
          <PokemonsSelect
            chosenPokemons={pokemonsField.value}
            label="Choose your pokemons"
            helperText="This information is required"
            errorText={errors.pokemons?.message}
            placeholder="Choose your pokemons"
            onChange={pokemonsField.onChange}
            onBlur={pokemonsField.onBlur}
          />
          <Button label="Submit" filled className="self-end" />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
      {isModalOpen ? (
        <PokemonsModal
          pokemons={pokemonsField.value}
          onClose={handleModalClose}
          onCancel={handleModalClose}
          onSave={handleModalClose}
        />
      ) : null}
    </>
  )
}

export default TrainerForm

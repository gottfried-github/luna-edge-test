import { useEffect } from 'react'
import { useForm, useController } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, array } from 'yup'
import TextInput from '../TextInput/TextInput'
import PokemonsSelect from '../PokemonsSelect/PokemonsSelect'

type FormData = {
  firstname: string
  lastname: string
  pokemons: string[]
}

const schema = object({
  firstname: string().required().min(2).max(5),
  lastname: string().required().min(2).max(5),
  pokemons: array().required().length(4),
})

const TrainerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: {
      firstname: 'firstname',
      lastname: 'lastname',
      pokemons: [],
    },
    resolver: yupResolver(schema),
  })
  const { field: pokemonsField } = useController({ name: 'pokemons', control })

  const submitHandler = (data: FormData) => {
    console.log('TrainerForm, submitHandler - data:', data)
  }

  useEffect(() => {
    console.log('TrainerForm, useEffect on errors - errors:', errors)
  }, [errors])

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <TextInput label="Firstname" fieldData={register('firstname')} />
      <TextInput label="Lastname" fieldData={register('lastname')} />
      <PokemonsSelect
        value={pokemonsField.value}
        onChange={pokemonsField.onChange}
        onBlur={pokemonsField.onBlur}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TrainerForm

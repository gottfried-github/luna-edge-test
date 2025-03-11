import { useState } from 'react'
import { SelectOption } from '../../types'
import Select from './Select'

interface Props {
  chosenOptions: SelectOption[]
  options: SelectOption[]
  label?: string
  errorText?: string
  helperText?: string
  placeholder?: string
  onChange: (v: SelectOption[]) => void
  onBlur: () => void
}

const SelectStoriesWrapper = ({
  chosenOptions,
  options,
  label,
  errorText,
  helperText,
  placeholder,
  onChange,
  onBlur,
}: Props) => {
  const [chosenOptionsState, setChosenOptionsState] = useState(chosenOptions)

  const handleChange = (chosenOptions: SelectOption[]) => {
    setChosenOptionsState(chosenOptions)
  }

  return (
    <Select
      chosenOptions={chosenOptionsState}
      options={options}
      label={label}
      errorText={errorText}
      helperText={helperText}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={onBlur}
    />
  )
}

export default SelectStoriesWrapper

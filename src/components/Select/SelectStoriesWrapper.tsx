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
  disabled?: boolean
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
  disabled,
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
      disabled={disabled}
      onChange={handleChange}
      onBlur={onBlur}
    />
  )
}

export default SelectStoriesWrapper

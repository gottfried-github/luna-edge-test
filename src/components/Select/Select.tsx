import { useContext, ChangeEvent } from 'react'
import { SelectOption } from '../../types'
import { ErrorContext } from '../../contexts'
import SelectHead from './SelectHead'

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

const Select = ({
  chosenOptions,
  options,
  label,
  errorText,
  helperText,
  placeholder,
  onChange,
  onBlur,
}: Props) => {
  const setError = useContext(ErrorContext)

  const handleChoose = (ev: ChangeEvent<HTMLSelectElement>) => {
    const chosenOption = options.find(option => option.value === ev.target.value)

    if (!chosenOption) {
      setError(new Error("option with given value doesn't exist"))

      return
    }

    onChange([...chosenOptions, chosenOption])
  }

  const handleDeleteOption = (option: SelectOption) => {
    onChange(chosenOptions.filter(_option => _option.value !== option.value))
  }

  const handleDeleteAllOptions = () => {
    onChange([])
  }

  return (
    <div className="flex flex-col gap-2">
      {label ? <div>{label}</div> : null}
      <div>
        <SelectHead
          chosenOptions={chosenOptions}
          onDeleteOption={handleDeleteOption}
          onDeleteAllOptions={handleDeleteAllOptions}
          placeholder={placeholder}
        />
        <select onChange={handleChoose} onBlur={onBlur}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {helperText && !errorText ? <div>{helperText}</div> : null}
      {errorText ? <div className="text-red-600">{errorText}</div> : null}
    </div>
  )
}

export default Select

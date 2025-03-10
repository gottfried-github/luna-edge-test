import { useContext, ChangeEvent } from 'react'
import { SelectOption } from '../../types'
import { ErrorContext } from '../../contexts'

interface Props {
  value: SelectOption[]
  options: SelectOption[]
  onChange: (v: SelectOption[]) => void
  onBlur: () => void
}

const Select = ({ value, options, onChange, onBlur }: Props) => {
  const setError = useContext(ErrorContext)

  const handleChoose = (ev: ChangeEvent<HTMLSelectElement>) => {
    const chosenOption = options.find(option => option.value === ev.target.value)

    if (!chosenOption) {
      setError(new Error("option with given value doesn't exist"))

      return
    }

    onChange([...value, chosenOption])
  }

  const handleDelete = (option: SelectOption) => {
    onChange(value.filter(_option => _option.value !== option.value))
  }

  return (
    <div>
      <div>
        {value.map(optionChosen => (
          <div>
            {optionChosen.label}
            <button
              onClick={() => {
                handleDelete(optionChosen)
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
      <select onChange={handleChoose} onBlur={onBlur}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

import { useContext, ChangeEvent } from 'react'
import { SelectOption } from '../../types'
import { ErrorContext } from '../../contexts'
import ChevronDown from '../icons/ChevronDown'
import XMark from '../icons/XMark'

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

  const handleDelete = (option: SelectOption) => {
    onChange(chosenOptions.filter(_option => _option.value !== option.value))
  }

  const handleDeleteAll = () => {
    onChange([])
  }

  return (
    <div className="flex flex-col gap-2">
      {label ? <div>{label}</div> : null}
      <div>
        <div className="relative flex h-10 items-center rounded-lg border border-neutral-500 px-4 hover:border-violet-700">
          <div className="flex items-center text-neutral-500">
            {chosenOptions.length
              ? chosenOptions.map(optionChosen => (
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
                ))
              : placeholder || null}
          </div>
          <div className="absolute right-0 flex items-center gap-1 bg-neutral-50 pr-4 pl-2">
            {chosenOptions.length ? <XMark className="w-[18px]" onClick={handleDeleteAll} /> : null}
            <ChevronDown className="w-[18px]" />
          </div>
        </div>
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

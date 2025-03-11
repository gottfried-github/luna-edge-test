import { useState, useMemo, useContext, ChangeEvent } from 'react'
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
  const [isOpen, setIsOpen] = useState(false)
  const [optionsFilter, setOptionsFilter] = useState('')
  // const setError = useContext(ErrorContext)

  const optionsToRender = useMemo(() => {
    const optionsFiltered = optionsFilter
      ? options.filter(option => option.label.startsWith(optionsFilter))
      : options

    return optionsFiltered.filter(option => {
      const optionChosen = chosenOptions.find(_option => _option.value === option.value)

      return !optionChosen
    })
  }, [options, chosenOptions, optionsFilter])

  const handleClose = () => {
    setOptionsFilter('')
    setIsOpen(false)
  }

  const handleHeadClick = () => {
    if (isOpen) {
      handleClose()
    } else {
      setIsOpen(true)
    }
  }

  const handleDeleteOption = (option: SelectOption) => {
    onChange(chosenOptions.filter(_option => _option.value !== option.value))
  }

  const handleDeleteAllOptions = () => {
    onChange([])
  }

  const handleChoose = (option: SelectOption) => {
    onChange([...chosenOptions, option])
  }

  const handleFilterChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setOptionsFilter(ev.target.value)
  }

  const handleCloseAreaClick = () => {
    handleClose()
    onBlur()
  }

  return (
    <div className="flex flex-col gap-2">
      {label ? <div>{label}</div> : null}
      <div className="relative">
        {isOpen ? (
          <div
            className="fixed top-0 left-0 h-screen w-screen"
            onClick={handleCloseAreaClick}
          ></div>
        ) : null}
        <SelectHead
          chosenOptions={chosenOptions}
          onDeleteOption={handleDeleteOption}
          onDeleteAllOptions={handleDeleteAllOptions}
          onClick={handleHeadClick}
          isOpen={isOpen}
          isError={!!errorText}
          placeholder={placeholder}
        />
        {isOpen ? (
          <div className="absolute mt-2 flex w-full flex-col gap-2 rounded-lg bg-neutral-50 p-1.5 shadow-md">
            <input
              type="text"
              placeholder="search"
              className="w-full rounded-lg border border-neutral-500 px-4 py-2 hover:border-violet-700 focus:border-violet-700"
              value={optionsFilter}
              onChange={handleFilterChange}
            />
            <div className="max-h-[150px] overflow-auto">
              {optionsToRender.map(option => (
                <div
                  key={option.value}
                  onClick={() => {
                    handleChoose(option)
                    handleClose()
                    onBlur()
                  }}
                  className="px-4 py-0.5 hover:bg-stone-200"
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {helperText && !errorText ? <div>{helperText}</div> : null}
      {errorText ? <div className="text-red-600">{errorText}</div> : null}
    </div>
  )
}

export default Select

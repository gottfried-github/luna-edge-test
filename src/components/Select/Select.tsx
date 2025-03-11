import { useState, useMemo, useContext, ChangeEvent } from 'react'
import { SelectOption } from '../../types'
import { ErrorContext } from '../../contexts'
import SelectHead from './SelectHead'
import SelectDropdown from './SelectDropdown'

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

  const handleChooseOption = (option: SelectOption) => {
    onChange([...chosenOptions, option])
    handleClose()
    onBlur()
  }

  const handleOptionsFilterChange = (v: string) => {
    setOptionsFilter(v)
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
          <SelectDropdown
            options={optionsToRender}
            onChooseOption={handleChooseOption}
            optionsFilterValue={optionsFilter}
            onOptionsFilterChange={handleOptionsFilterChange}
          />
        ) : null}
      </div>
      {helperText && !errorText ? <div>{helperText}</div> : null}
      {errorText ? <div className="text-red-600">{errorText}</div> : null}
    </div>
  )
}

export default Select

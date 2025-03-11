import { SelectOption } from '../../types'
import ChosenOption from './ChosenOption'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import XMark from '../icons/XMark'
import { MouseEvent } from 'react'

interface Props {
  chosenOptions: SelectOption[]
  onDeleteOption?: (option: SelectOption) => void
  onDeleteAllOptions?: () => void
  onClick?: () => void
  isOpen: boolean
  isError?: boolean
  placeholder?: string
  disabled?: boolean
}

const SelectHead = ({
  chosenOptions,
  onDeleteOption,
  onDeleteAllOptions,
  onClick,
  isOpen,
  isError,
  placeholder,
  disabled,
}: Props) => {
  const containerClassBase =
    'relative flex h-10 items-center overflow-hidden rounded-lg border border-neutral-500 px-4'
  const containerClassEnabled = `${containerClassBase} bg-neutral-50 hover:border-violet-700`
  const containerClassDisabled = `${containerClassBase} bg-neutral-300`
  const containerClassError = `${containerClassEnabled} border-red-600`
  const navClassBase = 'absolute right-0 flex h-full items-center gap-1 pr-4 pl-2'
  const navClassEnabled = `${navClassBase} bg-neutral-50`
  const navClassDisabled = `${navClassBase} bg-neutral-300`

  const handleDeleteAllClick = (ev: MouseEvent<SVGSVGElement>) => {
    ev.stopPropagation()
    if (onDeleteAllOptions) onDeleteAllOptions()
  }

  return (
    <div
      className={
        disabled ? containerClassDisabled : isError ? containerClassError : containerClassEnabled
      }
      onClick={onClick}
    >
      <div className="flex items-center gap-2.5 text-neutral-500">
        {chosenOptions.length
          ? chosenOptions.map(optionChosen => (
              <ChosenOption
                key={optionChosen.value}
                option={optionChosen}
                onDelete={onDeleteOption}
              />
            ))
          : placeholder || null}
      </div>
      <div className={disabled ? navClassDisabled : navClassEnabled}>
        {chosenOptions.length ? (
          <XMark className="w-[18px]" onClick={handleDeleteAllClick} />
        ) : null}
        {isOpen ? <ChevronUp className="w-[18px]" /> : <ChevronDown className="w-[18px]" />}
      </div>
    </div>
  )
}

export default SelectHead

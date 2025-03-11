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
}

const SelectHead = ({
  chosenOptions,
  onDeleteOption,
  onDeleteAllOptions,
  onClick,
  isOpen,
  isError,
  placeholder,
}: Props) => {
  const containerClassBase =
    'bg-neutral-50 relative flex h-10 items-center overflow-hidden rounded-lg border border-neutral-500 px-4 hover:border-violet-700'

  const handleDeleteAllClick = (ev: MouseEvent<SVGSVGElement>) => {
    ev.stopPropagation()
    if (onDeleteAllOptions) onDeleteAllOptions()
  }

  return (
    <div
      className={isError ? `${containerClassBase} border-red-600` : containerClassBase}
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
      <div className="absolute right-0 flex h-full items-center gap-1 bg-neutral-50 pr-4 pl-2">
        {chosenOptions.length ? (
          <XMark className="w-[18px]" onClick={handleDeleteAllClick} />
        ) : null}
        {isOpen ? <ChevronUp className="w-[18px]" /> : <ChevronDown className="w-[18px]" />}
      </div>
    </div>
  )
}

export default SelectHead

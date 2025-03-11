import { SelectOption } from '../../types'
import ChosenOption from './ChosenOption'
import ChevronDown from '../icons/ChevronDown'
import XMark from '../icons/XMark'

interface Props {
  chosenOptions: SelectOption[]
  onDeleteOption?: (option: SelectOption) => void
  onDeleteAllOptions?: () => void
  placeholder?: string
}

const SelectHead = ({ chosenOptions, onDeleteOption, onDeleteAllOptions, placeholder }: Props) => {
  return (
    <div className="relative flex h-10 items-center overflow-hidden rounded-lg border border-neutral-500 px-4 hover:border-violet-700">
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
        {chosenOptions.length ? <XMark className="w-[18px]" onClick={onDeleteAllOptions} /> : null}
        <ChevronDown className="w-[18px]" />
      </div>
    </div>
  )
}

export default SelectHead

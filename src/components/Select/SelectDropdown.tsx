import { ChangeEvent } from 'react'
import { SelectOption } from '../../types'

interface Props {
  options: SelectOption[]
  optionsFilterValue: string
  onOptionsFilterChange: (v: string) => void
  onChooseOption: (option: SelectOption) => void
}

const SelectDropdown = ({
  options,
  optionsFilterValue,
  onOptionsFilterChange,
  onChooseOption,
}: Props) => {
  const handleOptionsFilterChange = (ev: ChangeEvent<HTMLInputElement>) => {
    onOptionsFilterChange(ev.target.value)
  }

  return (
    <div className="absolute mt-2 flex w-full flex-col gap-2 rounded-lg bg-neutral-50 p-1.5 shadow-md">
      <input
        type="text"
        placeholder="search"
        className="w-full rounded-lg border border-neutral-500 px-4 py-2 hover:border-violet-700 focus:border-violet-700"
        value={optionsFilterValue}
        onChange={handleOptionsFilterChange}
      />
      <div className="max-h-[150px] overflow-auto">
        {options.map(option => (
          <div
            key={option.value}
            onClick={() => {
              onChooseOption(option)
            }}
            className="px-4 py-0.5 hover:bg-stone-200"
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectDropdown

import { ChangeEvent } from 'react'

interface Props {
  value: string[]
  options: string[]
  onChange: (v: string[]) => void
  onBlur: () => void
}

const Select = ({ value, options, onChange, onBlur }: Props) => {
  const handleChoose = (ev: ChangeEvent<HTMLSelectElement>) => {
    onChange([...value, ev.target.value])
  }

  const handleDelete = (option: string) => {
    onChange(value.filter(_option => _option !== option))
  }

  return (
    <div>
      <div>
        {value.map(optionChosen => (
          <div>
            {optionChosen}
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
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

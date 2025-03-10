import { ChangeEvent } from 'react'

interface Props {
  value: string[]
  onChange: (v: string[]) => void
  onBlur: () => void
}

const Select = ({ value, onChange, onBlur }: Props) => {
  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    onChange([...value, ev.target.value])
  }

  return (
    <div>
      <div>
        {value.map(pokemon => (
          <div>{pokemon}</div>
        ))}
      </div>
      <select onChange={handleChange} onBlur={onBlur}>
        <option value="pokemon one">pokemon one</option>
        <option value="pokemon two">pokemon two</option>
        <option value="pokemon three">pokemon three</option>
        <option value="pokemon four">pokemon four</option>
        <option value="pokemon five">pokemon five</option>
      </select>
    </div>
  )
}

export default Select

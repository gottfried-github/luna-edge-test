import { Ref } from 'react'
import { ChangeHandler } from 'react-hook-form'

interface Props {
  label: string
  fieldData: {
    name: string
    ref: Ref<HTMLInputElement>
    onChange: ChangeHandler
    onBlur: ChangeHandler
  }
}

const TextInput = ({ label, fieldData }: Props) => {
  return (
    <div>
      <div>{label}</div>
      <input type="text" {...fieldData} />
    </div>
  )
}

export default TextInput

import { Ref } from 'react'
import { ChangeHandler } from 'react-hook-form'

interface Props {
  label: string
  helperText?: string
  errorText?: string
  placeholder?: string
  fieldData: {
    name: string
    ref: Ref<HTMLInputElement>
    onChange: ChangeHandler
    onBlur: ChangeHandler
  }
}

const TextInput = ({ label, helperText, errorText, placeholder, fieldData }: Props) => {
  const inputClassBase =
    'w-full rounded-lg border border-neutral-500 px-4 py-2 hover:border-violet-700 focus:border-violet-700'

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldData.name}>{label}</label>
      <input
        id={fieldData.name}
        type="text"
        className={errorText ? `${inputClassBase} border-red-600` : inputClassBase}
        {...fieldData}
        placeholder={placeholder}
      />
      {helperText && !errorText ? <div>{helperText}</div> : null}
      {errorText ? <div className="text-red-600">{errorText}</div> : null}
    </div>
  )
}

export default TextInput

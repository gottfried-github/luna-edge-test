interface Props {
  label: string
  filled?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({ label, filled, onClick, className }: Props) => {
  const buttonClassBase = 'rounded-sm px-3 py-2'
  const buttonFilledClass = 'bg-purple-600 text-white'

  return (
    <button
      className={
        filled
          ? `${buttonClassBase} ${buttonFilledClass} ${className}`
          : `${buttonClassBase} ${className}`
      }
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button

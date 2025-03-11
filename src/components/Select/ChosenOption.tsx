import { SelectOption } from '../../types'
import XMark from '../icons/XMark'

interface Props {
  option: SelectOption
  onDelete?: (option: SelectOption) => void
}

const ChosenOption = ({ option, onDelete }: Props) => {
  const handleDelete = () => {
    if (!onDelete) return

    onDelete(option)
  }

  return (
    <div className="flex items-center gap-1.5 rounded-3xl bg-stone-200 px-2.5 py-0.5 text-neutral-950">
      {option.label}
      <XMark className="w-4" onClick={handleDelete} />
    </div>
  )
}

export default ChosenOption

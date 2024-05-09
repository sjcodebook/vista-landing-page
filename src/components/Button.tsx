import { cn } from '@/lib/utils'

export default function Page({
  text = '',
  className = '',
  onClick,
}: {
  text: string
  className?: string
  onClick: () => void
}) {
  return (
    <button className={cn('btn btn-accent text-white', className)} onClick={onClick ?? (() => {})}>
      {text}
    </button>
  )
}

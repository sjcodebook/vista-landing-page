import { cn } from '@/lib/utils'
import { HTMLInputTypeAttribute } from 'react'

export default function Page({
  type = 'text',
  placeholder = '',
  classes = '',
  value,
  onChange,
}: {
  type?: HTMLInputTypeAttribute
  placeholder: string
  classes?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn('input input-bordered w-full', classes)}
      value={value}
      onChange={onChange}
    />
  )
}

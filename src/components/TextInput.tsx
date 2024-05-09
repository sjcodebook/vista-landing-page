import { cn } from '@/lib/utils'
import { HTMLInputTypeAttribute } from 'react'

export default function Page({
  type = 'text',
  placeholder = '',
  classes = '',
}: {
  type?: HTMLInputTypeAttribute
  placeholder: string
  classes?: string
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn('input input-bordered w-full', classes)}
    />
  )
}

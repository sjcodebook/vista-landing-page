import { cn } from '@/lib/utils'

export default function Page({ text = '', className = '' }: { text: string; className?: string }) {
  return <button className={cn('btn btn-accent text-white', className)}>{text}</button>
}

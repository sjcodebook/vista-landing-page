import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'
import * as EmailValidator from 'email-validator'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function validateEmail(email: string) {
  return EmailValidator.validate(email)
}

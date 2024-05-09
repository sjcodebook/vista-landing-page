'use client'

import { useState } from 'react'
import Image from 'next/image'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import { createSheetData } from '@/actions/google'

export default function Page() {
  const [email, setEmail] = useState('')

  const handleOnAddSheetDataClick = async () => {
    console.log('Adding sheet data=====')
    console.log(email)
    const response = await createSheetData(JSON.stringify({ values: [[email]] }))
    console.log(response)
  }

  return (
    <div className='bg-[#317cc2] flex flex-col justify-center items-center gap-12 pb-10'>
      <h1 className='font-bold text-5xl lg:text-7xl tracking-[-1px] text-center max-w-3xl leading-[56px] lg:leading-[86px] px-1 lg:p-0'>
        Enhance your product data instantly
      </h1>
      <h2 className='font-medium lg:text-2xl text-xl text-center max-w-5xl leading-[32px] px-4 lg:p-0'>
        Vista&apos;s AI engine cleans up your PIES data, transforms it to fit best practices for any
        platform you sell on, and enhances it to add a unified brand voice, all in an instant.
      </h2>
      <div className='mt-2 flex flex-col lg:flex-row justify-center items-center lg:gap-2 gap-6'>
        <TextInput
          type='email'
          placeholder='Your email'
          classes='max-w-xs min-w-[350px] rounded-3xl bg-[#317cc2] border-gray-400'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          text='Sign up'
          className='rounded-3xl min-w-[120px]'
          onClick={handleOnAddSheetDataClick}
        />
      </div>
      <p className='mt-[-1rem] text-slate-400 font-normal text-xl text-center max-w-xl leading-[22px] tracking-[-0.2px] px-5 lg:px-0'>
        Sign up to trial our beta. Email tina@govista.io for questions
      </p>
      <div className='flex justify-center items-center gap-10'>
        <Image src='/images/svgs/Ycombinator.svg' width={140} height={58} alt='YCombinator Logo' />
        <Image src='/images/svgs/autocare.svg' width={140} height={58} alt='autocare Logo' />
      </div>
    </div>
  )
}

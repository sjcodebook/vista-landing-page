'use client'

import { useState } from 'react'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

import { validateEmail } from '@/lib/utils'

import { createSheetData } from '@/actions/google'

const timeline = [
  {
    heading: 'Send us your bad data',
    subheading:
      'Send us your bad data in any format. As long as it has the correct parts number, we can ingest and process it. Any unregistered parts will be flagged.',
  },
  {
    heading: 'Tell us how you want to change it',
    subheading: `For optimal results, send us a reference file of what you want your data to look like. This can be a sample of manually processed data file (as small or large as you’d like), or listings on a website you’d like our AI engine to ingest. This is ideal for users who want to enhance their data in a specific way (ie. adding in a brand voice).
    Then, prompt our engine on how you want your data changed. Applications are endless, from standardizing the color names across all your parts to generating new SEO keywords for every part you have.`,
  },
  {
    heading: 'We give you good data, instantly',
    subheading:
      'We will process your data, and send you an enhanced file in any format you need, so you can instantly start generating revenue.',
  },
]

export default function Page() {
  const [email, setEmail] = useState('')
  const [loading, setIsLoading] = useState(false)

  const handleOnAddSheetDataClick = async () => {
    try {
      if (!validateEmail(email)) {
        alert('Please enter a valid email')
        return
      }
      setIsLoading(true)
      console.log('Adding sheet data=====')
      console.log(email)
      const response = await createSheetData(JSON.stringify({ values: [[email]] }))
      console.log(response)
      alert('Email Submitted successfully')
      setEmail('')
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.error(error)
      alert('Something went wrong')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center mb-20'>
      <h1 className='mt-10 font-bold text-[42px] tracking-[-0.4px] text-center max-w-3xl leading-[52px] text-[#1E0E62]'>
        How does Vista work?
      </h1>
      <ul className='mt-16 timeline timeline-snap-icon timeline-compact timeline-vertical max-w-[700px] px-4 lg:px-0'>
        {timeline.map((item, index) => (
          <li key={item.heading}>
            {index !== 0 && <hr />}
            <div className='timeline-middle text-[#15143966] text-[18px] leading-6 bg-[#EBEAED] rounded-[50%] px-4 py-2'>
              {index + 1}
            </div>
            <div className='timeline-end mt-4 mb-10 ml-8'>
              <h2 className='text-[#1E0E62] font-medium text-[18px] leading-7'>{item.heading}</h2>
              <span className='mt-5 text-[#15143966] font-normal text-[16px] leading-6'>
                {item.subheading.split('\n').map((line, i) => (
                  <p key={i} className='mt-2'>
                    {line}
                  </p>
                ))}
              </span>
            </div>
            {index !== timeline.length - 1 && <hr />}
          </li>
        ))}
      </ul>
      {loading ? (
        <span className='loading loading-dots loading-lg text-black'></span>
      ) : (
        <div className='mt-2 flex flex-col lg:flex-row justify-center items-center lg:gap-2 gap-6'>
          <TextInput
            type='email'
            placeholder='Your email'
            classes='max-w-xs min-w-[350px] rounded-3xl text-black border-gray-400'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            text='Sign up'
            className='rounded-3xl min-w-[120px]'
            onClick={handleOnAddSheetDataClick}
          />
        </div>
      )}
    </div>
  )
}

import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' defaultChecked />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
      <div className='collapse collapse-arrow bg-base-200'>
        <input type='radio' name='my-accordion-2' />
        <div className='collapse-title text-xl font-medium'>
          Click to open this one and close others
        </div>
        <div className='collapse-content'>
          <p>hello</p>
        </div>
      </div>
    </main>
  )
}

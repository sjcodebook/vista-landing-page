import Image from 'next/image'

const features = [
  {
    heading: 'Process',
    description:
      'Fill any gaps you have in your data, and ensure all information is accurate by cross checking millions of products in our database',
    icon: '/images/svgs/servers.svg',
  },
  {
    heading: 'Enhance',
    description:
      'Make your products stand out by including a unique brand voice across your listings, and auto- generating SEO keywords',
    icon: '/images/svgs/aid.svg',
  },
  {
    heading: 'Transform',
    description:
      'Maximize your sales by transforming  your data to fit the  various content guidelines across every platform you want to sell on',
    icon: '/images/svgs/transform.svg',
  },
]

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center gap-8 pb-10'>
      <h1 className='mt-20 font-bold text-[42px] tracking-[-0.4px] text-center max-w-3xl leading-[52px] text-[#1E0E62] px-2 lg:p-0'>
        What can I do with Vista?
      </h1>
      <h2 className='font-medium text-2xl text-center leading-[32px] text-[#15143966] max-w-5xl px-4 lg:p-0'>
        Vista&apos;s AI engine is designed to save months of time spent optimizing your product
        description data. Product applications are endless, but here are a few
      </h2>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 max-w-[1170px]'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center gap-6 mt-10 mx-auto border-[#EBEAED] border-solid border-2 rounded-md px-10 py-12 w-[370px] h-[340px]'>
            <Image src={feature.icon} alt={feature.heading} width={38} height={38} />
            <h3 className='font-bold text-2xl text-center leading-[32px] text-[#1E0E62]'>
              {feature.heading}
            </h3>
            <p className='font-medium text-lg text-center leading-[24px] text-[#15143966]'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

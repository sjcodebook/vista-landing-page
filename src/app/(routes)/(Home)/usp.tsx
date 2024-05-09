import Image from 'next/image'

const customers = [
  {
    name: 'RETAILERS',
    icon: '/images/svgs/shop.svg',
  },
  {
    name: 'MANUFACTURERS',
    icon: '/images/svgs/warehouse.svg',
  },
  {
    name: 'INDUSTRY PARTNERS',
    icon: '/images/svgs/industry.svg',
  },
]

export default function Page() {
  return (
    <div className='bg-[#317cc2] pb-28'>
      <div className='flex flex-col lg:flex-row justify-between items-center mx-auto max-w-6xl gap-0 lg:gap-5 pt-24 lg:pt-0'>
        <div className='flex flex-col justify-start items-start gap-6 text-center lg:text-left'>
          <h1 className='font-bold text-[58px] tracking-[-1px] leading-[70px] text-white max-w-[480px]'>
            Designed for the auto industry
          </h1>
          <p className='font-medium text-[22px] leading-[32px] text-white max-w-[530px] p-4 lg:p-0'>
            Our proprietary AI model is trained with millions of auto parts listings, content
            guidelines, and industry-leading databases to provide a solution custom for anyone in
            the aftermarkets
          </p>
        </div>
        <Image src='/images/svgs/computer.svg' width={623} height={623} alt='computer' />
      </div>
      <div className='flex justify-center items-center mx-auto max-w-6xl gap-4 lg:gap-48'>
        {customers.map((customer) => (
          <div
            key={customer.name}
            className='flex flex-col justify-center items-center lg:gap-6 gap-4'>
            <Image src={customer.icon} width={36} height={36} alt={customer.name} />
            <p className='font-bold text-[10px] lg:text-[20px]  lg:leading-[26px] leading-[15px] tracking-[2px] text-white'>
              {customer.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

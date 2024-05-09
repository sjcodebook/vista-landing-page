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
      <div className='flex justify-between items-center mx-auto max-w-6xl gap-5'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <h1 className='font-bold text-[58px] tracking-[-1px] leading-[70px] text-white max-w-[480px]'>
            Designed for the auto industry
          </h1>
          <p className='font-medium text-[22px] leading-[32px] text-white max-w-[530px]'>
            Our proprietary AI model is trained with millions of auto parts listings, content
            guidelines, and industry-leading databases to provide a solution custom for anyone in
            the aftermarkets
          </p>
        </div>
        <Image src='/images/svgs/computer.svg' width={623} height={623} alt='computer' />
      </div>
      <div>
        <div className='flex justify-center items-center mx-auto max-w-6xl gap-48'>
          {customers.map((customer) => (
            <div key={customer.name} className='flex flex-col justify-center items-center gap-6'>
              <Image src={customer.icon} width={36} height={36} alt={customer.name} />
              <p className='font-bold text-[20px] leading-[26px] tracking-[2px] text-white'>
                {customer.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const faqs = [
  {
    ques: 'How do you improve product accuracy?',
    ans: 'We utilize advanced natural language processing technologies to analyze your product data and generate accurate and detailed descriptions. By leveraging a vast database of auto parts specifications and industry terminology, we ensure that descriptions are not only accurate but also technically precise,  reducing errors and inconsistencies',
  },
  {
    ques: 'Are you the same thing as chatGPT?',
    ans: 'We’re designed specifically for the auto parts industry, and our model is trained with millions of parts listings. This specialization includes tailored capabilities to integrate with inventory systems, understand industry-specific terminology, and optimize content for search engines relevant to auto parts.',
  },
  {
    ques: 'What’s coming next?',
    ans: `Direct integrations with your data source and ecommerce platforms, automatic kitting/bundling recommendations, and advanced analytics to measure the impact of our listing on your sales.

    Sign up to be the first to know when our new features go live!`,
  },
  {
    ques: 'Can you enhance images?',
    ans: 'Yes. We are able to resize and enhance existing images that come with your parts currently. Our database includes millions of parts images, so we are also able to generate brand new images of parts with missing images.',
  },
  {
    ques: 'Is there a limit to the number of parts you process?',
    ans: 'No. Our bulk upload system is designed to be scalable and can handle listings ranging from a few hundred to several tens of thousands at a time without compromising on performance',
  },
  {
    ques: 'What is your pricing model?',
    ans: 'We are currently in our beta trials with a monthly subscription model that scales with the number of parts you want to process.',
  },
]

export default function Page() {
  return (
    <div className='pb-28 flex flex-col justify-center items-center'>
      <h1 className='mt-20 font-bold text-[42px] tracking-[-0.4px] text-center max-w-3xl leading-[52px] text-[#1E0E62]'>
        Frequently asked questions, answered by our AI engine
      </h1>
      <div className='flex flex-col justify-center items-center gap-10 mt-20 max-w-5xl'>
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-10'>
          {faqs.map((faq) => (
            <div key={faq.ques} className='flex flex-col justify-start items-start gap-5'>
              <h2 className='font-medium text-[18px] leading-[28px] text-[#1E0E62]'>{faq.ques}</h2>
              <p className='font-normal text-[16px] leading-[26px] text-[#15143966]'>{faq.ans}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

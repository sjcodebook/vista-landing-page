import Hero from './hero'
import UseCase from './useCase'
import Explain from './explain'
import USP from './usp'
import FAQS from './faqs'

export default function Page() {
  return (
    <main className='min-h-screen text-white'>
      <Hero />
      <UseCase />
      <Explain />
      <USP />
      <FAQS />
    </main>
  )
}

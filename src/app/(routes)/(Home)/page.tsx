import Hero from './hero'
import UseCase from './useCase'
import Explain from './explain'

export default function Page() {
  return (
    <main className='min-h-screen text-white'>
      <Hero />
      <UseCase />
      <Explain />
    </main>
  )
}

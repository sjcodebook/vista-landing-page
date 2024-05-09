export default function Page() {
  return (
    <nav className='bg-[#317cc2] text-white min-w-full px-1 lg:px-24 py-5'>
      <div className='navbar'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Vista.</a>
        </div>
        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>Log in</button>
        </div>
      </div>
    </nav>
  )
}

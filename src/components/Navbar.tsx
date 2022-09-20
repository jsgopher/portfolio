const Navbar = () => {
  return (
    <>
      <section className='flex items-center justify-between w-full h-auto p-4'>
        <div className='logo px-3 py-2 rounded font-bold bg-gray-100 text-black'>
          V.
        </div>
        <nav className='flex justify-center text-gray-50 w-max h-max'>
          <a href='#projects'>Projects</a>
          <span className='px-4 text-gray-700 font-extrabold'>.</span>
          <a href='#about'>About</a>
        </nav>
        <div></div>
      </section>
    </>
  )
}

export default Navbar
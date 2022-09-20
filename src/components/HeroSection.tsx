const HeroSection = () => {
  return (
    <>
      <div className='hero w-full relative px-10 md:px-14 py-56 md:py-40 text-gray-50'>
        <div className="intro font-medium text-2xl">
          Hi! I'm <span className='text-blue-500 rounded-sm p-0.5'>Vignesh</span> FullStack Web Developer
        </div>
        <div className='text-gray-300 mt-3'>
          Working in web frontend and backend development.
        </div>
        <a href="https://rxresu.me/vikky1065/resume" className='mt-5 inline-block'>
          <button className='border-gray-300 border-2 px-3 py-1.5 rounded'>Portfolio</button>
        </a>

        <div className="w-max text-center absolute left-6 md:left-10 bottom-5 mt-24">
          <p className="text-gray-500 -rotate-90 mb-4">SCROLL</p>
          <img src="/down-arrow.png" alt="scroll down arrow" className="w-4 inline-block mt-3 animate-bounce" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
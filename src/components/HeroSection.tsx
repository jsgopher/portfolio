import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className='hero w-full md:w-1/2 px-14 py-40 text-gray-50'>
        <div className="intro font-medium text-2xl">
          Hi! I'm <span className='text-blue-500 rounded-sm p-0.5'>Vignesh</span> FullStack Web Developer
        </div>
        <div className='text-gray-500 mt-3'>
          Working in web frontend and backend development.
        </div>
        <a href="https://rxresu.me/vikky1065/resume" className='mt-5 inline-block'>
          <button className='border-gray-300 border-2 px-3 py-1.5 rounded'>Portfolio</button>
        </a>
      </div>
    </>
  )
}

export default HeroSection
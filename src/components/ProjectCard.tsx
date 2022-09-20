import React from 'react'

const ProjectCard = ({ name, link, thumb }: any) => {
  return (
    <div className='w-full md:w-1/3 m-4 md:m-9 h-auto shadow-lg'>
      <img src={thumb} alt={name} className='w-full' />
      <div className='mt-2 inline-block text-gray-400'>
        {
          link ? <a href={link} className='hover:underline'>{name}</a> : <span>{name}</span>
        }
      </div>
    </div>
  )
}

export default ProjectCard
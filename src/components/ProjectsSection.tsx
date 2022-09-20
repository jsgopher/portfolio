import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Nextflix - Movie Search Platform (WIP)',
    thumb: '/nextflix.png',
    link: 'nflix.vercel.app'
  },
  {
    name: 'Easy Bank landing Page',
    thumb: '/landing-page.png',
    link: 'beta-easy-bank.vercel.app'
  },
  {
    name: 'Pricing Page',
    thumb: '/pricing.png',
    link: 'pricing-component-theta.vercel.app'
  },
  {
    name: 'Books Store',
    thumb: '/vbooks.png',
    link: 'vbooks.vercel.app'
  },
  {
    name: 'Kovarshini Products',
    thumb: '/kovarshini.png'
  },
]

const ProjectsSection = () => {
  return (
    <div id='projects' className='projects px-14 py-6 text-gray-50'>
      <div className='title text-gray-800 text-4xl font-medium'>{"<projects>"}</div>
      <section className='flex flex-wrap mt-8 items-stretch justify-center'>
        {
          projects.map(project => <ProjectCard {...project} />)
        }
      </section>
    </div>
  )
}

export default ProjectsSection
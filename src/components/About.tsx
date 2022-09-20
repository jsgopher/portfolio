const skillSets = [
  {
    name: 'Javascript',
    thumb: '/javascript.png'
  },
  {
    name: 'Typescript',
    thumb: '/typescript.png'
  },
  {
    name: 'React',
    thumb: '/react.png'
  },
  {
    name: 'NodeJS',
    thumb: '/nodejs.png'
  },
  {
    name: 'Go',
    thumb: '/golang.png'
  },
  {
    name: 'Python',
    thumb: '/python.png'
  },
  {
    name: 'SQL',
    thumb: '/sql-server.png'
  },
]

const About = () => {
  return (
    <div id='about' className='projects px-14 py-6 text-gray-50'>
      <div className='title text-gray-800 text-4xl font-medium'>{"<about me>"}</div>
      <p className='mt-4 text-gray-400'>
        Hands-on, successful Software Engineer with 3+ years of verifiable success in delivering appropriate technology solutions for the Business. Comprehensive knowledge of Programming in JavaScript, React.js, Go and web-based applications. Innovative change agent with a unique mix of high-level technology direction and deep technical expertise.
      </p>
      <br />
      <div className='title text-gray-700 text-lg font-medium'>TechStack</div>
      <div className="skills flex flex-wrap justify-center sm:justify-start  items-center text-gray-400">
        {
          skillSets.map(({ name, thumb }) => {
            return (
              <div className='m-3 text-center' key={name}>
                <img src={thumb} alt={name} className="w-10 sm:w-14 mx-auto" />
                <span className='text-xs'>{name}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default About
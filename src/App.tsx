import './App.css'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'

function App() {

  return (
    <div className='bg-black w-full min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <hr className='w-11/12 h-px bg-gray-900 mx-auto rounded-lg border-none' />
        <ProjectsSection />
        <hr className='w-11/12 h-px bg-gray-900 mx-auto rounded-lg border-none' />
        <About />
      </main>
      <footer className='px-14 py-10 bg-gray-100'>
        &copy; Copyright 2022
      </footer>
    </div>
  )
}

export default App

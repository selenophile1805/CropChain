import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CreateProject from '../components/CreateProject'

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />

      <div className='flex justify-center items-center my-5'>
      <button type='button' className='inline-block px-6 py-2.5  bg-red-400 text-white front-size-medium text-xs leading-tight uppercase rounded-full shadow-medium hover:bg-green-700'>Load More</button>
      </div>
      {/* <CreateProject /> */}
    </div>
  )
}

export default Home

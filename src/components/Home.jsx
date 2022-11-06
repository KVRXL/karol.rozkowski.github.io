import React from 'react'
import Typing from './Typing'
import {FiArrowDown} from 'react-icons/fi'
import {Link} from 'react-scroll'

const Home = () => {



  return (
    <div name='home' className='w-full h-screen bg-[#292e37]'>
      {/* Container */}
      <div className='max-w-[1000px] my-auto pt-[35vh] pb-7 mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-xl sm:text-2xl text-purple-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Karol Rozkowski</h1>
        <h2 className='text-4xl sm:text-7xl font-semibold'><Typing /></h2>
        <p className='text-lg text-gray-400'>Front-end developer building exceptional digital experiences.
        <br/>  Currently focused on building full-stack responsive web applications.
        </p>
        <div className='mt-auto flex justify-center'>
          <button className='hover:scale-110 duration-500 text-gray-400 hover:text-gray-200'>
            <Link to="about" smooth={true} duration={500}>Scroll Down<FiArrowDown className='text-5xl ml-[25%]'/></Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
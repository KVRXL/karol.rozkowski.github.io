import React from 'react'
import HTML from './images/html.png'
import CSS from './images/css.png'
import JS from './images/javascript.png'
import REACT from './images/react.png'
import TAILWIND from './images/tailwind.png'
import NODE from './images/node.png'
import MONGO from './images/mongo.png'
import GITHUB from './images/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#292e37] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-4 pl-4 pr-2 pt-2 sm:pt-0'>
                <p className='text-5xl font-bold inline border-b-4 border-purple-600'>Skills</p>
                <p className='pt-5 sm:py-5 sm:text-lg w-[35rem] sm:w-auto'>These are the technologies I've worked with</p>
            </div>
            <div></div>
            </div>
            <div className='font-semibold w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center py-4'>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={HTML} alt='HTML' />
                    <p className='my-2'>HTML</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={CSS} alt='HTML' />
                    <p className='my-2'>CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={JS} alt='HTML' />
                    <p className='my-2'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={REACT} alt='HTML' />
                    <p className='my-2'>REACT</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={TAILWIND} alt='HTML' />
                    <p className='my-2'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={NODE} alt='HTML' />
                    <p className='my-2'>Node.js</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={MONGO} alt='HTML' />
                    <p className='my-2'>Mongo.db</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500 border-black/30 border-2'>
                    <img className='w-[4rem] sm:w-[6rem] mx-auto my-2' src={GITHUB} alt='HTML' />
                    <p className='my-2'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
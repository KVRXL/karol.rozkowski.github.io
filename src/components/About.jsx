import React from 'react'
import ImageOne from './images/profile-1.jpeg'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#1b1e24] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full lg:pr-[7rem] pb-[170px] mb-9'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-7 pl-4 pr-2'>
                    <p className='text-5xl font-bold inline border-b-4 border-purple-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-[1000px] w-full h-[280px] grid gap-y-2 xl:grid-flow-col 2xl:grid-rows-2 md:grid-cols-2 gap-8 px-6 sm:px-[20vw]'>
                <div className='row-span-2 hidden xl:flex'>
                    <img className='ml-auto mr-2 h-[35vh] mt-3' src={ImageOne} alt="profile pic" />
                </div> 
                <div className='sm:text-left text-4xl font-bold pt-2'>
                    <p>Hi! I am Karol, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>My journey with coding started in early 2022. 
                    I took on some projects in regards to my Bachelor Degree.
                    They were oriented about creating Web Project-viewer. 
                    Even though I was more of a support from BIM side of things, it sparked an idea in my head to become web-developer. 
                    Since then I learned about HTML, CSS, Javascript from John Duckett Books as well as Udemy and Youtube courses about React and full-stack.
                    With that knowledge and doing a lot of research on stackoverflow I've built bunch of projects and created this Portfolio. </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About
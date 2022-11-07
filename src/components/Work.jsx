import React from "react"
import WORDLE from "./images/projects/wordle.jpg"
import CRYPTO from "./images/projects/crypto.png"
//import CHAT from "./images/projects/chat.jpg"
import HANGMAN from "./images/projects/hangman.jpg"
import MEET from "./images/projects/meetups.jpg"
import TIC from "./images/projects/tic-tac-toe.png"
import PROGRESS from "./images/projects/progress.jpg"
import Project from "./Project"

const Work = () => {

  return (
    <div name='work' className='w-full md:h-screen bg-[#1b1e24] text-gray-300'>
        <div className="max-w-[1000px] mx-auto p-4 pt-6 flex flex-col justify-center w-full h-full">
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-7 pl-4 pr-2 pt-5 sm:pt-0'>
                <p className='text-5xl font-bold inline border-b-4 border-purple-600'>Work</p>
                <p className='pt-5 sm:py-5 sm:text-lg w-[35rem] sm:w-auto'>Projects I recently worked on</p>
            </div>
            <div></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Project picture={WORDLE} name='Wordle Clone' description='React.js, Heroku API' link={'https://github.com/KVRXL/wordle-clone'}/>
                <Project picture={CRYPTO} name='Crypto Tracker' description='React.js' link={'https://github.com/KVRXL/crypto-tracker'}/>
                <Project picture={HANGMAN} name='Hangman Game' description='React.ts' link={'https://github.com/KVRXL/hangman-game'}/>
                <Project picture={TIC} name='Tic-tac-toe' description='HTML, CSS, JavaScript' link={'https://github.com/KVRXL/tic-tac-toe'}/>
                <Project picture={MEET} name='Meet-up app' description='React.ts' link={'https://github.com/KVRXL/meet-up-app'}/>
                <Project picture={PROGRESS} name='MERN Stack Chat App' description='work in progress...' link={''}/>

            </div>
        </div>
    </div>
  )
}

export default Work
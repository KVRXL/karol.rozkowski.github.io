import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#292e37] text-gray-300 flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/975b68b9-a562-4ad0-8b48-8a919b6157b1' className='flex flex-col max-w-[600px] w-full'>
      <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-7 pl-4 pr-2 pt-5 sm:pt-0'>
                <p className='text-5xl font-bold inline border-b-4 border-purple-600'>Contact</p>
                <p className='pt-5 sm:py-5 sm:text-lg w-[35rem] sm:w-auto'>Submit the form or e-mail karol.rozkowski@gmail.com</p>
            </div>
            <div></div>
            </div>
            <input className='p-2 text-gray-800 bg-slate-200 rounded' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 text-gray-800 bg-slate-200 rounded' type='email' placeholder='E-mail' name='email' />
            <textarea className='p-2 text-gray-800 bg-slate-200 rounded' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white hover:bg-purple-600 hover:border-purple-600 rounded border-2 p-2 m-2 hover:scale-105 duration-500 flex items-center mx-auto'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
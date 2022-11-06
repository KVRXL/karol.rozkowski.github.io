import React, { useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [showMobile, setShowMobile] = useState(false)

  const handleShowMobile = () => {
    setShowMobile(!showMobile)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#292e37] text-gray-300' >
      <div className='ml-[5%] mt-3'>
      <h1 className='text-5xl font-logo font-bold text-purple-600'>KR</h1>
      </div>
      {/* menu */}
        <ul className='text-xl hidden md:flex absolute right-[5vw]'>
          <li className='zoomin'>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='zoomin'>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='zoomin'>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='zoomin'>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='zoomin'>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

        </ul>
      {/* Hamburger */}
      <div onClick={handleShowMobile} className={!showMobile ? 'bars' : 'times'}>
        {!showMobile ? <FaBars /> : <FaTimes size={29} />}
      </div>
      {/* Mobile menu */}
      <ul className={!showMobile ? 'hidden' : 'shown'}>
          <li className='my-6 text-4xl zoomin'>
            <Link onClick={handleShowMobile} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='my-6 text-4xl zoomin'>
            <Link onClick={handleShowMobile} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='my-6 text-4xl zoomin'>
            <Link onClick={handleShowMobile} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='my-6 text-4xl zoomin'>
            <Link onClick={handleShowMobile} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='my-6 text-4xl zoomin'>
            <Link onClick={handleShowMobile} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
      </ul>
      {/* Social icons */}
      <div className='hidden md:flex fixed flex-col top-[40%] left-0'>
        <ul>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] hover:scale-110 duration-300 bg-[#293e8d]'>
            <a className='flex justify-between items-center w-full' 
            target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/karol-rozkowski-96722b186/'>
            LinkedIn<FaLinkedin size={30} />
            </a>
          </li>
          <li className='px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] hover:scale-110 duration-300 bg-[#16181f]'>
            <a className='flex justify-between items-center w-full'  
            target="_blank" rel="noopener noreferrer" href='https://github.com/KVRXL'>
            Github<FaGithub size={30} />
            </a>
          </li>
        </ul>
      </div>
  </div>

  )
}

export default Navbar
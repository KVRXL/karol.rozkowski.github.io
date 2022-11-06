import React, { useEffect, useState } from 'react'
import useTyping from './useTyping'

const typedText = ['I am a Web Developer,', 'REACT Developer', 'MERN Stack Developer']

const Typing = () => {
    const text = useTyping(typedText)
  return (
    <div>
        <h2>
            <span className=' text-gray-400 blinking-cursor'>{text}</span>
        </h2>
    </div>
  )
}
/* add to span after finishing blinking-cursor */
export default Typing
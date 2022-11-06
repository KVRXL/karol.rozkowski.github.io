import React from 'react'

const Project = ({picture, name, description, link}) => {
  return (
    <div style={{backgroundImage: `url(${picture})`}} 
    className="content-div shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto">
        {/* Hover */}
        <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold tracking-wider flex justify-center mt-2">{name}</span>
            <span className="text-lg tracking-wider flex justify-center">{description}</span>
            <div className="pt-8 text-center">
                <a href={link} target='_blank'>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-110 duration-500">Go to GitHub</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project
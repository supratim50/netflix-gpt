import React from 'react'

const PrimaryIconButton = ({children, className= ""}) => {
  return (
    <button 
        className={`px-8 py-3 text-xl rounded-md ${className}`} 
    >
        {/* TODO: will use icon later for playIcon 
            <span>{iconShouldBeHere}</span> */}
        <span>{children}</span>
    </button>
  )
}

export default PrimaryIconButton
import React from 'react'

const PrimaryButton = ({children, handleClick}) => {
  return (
    <button 
        className='px-8 py-4 bg-red-700 text-white text-xl rounded-lg'
        onClick={handleClick}    
    >
        <span>{children}</span>
    </button>
  )
}

export default PrimaryButton
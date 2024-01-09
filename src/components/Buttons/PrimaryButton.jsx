import React from 'react'

const PrimaryButton = ({children, handleClick, className = ""}) => {
  return (
    <button 
        className={`px-8 py-3 text-xl rounded-lg ${className}`}
        onClick={handleClick}    
    >
        <span>{children}</span>
    </button>
  )
}

export default PrimaryButton
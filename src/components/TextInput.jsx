import React from 'react'

const TextInput = ({type, classes, onChange, error, ...props}) => {
  return (
    <>
        <input 
        type={type} 
        className={`p-4 mt-4 mb-2 w-full bg-gray-800 outline-none 
        ${classes && classes}`} 
        {...props} 
        onChange={(e) => onChange(e.target.value)}
        />
        {error && <p className='text-red-700'>{error}</p>}
    </>
  )
}

export default TextInput
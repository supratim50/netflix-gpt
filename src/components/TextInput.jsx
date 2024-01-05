import React from 'react'

const TextInput = ({type, classes, ...props}) => {
  return (
    <input type={type} className={`p-4 my-4 w-full bg-gray-800 outline-none ${classes && classes}`} {...props} />
  )
}

export default TextInput
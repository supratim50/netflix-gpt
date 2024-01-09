import React from 'react'
import PrimaryIconButton from '../Buttons/PrimaryIconButton'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-1/3 px-12 py-36'>
        <h1 className='text-5xl font-bold mb-5'>{title}</h1>
        <p>{overview}</p>

        <PrimaryIconButton className='bg-white text-black mt-5 mr-4'>▶ Play</PrimaryIconButton>
        <PrimaryIconButton 
            className='bg-transparent text-white border border-white mt-5'
        >My List</PrimaryIconButton>
    </div>
  )
}

export default VideoTitle
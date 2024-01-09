import React from 'react'
import PrimaryIconButton from '../Buttons/PrimaryIconButton'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen max-h-screen aspect-video bg-gradient-to-r from-black absolute'>
        <div className='absolute top-1/2 left-12 -translate-y-1/2 text-white'>
            <h1 className='text-5xl font-bold mb-5 w-3/6'>{title}</h1>
            <p className='w-2/6'>{overview}</p>

            <PrimaryIconButton className='bg-white text-black mt-5 mr-4'>▶ Play</PrimaryIconButton>
            <PrimaryIconButton 
                className='bg-transparent text-white border border-white mt-5'
            >My List</PrimaryIconButton>
        </div>
    </div>
  )
}

export default VideoTitle
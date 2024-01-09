import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 shrink-0 px-2'>
        <img className='w-full rounded-md' src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="" />
    </div>
  )
}

export default MovieCard
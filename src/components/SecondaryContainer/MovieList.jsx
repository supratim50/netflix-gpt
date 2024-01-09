import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='container'>
        <h1 className='text-white font-bold text-2xl'>{title}</h1>
        <div className='overflow-x-scroll no-scrollbar py-6 flex flex-row'>
        {
            movies?.map((movie) => <MovieCard movie={movie} />)
        }
        </div>
    </div>
  )
}

export default MovieList
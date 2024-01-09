import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {

  const trendingMovies = useSelector(state => state?.movies?.nowPlayingMovies)

  return (
    <div className='w-screen bg-black mt-[-10px] pt-[10px] px-12 text-white'>
      <MovieList title="Trending Movies" movies={trendingMovies} />
      <MovieList title="Trending Movies" movies={trendingMovies} />
      <MovieList title="Trending Movies" movies={trendingMovies} />
      <MovieList title="Trending Movies" movies={trendingMovies} />
      <MovieList title="Trending Movies" movies={trendingMovies} />
    </div>
  )
}

export default SecondaryContainer
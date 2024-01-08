import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/api';

const Browse = () => {

  const [movies, setMovies] = useState([]);
  
  // const getNowPlayingMovies = async () => {
  //   const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
  //   const data = await res.json()
  //   setMovies(data.results)
  // }

  //* GET MOVIES FROM API
  useEffect(() => {
    const unsub = async () => {
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const data = await res.json()
      setMovies(data.results)
      console.log(data.results);
    }

    return () => unsub()
  }, [])

  return (
    <>
      <div className='w-full h-screen bg-gray-400'>hello</div>
      {
        movies.map((movie) => <h1>{movie.original_title}</h1>)
      }
    </>
  )
}

export default Browse
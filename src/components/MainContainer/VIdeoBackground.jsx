import React, { useEffect, useState } from 'react';
import {getTrailer} from "../../utils/getTheMovieTrailer";

const VIdeoBackground = ({movieId}) => {
    const [movieTrailer, setMovieTrailer] = useState({});

    useEffect(() => {
        const unsub = async () => {
            const trailer = await getTrailer(movieId);
            setMovieTrailer(trailer)
        }
        return () => unsub()
    }, [])

  return (
    <div className='h-5/6'>
        <iframe 
        className='w-screen h-full'
        src={`https://www.youtube.com/embed/${movieTrailer.key}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"  />
    </div>
  )
}

export default VIdeoBackground
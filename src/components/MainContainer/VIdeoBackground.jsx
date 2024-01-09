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
    <div className='w-screen max-h-screen aspect-video overflow-hidden'>
        <iframe 
        className='w-full h-full'
        src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"  />
    </div>
  )
}

export default VIdeoBackground
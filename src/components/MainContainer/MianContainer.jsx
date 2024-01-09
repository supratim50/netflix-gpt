import React from 'react';
import VIdeoBackground from './VIdeoBackground';
import VideoTitle from './VideoTitle';

import { useSelector } from 'react-redux';

const MianContainer = () => {
  const movies = useSelector(state => state?.movies?.nowPlayingMovies)

  if(!movies) return

  const {original_title, overview, id} = movies[0];

  return (
    <div className='h-screen'>
      <VideoTitle title={original_title} overview={overview} />
      <VIdeoBackground movieId={id} />
    </div>
  )
}

export default MianContainer
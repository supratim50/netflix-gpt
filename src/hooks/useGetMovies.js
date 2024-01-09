import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/api';

import {useDispatch} from "react-redux";
import {addNowPlayingMovies} from "../store/movieSlice"

export const useGetMovies = () => {

    const dispatch = useDispatch();

  //* GET MOVIES FROM API
  useEffect(() => {
    const unsub = async () => {
      const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const data = await res.json()
      dispatch(addNowPlayingMovies(data.results))
    }

    return () => unsub()
  }, [])
}
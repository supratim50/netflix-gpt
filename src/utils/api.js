import {TMDB_API_KEY} from "../config/config";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_API_KEY}`
    }
  };
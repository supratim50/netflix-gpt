import {API_OPTIONS} from "../utils/api";

export const getTrailer = async (movieId) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await res.json();
    const videos  = await json;
    const filteredData = videos.results.filter((video) => video.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : videos.results[0];
    return trailer;
}
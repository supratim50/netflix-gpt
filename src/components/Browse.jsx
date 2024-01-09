import {useGetMovies} from "../hooks/useGetMovies"
import MianContainer from "./MainContainer/MianContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

const Browse = () => {
  // get the movie list 
  useGetMovies();

  return (
    <>
      <MianContainer />
      <SecondaryContainer />
    </>
  )
}

export default Browse
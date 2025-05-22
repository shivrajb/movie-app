import useMovieList from '@/hooks/useMovies'
import MovieCard from './MovieCard';
import { useContext } from 'react';
import { GenresContext } from '@/contexts/GenresContext';

const MovieList = () => {

  const {genres} = useContext(GenresContext);
    const {movieLists} = useMovieList(genres);
    console.log(movieLists);
  return (
    <div className='grid grid-cols-5 gap-4'>
      {movieLists?.map((movieList) => (
    <MovieCard movieResult={movieList}/>
      ))}
    </div>
  );
};

export default MovieList;

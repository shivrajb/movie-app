import { useMovieContext } from '@/contexts/MovieContext';
import MovieCard from './MovieCard';

const BookmarkPage = () => {
  const { favorites } = useMovieContext();

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorites.length === 0 ? (
        <h1 className="text-center w-full text-gray-500 col-span-full">No Bookmarks Added</h1>
      ) : (
        favorites.map((movie) => <MovieCard key={movie.id} movieResult={movie} />)
      )}
    </div>
  );
};

export default BookmarkPage;

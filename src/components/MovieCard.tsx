import { Card, CardContent } from './ui/card';
import { MovieResult } from "@/hooks/useMovies";
import { useMovieContext } from "@/contexts/MovieContext";
import { useNavigate } from "react-router-dom"; // ✅

interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movieResult.id);
  const navigate = useNavigate(); // ✅

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // ✅ prevent card click
    if (favorite) {
      removeFromFavorites(movieResult.id);
    } else {
      addToFavorites(movieResult);
    }
  };

  const handleCardClick = () => {
    navigate(`/detail/${movieResult.id}`); // ✅ navigate to detail page with movie ID
  };

  return (
    <Card
      className="border-0 relative overflow-hidden cursor-pointer"
      onClick={handleCardClick} // ✅ card click
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieResult.poster_path}`}
            alt="poster"
            className="hover:opacity-80 transition-all w-full h-auto"
          />
          <button
            onClick={handleFavoriteClick} // ✅ only handles favorite
            className={`absolute top-4 right-4 p-2 rounded-full ${
              favorite ? "bg-red-500 text-white" : "bg-white text-gray-800"
            } shadow-md transition-all`}
          >
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="p-3">
          <h1 className="mt-3 text-left font-semibold">
            {movieResult.title ?? movieResult.name}
          </h1>
          <h1 className="mt-1 text-left text-sm text-gray-600">
            {movieResult.release_date
              ? new Date(movieResult.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;

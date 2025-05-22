import { useParams } from "react-router-dom";
import useMovieDetails from "@/hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { movie, loading } = useMovieDetails(id);

  console.log("Movie data:", movie);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!movie) return <p className="p-4">Movie not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded shadow-md w-full"
      />

      <div>
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          {new Date(movie.release_date).toLocaleDateString("en-US")} • {movie.runtime} mins
        </p>

        <p className="mb-4 text-gray-700">{movie.overview}</p>

        <p className="mb-2">
          <strong>Rating:</strong> ⭐ {movie.vote_average}
        </p>

        <p>
          <strong>Genres:</strong>{" "}
          {Array.isArray(movie.genres) ? movie.genres.map((genre) => genre.name).join(", ") : ""}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;

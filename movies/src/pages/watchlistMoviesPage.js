import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";
import WriteReview from "../components/cardIcons/writeReview";

const WatchlistMoviesPage = () => {
  const {watchlist: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const watchlistMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchlistMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = watchlistMovieQueries.map((q) => {
    if (q.data) {
      q.data.genre_ids = q.data.genres.map((g) => g.id);
      return q.data;
    }
    return null; 
  });
  
  // Filter out null values if needed
//   const validMovies = movies.filter((movie) => movie !== null);
  

  return (
    <PageTemplate
      title="Watchlist"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWatchlist movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WatchlistMoviesPage;
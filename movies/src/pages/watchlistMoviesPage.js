import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";

const WatchlistMoviesPage = () => {
//   const { watchlist: movieIds } = useContext(MoviesContext);

  
//   // Create an array of queries and run in parallel.
//   const watchlistMovieQueries = useQueries(
//     movieIds.map((movieId) => {
//       return {
//         queryKey: ["movie", { id: movieId }],
//         queryFn: getMovie,
//       };
//     })
//   );

//   // Check if any of the parallel queries is still loading.
//   const isLoading = watchlistMovieQueries.some((query) => query.isLoading);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   const movies = watchlistMovieQueries.map((query) => {
//     if (!query.isError) {
//       query.data.genre_ids = query.data.genres.map((g) => g.id);
//       return query.data;
//     }
//     return null;
//   });

//   return (
//     <PageTemplate
//       title="Movies Watchlist"
//       movies={movies}
//       action={(movie) => (
//         <>
//           <RemoveFromWatchlist movie={movie} />
//         </>
//       )}
//     />
//   );
};

export default WatchlistMoviesPage;

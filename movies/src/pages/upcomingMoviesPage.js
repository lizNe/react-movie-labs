import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist'


const UpcomingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
    // Redundant, but necessary to avoid app crashing.
    const watchlist = movies.filter(m => m.watch)
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
    const addToWatchlist = (movieId) => true 

  return (
    <PageTemplate
      title="Discover New Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchlistIcon movie={movie} />
      }}
    />
);
};
export default UpcomingMoviesPage;
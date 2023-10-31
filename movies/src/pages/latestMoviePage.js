import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import AddToWatchlistIcon from '../components/cardIcons/addToWatchlist';
import { getLatestMovie } from '../api/tmdb-api';
import { MoviesContext } from "../contexts/moviesContext";
import Snackbar from "@mui/material/Snackbar";

const LatestMoviesPage = (props) => {
  const { data: latestMovie, error, isLoading, isError } = useQuery('latest', getLatestMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = [latestMovie]; // Put the latest movie into an array to match the structure

  return (
    <PageTemplate
      title="Latest Movie"
      movies={movies}
      action={(movie) => (
        <AddToWatchlistIcon movie={movie} onClick={() => AddToWatchlistIcon(movie)} showSnackbar={Snackbar} />
      )}
    />
  );
};

export default LatestMoviesPage;

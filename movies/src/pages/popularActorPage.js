import React from "react";
import { getPopularActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';


const PopularActorsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('actors', getPopularActors)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = actors.filter(a => a.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Popular Actors"
      actors={actors}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon media={movie} mediaType="movie" />

    //   }}
    />
);
};
export default PopularActorsPage;
import React from "react";
import { getSeries } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVSeriesListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const SerieHomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('series', getSeries)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const series = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = series.filter(s => s.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (seriesId) => true 

  return (
    <PageTemplate
      title="Discover TV Series"
      series={series}
      action={(serie) => {
        return <AddToFavoritesIcon media={serie} mediaType="serie" />

      }}
    />
);
};
export default SerieHomePage;
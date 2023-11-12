import { getPopularActors } from "../api/tmdb-api";
import PageTemplate from '../components/templateActorListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PaginationComponent from "../components/paginationComponent";
import React, { useState } from "react";



const PopularActorsPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["actors", { page: currentPage }],
    () => getPopularActors(currentPage)
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
    <>
      <PageTemplate
        title="Popular Actors"
        actors={actors}
        
      />
      <PaginationComponent
        pageCount={data.total_pages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};
export default PopularActorsPage;
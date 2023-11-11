import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PaginationComponent from "../components/paginationComponent";

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["discover", { page: currentPage }],
    () => getMovies(currentPage)
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (movieId) => true;

  return (
    <>
      {movies.length > 0 ? (
        <>
          <PageTemplate
            title="Discover Movies"
            movies={movies}
            action={(movie) => {
              return <AddToFavoritesIcon media={movie} mediaType="movie" />;
            }}
          />
          <PaginationComponent
            pageCount={data.total_pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </>
  );
};

export default HomePage;

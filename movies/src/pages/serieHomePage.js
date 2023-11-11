import React from "react";
import { getSeries } from "../api/tmdb-api";
import PageTemplate from "../components/templateTVSeriesListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PaginationComponent from "../components/paginationComponent";

const SerieHomePage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data, error, isLoading, isError } = useQuery(
    ["series", { page: currentPage }],
    () => getSeries(currentPage)
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

  const series = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = series.filter((s) => s.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (seriesId) => true;

  return (
    <>
      {series.length > 0 ? (
        <>
          <PageTemplate
            title="Discover TV Series"
            series={series}
            action={(serie) => {
              return (
                <AddToFavoritesIcon
                  media={serie}
                  mediaType="serie"
                  onAddToFavorites={addToFavorites}
                />
              );
            }}
          />
          <PaginationComponent
            pageCount={data.total_pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No TV series found.</p>
      )}
    </>
  );
};

export default SerieHomePage;

import React, { useContext } from "react";
import PageTemplate from "../components/templateTVSeriesListPage"; // Change this import to the appropriate template for TV series
import { SeriesContext } from "../contexts/seriesContext"; // Change to the context for TV series
import { useQueries } from "react-query";
import { getSingleSeries } from "../api/tmdb-api"; // Change to the API for TV series
import Spinner from '../components/spinner';
// import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
// import WriteReview from "../components/cardIcons/writeReview";

const FavoriteSeriesPage = () => {
  const { favorites: serieIds } = useContext(SeriesContext); // Use the SeriesContext

  // Create an array of queries and run them in parallel.
  const favoriteSeriesQueries = useQueries(
    serieIds.map((serieId) => {
      return {
        queryKey: ["serie", { id: serieId }],
        queryFn: getSingleSeries, // Use the appropriate function to fetch TV series
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteSeriesQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const series = favoriteSeriesQueries.map((q) => {
    if (q.data && q.data.genres) {
      q.data.genre_ids = q.data.genres.map((g) => g.id);
    }
    return q.data;
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite TV Series"
      series={series}
      action={(serie) => {
        return (
          <>
            {/* <RemoveFromFavorites item={serie} />
            <WriteReview item={serie} /> */}
          </>
        );
      }}
    />
  );
};

export default FavoriteSeriesPage;

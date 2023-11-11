import React, { useContext } from "react";
import PageTemplate from "../components/templateTVSeriesListPage"; 
import { SeriesContext } from "../contexts/seriesContext"; 
import { useQueries } from "react-query";
import { getSingleSeries } from "../api/tmdb-api"; 
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteSerieReview from "../components/cardIcons/writeSerieReview";

const FavoriteSeriesPage = () => {
  const { favorites: serieIds } = useContext(SeriesContext); // Use the SeriesContext

  
  const favoriteSeriesQueries = useQueries(
    serieIds.map((serieId) => {
      return {
        queryKey: ["serie", { id: serieId }],
        queryFn: getSingleSeries, 
      };
    })
  );

 
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
            <RemoveFromFavorites serie={serie} />
            <WriteSerieReview serie={serie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteSeriesPage;

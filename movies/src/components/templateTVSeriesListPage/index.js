import React, { useState, lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";

// Lazy loading for components
const Header = lazy(() => import("../headerSeriesList"));
const FilterCard = lazy(() => import("../filterSeriesCard"));
const SeriesList = lazy(() => import("../seriesList"));
const Carousel = lazy(() => import('../pageCarousel'));


// Lazy loading fallback component
const LoadingFallback = () => <h1>Loading...</h1>;

function TVSeriesListPageTemplate({ series, title, action }) {
  const [nameTVFilter, setNameTVFilter] = useState("");
  const [genreTVFilter, setGenreTVFilter] = useState("0");
  const genreId = Number(genreTVFilter);

  let displayedSeries = series
    .filter((s) => {
      return s.name.toLowerCase().search(nameTVFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameTVFilter(value);
    else setGenreTVFilter(value);
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Header title={title} />
          <Carousel />
        </Grid>
        <Grid item xs={12}>
          <FilterCard
            onUserInput={handleChange}
            nameFilter={nameTVFilter}
            genreFilter={genreTVFilter}
          />
        </Grid>
        <Grid item container spacing={2}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}>
          </Grid>
          <Suspense fallback={<LoadingFallback />}>
            <SeriesList action={action} series={displayedSeries} />
          </Suspense>
        </Grid>
      </Grid>
    </Suspense>
  );
}

export default TVSeriesListPageTemplate;

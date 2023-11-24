import Grid from "@mui/material/Grid";
import React, { useState, lazy, Suspense } from "react";


// Lazy loading for components
const Header = lazy(() => import("../headerMovieList"));
const FilterCard = lazy(() => import("../filterMoviesCard"));
const MovieList = lazy(() => import("../movieList"));
const LatestMovie = lazy(() => import("../latestMovieComponent"));
const Carousel = lazy(() => import('../pageCarousel'));


// Lazy loading fallback component
const LoadingFallback = () => <h1>Loading...</h1>;

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
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
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <Grid item container spacing={2}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}></Grid>
          <Grid key="latest" item xs={12} sm={6} md={4} lg={3} xl={20}>
            <LatestMovie />
          </Grid>
          <Suspense fallback={<LoadingFallback />}>
          <MovieList action={action} movies={displayedMovies}></MovieList>
          </Suspense>
        </Grid>
      </Grid>
    </Suspense>
  );
}
export default MovieListPageTemplate;

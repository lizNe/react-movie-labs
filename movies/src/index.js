import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/moviePage";
import SeriePage from "./pages/seriePage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import FavoriteSeriesPage from "./pages/favoriteSeriesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import SerieHomePage from "./pages/serieHomePage";
import MovieReviewPage from "./pages/movieReviewPage";
import PopularActorsPage from "./pages/popularActorPage";
import AddSerieReviewPage from "./pages/addSerieReviewPage"
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import SeriesContextProvider from "./contexts/seriesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import SerieReviewPage from "./pages/serieReviewPage";
import ActorPage from "./pages/actorPage";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <SiteHeader />
    <MoviesContextProvider>
    <SeriesContextProvider>
    <Routes>
    <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
    <Route path="/series/reviews/form" element={ <AddSerieReviewPage /> } />
      <Route path="/series/reviews/:id" element={ <SerieReviewPage/> } />
      <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
      <Route path="/series" element={<SerieHomePage />} /> 
      <Route path="/actors" element={<PopularActorsPage />} /> 
      <Route path="/series/favorites" element={<FavoriteSeriesPage />} />
      <Route path="/series/:id" element={<SeriePage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
      <Route path="/actors/:id" element={<ActorPage />} />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
      <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
   </SeriesContextProvider>
    </MoviesContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>

  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
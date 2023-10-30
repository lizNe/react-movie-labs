import React, { useContext, useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import { MoviesContext } from "../contexts/moviesContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  const { addToWatchlist } = useContext(MoviesContext);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigate = useNavigate();

  const showSnackbar = () => {
    setSnackbarMessage("Movie added to watchlist");
    setSnackbarOpen(true);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    navigate("/movies/upcoming"); // Replace with the desired destination
  };

  return (
    <>
      <PageTemplate
        title="Discover New Movies"
        movies={movies}
        action={(movie) => (
          <>
            <AddToWatchlistIcon movie={movie} onClick={() => addToWatchlist(movie)} showSnackbar={showSnackbar} />
          </>
        )}
      />

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000} // Set the duration for the Snackbar to be visible
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackbarClose}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default UpcomingMoviesPage;

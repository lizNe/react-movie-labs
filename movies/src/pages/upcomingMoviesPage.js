import React, { useState } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../components/paginationComponent";

const UpcomingMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const { data, error, isLoading, isError } = useQuery(
    ["upcoming", { page: currentPage }],
    () => getUpcomingMovies(currentPage) // Pass the current page to the function
  );


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
      {movies.length > 0 ? (
        <>
          <PageTemplate
            title="Discover New Movies"
            movies={movies}
            action={(movie) => (
              <AddToWatchlistIcon
                media={movie}
                showSnackbar={showSnackbar}
              />
            )}
          />
          <PaginationComponent
            pageCount={data.total_pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No upcoming movies found.</p>
      )}

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

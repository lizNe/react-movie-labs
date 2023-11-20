import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { SeriesContext } from "../../contexts/seriesContext";

const RemoveFromFavoritesIcon = ({ movie, serie }) => {
  const moviesContext = useContext(MoviesContext);
  const seriesContext = useContext(SeriesContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    if (moviesContext.removeFromFavorites && movie) {
      moviesContext.removeFromFavorites(movie);
    } else if (seriesContext.removeFromFavorites && serie) {
      seriesContext.removeFromFavorites(serie);
    }
  };

  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;

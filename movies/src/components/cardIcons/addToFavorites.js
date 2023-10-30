import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import { SeriesContext } from "../../contexts/seriesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavoritesIcon = ({ media, mediaType }) => {
  const moviesContext = useContext(MoviesContext);
  const seriesContext = useContext(SeriesContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if (media && media.id) {
      if (mediaType === "movie") {
        moviesContext.addToFavorites(media);
      } else if (mediaType === "serie") {
        seriesContext.addToFavorites(media);
      }
    } else {
      // Handle the case where media or its id property is undefined
      console.error("Media object or its 'id' property is undefined.");
    }
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;

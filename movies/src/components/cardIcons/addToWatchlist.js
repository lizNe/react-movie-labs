import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const AddToWatchlistIcon = ({ media , showSnackbar}) => {
  const moviesContext = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    if (media && media.id) {
      moviesContext.addToWatchlist(media);
      showSnackbar("Movie added to watchlist");
    } else {
      console.error("Media object or its 'id' property is undefined.");
    }
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWatchlistIcon;

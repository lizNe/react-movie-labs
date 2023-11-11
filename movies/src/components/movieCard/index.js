import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";


const heartAnimation = {
  animation: `$heartBeat 0.8s infinite`,
};


const cardStyles = {
  backgroundColor: "lightgray",
  maxWidth: "100%", // Adjust the width as needed
  border: "2px solid orange",
  position: "relative",
  "&:hover $heartIcon": {
    color: "red",
    ...heartAnimation,
   } // Apply the animation on hover
};

const mediaStyles = {
  height: 350,
};

const titleStyles = {
  textAlign: "center",
  fontSize: "19px",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  maxHeight: "3em", // Set a fixed height
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const dateStyles = {
  textAlign: "center", // Center the title text
  fontSize: "15px", // Set the font size to 20 pixels
};

const ratingStyles = {
  textAlign: "center", // Center the title text
  fontSize: "15px", // Set the font size to 20 pixels
};

const heartIconStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  color: "red", // Default color
  "&:hover": {
    color: "purple", // Change color on hover
    ...heartAnimation, // Apply the animation on hover
  },
};

// Keyframes for heart animation
const keyframes = {
  "@keyframes heartBeat": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.3)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
};

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites } = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false;
  }

  const handleAddToFavorite = () => {
    addToFavorites(movie);
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        sx={mediaStyles}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/path-to-default-image.jpg"
        }
      />
      {movie.favorite && (
        <FavoriteIcon
          sx={{ ...heartIconStyles, ...heartAnimation }}
          onClick={handleAddToFavorite}
        />      )}
      <CardContent>
        <Tooltip title={movie.title} arrow>
          <Typography variant="subtitle1" component="p" sx={titleStyles}>
            {movie.title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" component="p" sx={ratingStyles}>
          {movie.release_date}
        </Typography>
        <Typography variant="body2" component="p" sx={dateStyles}>
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Button variant="outlined" size="small" color="primary">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
}

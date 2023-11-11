import React, { useContext } from "react";
import { SeriesContext } from "../../contexts/seriesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";

const heartAnimation = {
  animation: `$heartBeat 0.8s infinite`,
};

const cardStyles = {
  backgroundColor: "lightgray",
  maxWidth: "100%", // Adjust the width as needed
  marginBottom: "10px",
  border: "2px solid orange",
  position: "relative",
  "&:hover $heartIcon": {
    color: "red",
    ...heartAnimation,
  }, // Apply the animation on hover
};

const mediaStyles = {
  height: 300,
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
  textAlign: "center",
  fontSize: "15px",
};

const ratingStyles = {
  textAlign: "center",
  fontSize: "15px",
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

export default function SerieCard({ serie, action }) {
  const { favorites, addToFavorites } = useContext(SeriesContext);

  if (favorites.find((id) => id === serie.id)) {
    serie.favorite = true;
  } else {
    serie.favorite = false;
  }

  const handleAddToFavorite = () => {
    addToFavorites(serie);
  };

  return (
    <Card sx={cardStyles}>
      <CardMedia
        sx={mediaStyles}
        image={
          serie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
            : "/path-to-default-image.jpg"
        }
      />
      {serie.favorite && (
        <FavoriteIcon
          sx={{ ...heartIconStyles, ...heartAnimation }}
          onClick={handleAddToFavorite}
        />
      )}
      <CardContent>
        <Tooltip title={serie.name} arrow>
          <Typography variant="subtitle1" component="p" sx={titleStyles}>
            {serie.name}
          </Typography>
        </Tooltip>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" sx={dateStyles}>
              {serie.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" sx={ratingStyles}>
              Rating: {serie.vote_average}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(serie)}
        <Button variant="outlined" size="small" color="primary">
          More Info ...
        </Button>
      </CardActions>
    </Card>
  );
}

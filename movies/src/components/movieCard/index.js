import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const cardStyles = {
  backgroundColor: "lightgray",
  maxWidth: 345,
  marginBottom: "10px",
  border: "2px solid orange",
};

const mediaStyles = {
  height: 300,
};

const titleStyles = {
  textAlign: "center", // Center the title text
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
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="10px" component="p" sx={titleStyles}>
            {movie.title}
          </Typography>
        }
      />

      <CardMedia
        sx={mediaStyles}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "/path-to-default-image.jpg"
        }
      />
      <CardContent>
        <Typography variant="h7" component="p">
          {movie.release_date}
        </Typography>
        <Typography variant="h7" component="p">
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`movies/${movie.id}`}>
          <Button variant="outlined" size="small" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

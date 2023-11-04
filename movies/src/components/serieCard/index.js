import React, { useContext } from "react";
import { SeriesContext } from "../../contexts/seriesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

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
  textAlign: "center",
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
      <CardHeader
        avatar={
          serie.favorite ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="10px" component="p" sx={titleStyles}>
            {serie.name}
          </Typography>
        }
      />

      <CardMedia
        sx={mediaStyles}
        image={
          serie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
            : "/path-to-default-image.jpg"
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {serie.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {serie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(serie)}
        <Link to={`/series/${serie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

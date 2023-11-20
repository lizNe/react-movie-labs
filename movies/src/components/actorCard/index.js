import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Import Link from React Router
import Tooltip from "@mui/material/Tooltip";


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
  fontSize: "19px",
  fontWeight: "bold",
  fontFamily: "Arial, sans-serif",
  maxHeight: "3em", // Set a fixed height
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export default function ActorCard({ actor}) {
  return (
    <Card sx={cardStyles}>
      <CardMedia
        sx={mediaStyles}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : "/path-to-default-image.jpg"
        }
      />
      <CardContent>
      <Tooltip title ={actor.name} arrow>
          <Typography variant="h5" component="h2" sx={titleStyles}>
            {actor.name}
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="text.secondary">
          Known for Department: {actor.known_for_department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {actor.gender === 1 ? "Female" : "Male"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity: {actor.popularity}
        </Typography>
        <Link to={`/actors/${actor.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="outlined" size="small" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

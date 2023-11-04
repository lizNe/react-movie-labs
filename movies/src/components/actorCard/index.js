import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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

export default function ActorCard({ actor }) {
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
        <Typography variant="h5" component="h2" sx={titleStyles}>
          {actor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birthday: {actor.birthday}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Place of Birth: {actor.place_of_birth}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Biography: {actor.biography}
        </Typography>
        {/* Add more actor details as needed */}
      </CardContent>
    </Card>
  );
}

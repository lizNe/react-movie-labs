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
          Known for Department: {actor.known_for_department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender: {actor.gender === 1 ? "Female" : "Male"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity: {actor.popularity}
        </Typography>
        {/* You can add more actor details here as needed */}
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardMedia, Typography, Fab, Drawer } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import React, { useState } from "react";

const root = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  padding: "1rem",
  maxWidth: "1100px",
  margin: "auto",
  backgroundColor: "#f0f0f0", // Background color for the card
  color: "#333", // Text color
  borderRadius: "10px", // Border radius
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Box shadow
};

const ActorDetails = ({ actor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const cardTitleStyle = {
    fontSize: "1.8rem",
    color: "#1a237e", // Title color
    marginBottom: "1rem",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    color: "#3f51b5", // Section title color
    marginBottom: "0.5rem",
  };

  const listItemStyle = {
    marginBottom: "0.5rem",
  };

  return (
    <Card sx={root}>
      <CardContent>
        <Typography variant="h4" sx={cardTitleStyle} gutterBottom>
          Overview
        </Typography>

        <Typography variant="body1" paragraph>
          {actor.biography}
        </Typography>

        {actor.also_known_as && actor.also_known_as.length > 0 && (
          <Typography component="div">
            <Typography variant="h5" sx={sectionTitleStyle}>
              Also Known As
            </Typography>
            <ul>
              {actor.also_known_as.map((name) => (
                <li key={name}>
                  <Typography variant="body1" sx={listItemStyle}>
                    {name}
                  </Typography>
                </li>
              ))}
            </ul>
          </Typography>
        )}

        <Typography component="div">
          <Typography variant="h5" sx={sectionTitleStyle}>
            Personal Details
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" sx={listItemStyle}>
                {`Birthday: ${actor.birthday}`}
              </Typography>
            </li>
            <li>
                <Typography variant="body1" sx={listItemStyle}>
                  {`Death Date: ${actor.deathday}`}
                </Typography>
              </li>
            <li>
              <Typography variant="body1" sx={listItemStyle}>
                {`Place of Birth: ${actor.place_of_birth}`}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={listItemStyle}>
                {`Gender: ${actor.gender === 1 ? "Female" : "Male"}`}
              </Typography>
            </li>
            <li>
              <Typography variant="body1" sx={listItemStyle}>
                {`Known For Department: ${actor.known_for_department}`}
              </Typography>
            </li>
          </ul>
        </Typography>

        <Typography component="div">
          <Typography variant="h5" sx={sectionTitleStyle}>
            Popularity
          </Typography>
          <Typography variant="body1" sx={listItemStyle}>
            {`Popularity: ${actor.popularity}`}
          </Typography>
        </Typography>
      </CardContent>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        style={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
          backgroundColor: "#f50057", // Fab button background color
          color: "#fff", // Fab button text color
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {/* Add your review content here */}
      </Drawer>
    </Card>
  );
};

export default ActorDetails;

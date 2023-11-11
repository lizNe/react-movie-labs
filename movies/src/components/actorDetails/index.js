import Paper from "@mui/material/Paper";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";

const root = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  padding: "1rem",
  maxWidth: "800px",
  margin: "auto",
};

const ActorDetails = ({ actor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={root}>
      <Typography variant="h4" gutterBottom>
        Overview
      </Typography>

      <Typography variant="body1" paragraph>
        {actor.biography}
      </Typography>

      {actor.also_known_as && actor.also_known_as.length > 0 && (
        <Paper component="ul">
          <Typography variant="h5">Also Known As</Typography>
          {actor.also_known_as.map((name) => (
            <li key={name}>
              <Typography variant="body1">{name}</Typography>
            </li>
          ))}
        </Paper>
      )}

      <Paper component="ul">
        <Typography variant="h5">Personal Details</Typography>
        <Typography variant="body1">{`Birthday: ${actor.birthday}`}</Typography>
        <Typography variant="body1">{`Place of Birth: ${actor.place_of_birth}`}</Typography>
        <Typography variant="body1">{`Gender: ${actor.gender === 1 ? "Female" : "Male"}`}</Typography>
        <Typography variant="body1">{`Known For Department: ${actor.known_for_department}`}</Typography>
      </Paper>

      <Paper component="ul">
        <Typography variant="h5">Popularity</Typography>
        <Typography variant="body1">{`Popularity: ${actor.popularity}`}</Typography>
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        style={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
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
    </div>
  );
};

export default ActorDetails;

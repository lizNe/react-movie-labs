import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

export default function FilterActorsCard(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTextChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSearch = async () => {
    try {
      if (searchQuery) {
        const result = await props.onSearchActors(searchQuery);
        // Assuming props.onSearchActors is a function passed from the parent to update the actor list
        props.onSearchActors(result.results); // Update the actor list in your parent component
      }
    } catch (error) {
      console.error("Error searching for actors:", error);
    }
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop:"30px",
        marginBottom:"50px"
      }}
    >
      <TextField
        id="filled-search"
        label="Search actors by name"
        type="search"
        variant="filled"
        value={searchQuery}
        onChange={handleTextChange}
        sx={{ width: "20%" }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "20%", marginTop: "8px" }}
        onClick={handleSearch}
      >
        <SearchIcon />
        Search Actors
      </Button>
    </Box>
  );
}

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Spinner from "../spinner";

export default function FilterActorsCard(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSearch = () => {
    // Fetch actors based on the search query
    if (searchQuery) {
      props.onSearchActors(searchQuery);
    }
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        id="filled-search"
        label="Search actors"
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
      <FormControl variant="filled" sx={{ width: "100%" }}>
        <Select
          labelId="genre-label"
          id="genre-select"
          value={props.genreFilter}
          onChange={handleGenreChange}
          title="Genre"
          sx={{
            width: "15%",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {props.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

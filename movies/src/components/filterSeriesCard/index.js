import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getTVGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";


export default function FilterSeriesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getTVGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  let genres = data.genres;

  // Check if "Genre" is already present, and if not, add it
  const hasGenreOption = genres.some((genre) => genre.name === "Genre");
  if (!hasGenreOption) {
    genres = [{ id: "0", name: "Genre" }, ...genres];
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "20px",  // Adjust the gap as needed
      marginTop: "20px",
      marginBottom:"50px"
    }}
    > <Box>
    <FormControl variant="filled" sx={{ width: "200px", marginTop:"30px"}}>
        <Select
          labelId="genre-label"
          id="genre-select"
          value={props.genreFilter}
          onChange={handleGenreChange}
          title="Genre"
          sx={{ 
          backgroundColor: "#007bff", /* Set the background color */
          color: "#fff", /* Set the text color */
          border: "none", /* Remove the border */
          borderRadius: "5px", /* Add rounded corners */
          cursor: "pointer",
          
        
        }}
          
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
    <Box sx={{
    marginLeft: "550px", width:"40%"
  }}>
      <TextField
        id="filled-search"
        label="Search field"
        type="search"
        variant="filled"
        value={props.nameTVFilter}
        onChange={handleTextChange}
        sx={{ width: "50%", marginBottom:"4px"}}
        />
        <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "50%", marginTop: "8px" }}
      >
        <SearchIcon />
        Filter series
      </Button>  
    </Box>
    </Box>
    </Box>
  );
}

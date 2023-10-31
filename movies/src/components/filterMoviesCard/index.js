import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

export default function FilterMovies(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleTextChange = (e) => {
    props.onUserInput("name", e.target.value);
  };

  const handleGenreChange = (e) => {
    props.onUserInput("genre", e.target.value);
  };

  return (
    <div>
      <InputBase
        placeholder="Search movies..."
        value={props.titleFilter}
        onChange={handleTextChange}
        startAdornment={<SearchIcon />}
      />
      <FormControl>
        <InputLabel id="genre-label">Genre</InputLabel>
        <Select
          labelId="genre-label"
          id="genre-select"
          defaultValue=""
          value={props.genreFilter}
          onChange={handleGenreChange}
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

import React, { useState } from "react";
import Header from "../headerSeriesList";
import FilterCard from "../filterSeriesCard";
import SeriesList from "../seriesList";
import Grid from "@mui/material/Grid";
import PageCarousel from "../pageCarousel";

function TVSeriesListPageTemplate({ series, title, action }) {
  const [nameTVFilter, setNameTVFilter] = useState("");
  const [genreTVFilter, setGenreTVFilter] = useState("0");
  const genreId = Number(genreTVFilter);

  let displayedSeries = series
    .filter((s) => {
      return s.name.toLowerCase().search(nameTVFilter.toLowerCase()) !== -1;
    })
    .filter((s) => {
      return genreId > 0 ? s.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameTVFilter(value);
    else setGenreTVFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
        <PageCarousel /> 
        </Grid>
        <Grid item xs={12}>
        <FilterCard
            onUserInput={handleChange}
            nameFilter={nameTVFilter}
            genreFilter={genreTVFilter}
          />
      </Grid>
      <Grid item container spacing={2}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}>
        
        </Grid>
        <SeriesList action={action} series={displayedSeries}></SeriesList>
      </Grid>
    </Grid>
  );
}

export default TVSeriesListPageTemplate;

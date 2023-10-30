import React from "react";
import Grid from "@mui/material/Grid";
import Serie from "../serieCard";

const SeriesList = ( {series, action }) => {
  let serieCards = series.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Serie key={s.id} serie={s} action={action} />
    </Grid>
  ));
  return serieCards;
};

export default SeriesList;
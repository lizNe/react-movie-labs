import React, { useState } from "react";
import Header from "../headerActorsList";
import FilterCard from "../filterActorsCard"; // You may need to adjust the import
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";

function ActorListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedActors = actors.filter((a) => {
    return a.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleChange = (value) => {
    setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={2}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;

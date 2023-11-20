import React, { useState } from "react";
import Header from "../headerActorsList";
import FilterCard from "../filterActorsCard"; // You may need to adjust the import
import ActorList from "../actorList";
import Grid from "@mui/material/Grid";
import PageCarousel from "../pageCarousel";
import { getActorNameSearch } from "../../api/tmdb-api";

function ActorListPageTemplate({ actors, title, action, onSearchActors }) {
  const [nameFilter, setNameFilter] = useState("");


  let displayedActors = actors.filter((a) => {
    return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleSearchActors = async (searchQuery) => {
    try {
      // Call your API function to search for actors using the provided search query
      const result = await getActorNameSearch(searchQuery);
      // Update the displayed actors based on the search result
      setNameFilter(searchQuery);
      // Pass the updated actors list to the parent component
      onSearchActors(result.results);
    } catch (error) {
      console.error("Error searching for actors:", error);
    }
  };
  

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
        <PageCarousel /> 
      </Grid>
      <Grid item container spacing={2}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}>
          <FilterCard onSearchActors={handleSearchActors}
          />
        </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;

import React, { useState, lazy, Suspense } from "react";
import Grid from "@mui/material/Grid";
import { getActorNameSearch } from "../../api/tmdb-api";

// Lazy loading for components
const Header = lazy(() => import("../headerActorsList"));
const FilterCard = lazy(() => import("../filterActorsCard"));
const ActorList = lazy(() => import("../actorList"));
const Carousel = lazy(() => import('../pageCarousel'));


// Lazy loading fallback component
const LoadingFallback = () => <h1>Loading...</h1>;

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
    <Suspense fallback={<LoadingFallback />}>
      <Grid container sx={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Header title={title} />
          <Carousel />
        </Grid>
        <Grid item container spacing={2}>
          <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={20}>
            <FilterCard onSearchActors={handleSearchActors} />
          </Grid>
          <ActorList action={action} actors={displayedActors} />
        </Grid>
      </Grid>
    </Suspense>
  );
}

export default ActorListPageTemplate;

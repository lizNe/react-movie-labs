import React, { lazy, Suspense } from "react"; // Add import for lazy and Suspense
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import { getActorImages } from '../../api/tmdb-api';
import { Card, CardMedia } from "@mui/material";


const ActorHeader = lazy(() => import('../headerActor'));
const Spinner = lazy(() => import('../spinner'));


const TemplateActorPage = ({ actor, children }) => {
  const { error, isLoading, isError } = useQuery(
    ["images", { id: actor.id }],
    getActorImages
  );

  if (isLoading) {
    return (
      <Suspense fallback={<Spinner />}>
        <Spinner />
      </Suspense>
    );
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <ActorHeader actor={actor} />
        <Grid container spacing={4} sx={{ padding: "15px" }}>
          <Grid item xs={2.5}>
            <Card>
              <CardMedia
                component="img"
                alt={actor.name}
                height="100%"
                image={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              />
            </Card>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default TemplateActorPage;

import React from "react";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import ActorHeader from '../headerActor';
import Grid from "@mui/material/Grid";
import { getActorImages } from '../../api/tmdb-api';
import { Card, CardMedia } from "@mui/material";



const TemplateActorPage = ({ actor, children }) => {
  const { error, isLoading, isError } = useQuery(
    ["images", { id: actor.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
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
    </>
  );
};

export default TemplateActorPage;

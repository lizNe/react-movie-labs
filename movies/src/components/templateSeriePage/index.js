import React, { lazy, Suspense } from "react";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import Grid from "@mui/material/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSeriesImages } from "../../api/tmdb-api";
import { Carousel } from "react-bootstrap";


const SerieHeader = lazy(() => import('../headerSerie'));


const TemplateSeriePage = ({ serie, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: serie.id }],
    getSeriesImages
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

  const images = data.posters;

  return (
    <>
    <Suspense fallback={<Spinner />}>

      <SerieHeader serie={serie} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
            <Carousel>
              {images.map((image) => (
                <Carousel.Item key={image.file_path}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                    className="d-block w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
      </Suspense>

    </>
  );
};

export default TemplateSeriePage;

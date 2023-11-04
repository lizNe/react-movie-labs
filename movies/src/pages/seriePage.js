import React from "react";
import { useParams } from "react-router-dom";
import SerieDetails from "../components/serieDetails";
import PageTemplate from "../components/templateSeriePage";
import { getSingleSeries } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const SeriePage = (props) => {
  const { id } = useParams();
  const { data: serie, error, isLoading, isError } = useQuery(
    ["serie", { id: id }],
    getSingleSeries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {serie ? (
        <>
          <PageTemplate serie={serie}>
            <SerieDetails serie={serie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for serie details</p>
      )}
    </>
  );
};

export default SeriePage;

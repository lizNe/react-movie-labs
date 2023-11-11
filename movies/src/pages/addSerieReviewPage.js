import React from "react";
import PageTemplate from "../components/templateSeriePage";
import ReviewSerieForm from "../components/reviewSerieForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleSeries } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteSerieReviewPage = (props) => {
  const location = useLocation();
  const serieId = location.state.serieId;

  const { data: serie, error, isLoading, isError } = useQuery(
    ["serie", { id: serieId }],
    getSingleSeries
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate serie={serie}>
      <ReviewSerieForm serie={serie} />
    </PageTemplate>
  );
};

export default WriteSerieReviewPage;
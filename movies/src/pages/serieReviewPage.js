import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateSeriePage";
import SerieReview from "../components/serieReview";

const SerieReviewPage = (props) => {
  let location = useLocation();
  const {serie, review} = location.state;
  
  return (
    <PageTemplate serie={serie}>
      <SerieReview review={review} />
    </PageTemplate>
  );
};

export default SerieReviewPage;
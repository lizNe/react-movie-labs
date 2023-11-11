import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteSerieReviewIcon = ({ serie }) => {
  return (
    <Link
      to={`/series/reviews/form`}
      state={{
          serieId: serie.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteSerieReviewIcon;
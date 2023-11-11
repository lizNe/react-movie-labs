import React from "react";
import Typography from "@mui/material/Typography";

const SerieReview = ({ review }) => {
  if (!review || !review.author) {
    // If review or review.author is undefined, return a default message or handle it as needed.
    return <p>No review available</p>;
  }

  return (
    <>
      <Typography variant="h5" component="h3">
        Review By: {review.author}
      </Typography>

      <Typography variant="h6" component="p">
        {review.content}
      </Typography>
    </>
  );
};

export default SerieReview;

import React from "react";
import { useQuery } from "react-query";
import { Spinner } from "react-bootstrap";
import { getLatestMovie } from "../../api/tmdb-api";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";

const LatestMovie = () => {
  const { data, error, isLoading, isError } = useQuery("latest", getLatestMovie);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const latest = data;


  return (
    <div className="my-5 d-flex justify-content-center flex-column align-items-center">
      <div className="cool-heading" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Latest Movie Today
      </div>
      <CCard style={{ maxWidth: "540px" }}>
        <CRow className="g-0">
          <CCol md={4}>
         <CCardImage
        src={
          latest.poster_path
            ? `https://image.tmdb.org/t/p/w500/${latest.poster_path}`
            : "src/images/default.jpg"
        }
      />
          </CCol>
          <CCol md={8}>
            <CCardBody>
              <CCardTitle>{latest.title}</CCardTitle>
              <CCardText>{latest.overview}</CCardText>
              <CCardText>
                <strong>Release Date:</strong> {latest.release_date}
              </CCardText>
              <CCardText>
                <strong>Vote Average:</strong> {latest.vote_average}
              </CCardText>
              <CCardText>
                <strong>Popularity:</strong> {latest.popularity}
              </CCardText>
              {/* Add more details as needed */}
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </div>
  );
};

export default LatestMovie;

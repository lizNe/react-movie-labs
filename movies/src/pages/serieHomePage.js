import React, { useState } from "react";
import { getSeries } from "../api/tmdb-api";
import PageTemplate from "../components/templateTVSeriesListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PaginationComponent from "../components/paginationComponent";

const SerieHomePage = (props) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isHovered, setIsHovered] = useState(false);


  const { data, error, isLoading, isError } = useQuery(
    ["series", { page: currentPage }],
    () => getSeries(currentPage)
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const resetPage = () => {
    setCurrentPage(1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    const buttonStyle = {
      backgroundColor: '#007bff', // Change the background color to your preference
      color: '#fff', // Change the text color to your preference
      padding: '10px 20px', // Adjust the padding as needed
      border: 'none',
      borderRadius: '4px', // Add rounded corners
      cursor: 'pointer',
      fontSize: '16px', // Adjust the font size
      display: 'block', // Make the button a block-level element
      margin: 'auto', // Center horizontally
    };

    const containerStyle = {
      height: '100vh', // Center vertically within the viewport
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    const buttonHoverStyle = {
      backgroundColor: '#0056b3', // Change the hover background color
    };

    return (
      <div style={containerStyle}>
        <h1>{error.message}</h1>
        <button
        style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
        onClick={resetPage}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        Go Back
      </button>  
      </div>    
    );
  }

  const series = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = series.filter((s) => s.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  const addToFavorites = (seriesId) => true;

  return (
    <>
      {series.length > 0 ? (
        <>
          <PageTemplate
            title="Discover TV Series"
            series={series}
            action={(serie) => {
              return (
                <AddToFavoritesIcon
                  media={serie}
                  mediaType="serie"
                  onAddToFavorites={addToFavorites}
                />
              );
            }}
          />
          <PaginationComponent
            pageCount={data.total_pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No TV series found.</p>
      )}
    </>
  );
};

export default SerieHomePage;

import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PaginationComponent from "../components/paginationComponent";


const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isHovered, setIsHovered] = useState(false);


  const { data, error, isLoading, isError } = useQuery(
    ["discover", { page: currentPage }],
    () => getMovies(currentPage)
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
        Go to Home
      </button>  
      </div>    
    );
  }

  const movies = data.results;

  const favorites = movies.filter((m) => m.favorite);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
    <>
      {movies.length > 0 ? (
        <>
          <PageTemplate
            title="Discover Movies"
            movies={movies}
            action={(movie) => {
              return <AddToFavoritesIcon media={movie} mediaType="movie" />;
            }}
          />
          <PaginationComponent
            pageCount={data.total_pages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </>
  );
};

export default HomePage;

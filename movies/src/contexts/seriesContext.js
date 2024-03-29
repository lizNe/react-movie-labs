import React, { useState } from "react";

export const SeriesContext = React.createContext(null);

const SeriesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [watchlist, setWatchlist] = useState([]);

  const addToFavorites = (serie) => {
    let newFavorites = [];
    if (!favorites.includes(serie.id)) {
      newFavorites = [...favorites, serie.id];
    } else {
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites);
  };
  

  const addToWatchlist = (serie) => {
    if (!watchlist.includes(serie.id)) {
      setWatchlist([...watchlist, serie.id]);
    }
  };

  const addReview = (serie, review) => {
    setMyReviews({ ...myReviews, [serie.id]: review });
  };

  // We will use this function in a later section
  const removeFromFavorites = (serie) => {
    setFavorites(favorites.filter((sId) => sId !== serie.id));
  };

  return (
    <SeriesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesContextProvider;

import React from "react";
import EpisodeList from "../episodeList";

const SeasonList = ({ seasons }) => {
  return (
    <div>
      <h2>Seasons</h2>
      {seasons.map((season) => (
        <div key={season._id}>
          <h3>Season {season.season_number}</h3>
          <p>Air Date: {season.air_date}</p>
          <EpisodeList episodes={season.episodes} />
        </div>
      ))}
    </div>
  );
};

export default SeasonList;

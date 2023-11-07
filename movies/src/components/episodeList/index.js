import React from "react";

const EpisodeList = ({ episodes }) => {
  return (
    <div>
      <h4>Episodes</h4>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <h5>Episode {episode.episode_number}: {episode.name}</h5>
          <p>Air Date: {episode.air_date}</p>
          <p>Overview: {episode.overview}</p>
          <p>Runtime: {episode.runtime} minutes</p>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;

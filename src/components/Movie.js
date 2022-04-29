import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <p>{movie.name}</p>
      <em>{movie.price}</em>
    </div>
  );
};

export default Movie;

import React, { useContext } from 'react';
import './MovieList.css';
import Movie from './Movie';
import { MovieContext } from '../context/MovieContext';

const MovieList = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;

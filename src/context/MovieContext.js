import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movie, setMovie] = useState({ name: '', price: '' });
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      name: 'Harry Potter',
      price: '$9.99',
    },
    {
      id: uuidv4(),
      name: 'No country for old men',
      price: '$10.99',
    },
    {
      id: uuidv4(),
      name: 'Inception',
      price: '$12.99',
    },
    {
      id: uuidv4(),
      name: 'Spider man: home coming',
      price: '$5.99',
    },
  ]);

  const updateTitle = (e) => {
    setMovie((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const updatePrice = (e) => {
    setMovie((prev) => ({
      ...prev,
      price: `$${e.target.value}`,
    }));
  };

  const onMovieAdd = (e) => {
    e.preventDefault();
    setMovies((prev) => [...prev, { ...movie, id: uuidv4() }]);
  };

  return (
    <MovieContext.Provider
      value={[movies, setMovies, movie, updateTitle, updatePrice, onMovieAdd]}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

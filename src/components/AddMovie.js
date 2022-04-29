import React, { useContext } from 'react';
import { MovieContext } from './../context/MovieContext';

const AddMovie = () => {
  const [, , movie, updateTitle, updatePrice, onMovieAdd] =
    useContext(MovieContext);

  return (
    <form onSubmit={onMovieAdd}>
      <input
        type={'Text'}
        onChange={updateTitle}
        name="name"
        value={movie.name}
      />
      <input
        type={'number'}
        name={'price'}
        onChange={updatePrice}
        value={+movie.price.replace('$', '')}
      />
      <button>add movie</button>
    </form>
  );
};

export default AddMovie;

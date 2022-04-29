import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import Nav from './components/Nav';
import { MovieProvider } from './context/MovieContext';
import AddMovie from './components/AddMovie';
const App = () => {
  return (
    <MovieProvider>
      <div className="wrapper">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;

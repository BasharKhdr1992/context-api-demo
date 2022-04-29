import React, { useContext } from 'react';
import './Nav.css';
import { MovieContext } from './../context/MovieContext';

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="navbar">
      <h1 className="navlink">Welcome Bashar!</h1>
      <p className="navlink">List of Movies:&nbsp;{movies.length}</p>
    </div>
  );
};

export default Nav;

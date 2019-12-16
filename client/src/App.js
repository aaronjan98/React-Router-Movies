import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };


  return (
    <div>
      <SavedList list={savedList} />
      <nav>
        <div className="nav-links">
          <Link to="/">MovieList</Link>
          <Link to="/movies">Movie</Link>
        </div>
      </nav>
      <Switch>
        <Router path="/">
          <MovieList />
        </Router>
        <Router path="/movies/:movieID">
          <Movie />
        </Router>
      </Switch>
    </div>
  );
};

export default App;

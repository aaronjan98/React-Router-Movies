import React, { useState } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
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
      {/* <NavLink to="/MovieList">Home</NavLink>
      <NavLink to="/Movie">Movies</NavLink> */}
      {/* <nav>
        <div className="nav-links">
          <Link to="/">MovieList</Link>
          <Link to="/movies">Movie</Link>
        </div>
      </nav> */}
      <Switch>
        <Route path="/MovieList">
          <MovieList />
         </Route>
        <Route path="/Movies/:id">
          <Movie />
        </Route>  
      </Switch>
    </div>
  );
};

export default App;

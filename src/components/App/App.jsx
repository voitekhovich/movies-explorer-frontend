import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from '../pages/PageNotFound/PageNotFound';

export default function App() {

  return (
    <React.Fragment>

      <Switch>
      <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      
    </React.Fragment>
  );
}

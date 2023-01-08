import './App.css';
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import * as auth from "../../utils/MainApi";
import { api } from "../../utils/Api";
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  // const [isRegistered, setIsRegistered] = React.useState(false);

  const handleLogin = (email, password) => {
    return auth.authorize(email, password).then((user) => {
      setCurrentUser(user);
      setIsLoggedIn(true);
    });
  };

  const handleRegister = (name, email, password) => {
    return auth
      .register(name, email, password)
      .then(() => {
        // setIsRegistered(true);
        history.push("/signin");
      })
      .catch((err) => {
        // setIsRegistered(false);
        return Promise.reject(err);
      });
  };

  const handleSignOut = () => {
    auth.signout().then((data) => {
      localStorage.removeItem("jwt");
      setIsLoggedIn(false);
      history.push("/signin");
    });
  };

  const tokenCheck = () => {
      api.getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        switch (err) {
          case 401:
            console.log(`${err} - Необходима авторизация`);
            break;
          default:
            console.log(err);
        };
      });
  };

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (!isLoggedIn) return;
    history.push("/movies");
  }, [isLoggedIn]);

  return (
    <React.Fragment>

      <Switch>
        
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>

        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
          <ProtectedRoute path="/" loggedIn={isLoggedIn}>
            <Route path="/movies">
              <Header onSignOut={handleSignOut} />
              <Movies />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header onSignOut={handleSignOut} />
              <SavedMovies />
              <Footer />
            </Route>
            <Route path="/profile">
              <Header onSignOut={handleSignOut} />
              <Profile onSignOut={handleSignOut} />
            </Route>
          </ProtectedRoute>
        </CurrentUserContext.Provider>
        
        
        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
      
    </React.Fragment>
  );
}

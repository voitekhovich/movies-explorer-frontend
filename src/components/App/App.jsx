import "./App.css";
import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import Main from "../pages/Main/Main";
import Movies from "../pages/Movies/Movies";
import SavedMovies from "../pages/SavedMovies/SavedMovies";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  const handleLogin = (email, password) => {
    return mainApi.authorize(email, password).then((user) => {
      setCurrentUser(user);
      setIsLoggedIn(true);
      localStorage.clear();
    });
  };

  const handleRegister = (name, email, password) => {
    return mainApi
      .register(name, email, password)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const handleSignOut = () => {
    mainApi.signout().then((data) => {
      localStorage.clear();
      setIsLoggedIn(false);
      history.push("/signin");
    });
  };

  const tokenCheck = () => {
    mainApi
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        return true;
      })
      .catch((err) => {
        setIsLoggedIn(false);
        switch (err) {
          case 401:
            console.log(`${err} - Необходима авторизация`);
            break;
          default:
            console.log(err);
        }
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
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Switch>
        <ProtectedRoute loggedIn={isLoggedIn}>
            <Route path="/movies">
              <Header onSignOut={handleSignOut} />
              <Movies tokenCheck={tokenCheck} />
              <Footer />
            </Route>
            <Route path="/saved-movies">
              <Header onSignOut={handleSignOut} />
              <SavedMovies tokenCheck={tokenCheck} />
              <Footer />
            </Route>
            <Route path="/profile">
              <Header onSignOut={handleSignOut} />
              <Profile tokenCheck={tokenCheck} onSignOut={handleSignOut} />
            </Route>
            
          </ProtectedRoute>

          <Route path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route exact path="/">
            <Header
              className={"main__header"}
              isLoggedIn={isLoggedIn}
              onSignOut={handleSignOut}
            />
            <Main />
          </Route>
          
          <Route path="*">
              <PageNotFound />
            </Route>
          
        </Switch>
      </CurrentUserContext.Provider>
    </React.Fragment>
  );
}

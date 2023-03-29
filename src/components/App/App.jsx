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
import { AuthContext } from "../../contexts/AuthContext";
import Preloader from "../Preloader/Preloader";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  const handleLogin = (email, password) => {
    return mainApi.authorize(email, password).then((user) => {
      localStorage.clear();
      setIsLoggedIn(true);
      tokenCheck();
      history.push("/movies");
    });
  };

  const handleRegister = (name, email, password) => {
    return mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  const handleSignOut = () => {
    mainApi.signout().then((data) => {
      localStorage.clear();
      setCurrentUser({});
      setIsLoggedIn(false);
      history.push("/");
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
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    setIsLoggedIn(false);
    tokenCheck();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <Switch>
          <ProtectedRoute path="/movies" loggedIn={isLoggedIn}>
            <Header onSignOut={handleSignOut} />
            <Movies tokenCheck={tokenCheck} />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies" loggedIn={isLoggedIn}>
            <Header onSignOut={handleSignOut} />
            <SavedMovies tokenCheck={tokenCheck} />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
            <Header onSignOut={handleSignOut} />
            <Profile tokenCheck={tokenCheck} onSignOut={handleSignOut} />
          </ProtectedRoute>

          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>

          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register onRegister={handleRegister} />
            )}
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
      </AuthContext.Provider>
    </React.Fragment>
  );
}

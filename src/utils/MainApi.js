import { MAIN_API_URL, BEATFILM_API_URL } from "./constants.js";

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  _request = ({ url, method = "GET", token, data }) => {
    return fetch(`${MAIN_API_URL}${url}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(!!token && { Authorization: `Bearer ${token}` }),
      },
      ...(!!data && { body: JSON.stringify(data) }),
    }).then(this._checkResponse);
  };

  getUserInfo = () => {
    return this._request({
      url: "/users/me",
    });
  };

  setUserInfo(name, email) {
    return this._request({
      url: "/users/me",
      method: "PATCH",
      data: {
        name,
        email,
      },
    });
  }

  register = (name, email, password) => {
    return this._request({
      url: "/signup",
      method: "POST",
      data: { name, email, password },
    });
  };

  authorize = (email, password) => {
    return this._request({
      url: "/signin",
      method: "POST",
      data: { email, password },
    });
  };

  signout = () => {
    return this._request({
      url: "/signout",
      method: "POST",
    });
  };

  getContent = (token) => {
    return this._request({
      url: "/users/me",
      // token,
    });
  };

  getInitialCards() {
    return this._request({
      url: "/movies",
    });
  }

  setLike(card) {
    return this._request({
      url: "/movies",
      method: "POST",
      data: {
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: card.image,
        trailerLink: card.trailerLink,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
        thumbnail: card.thumbnail,
        movieId: card.id,
      },
    });
  }

  delLikes(cardId) {
    return this._request({
      url: `/movies/${cardId}`,
      method: "DELETE",
    });
  }

  changeLikeCardStatus(card) {
    if (!card.isLike) return this.setLike(card);
    return this.delLikes(card.isLike);
  }
}

export const mainApi = new MainApi({ baseUrl: MAIN_API_URL });

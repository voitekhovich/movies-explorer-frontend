import { BEATFILM_API_URL } from "./constants";

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  _request({ url, method = "GET" }) {
    return fetch(this._baseUrl + url, {
      // credentials: "include",
      method,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }

  getAllData() {
    return this._request({
      url: "/beatfilm-movies",
    });
  }
}

export const moviesApi = new MoviesApi({ baseUrl: BEATFILM_API_URL });

import { BEATFILM_API_URL, headers } from './constants';

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
    // return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(this._baseUrl + url, { 
      // credentials: 'include',
      method: "GET",
      ...options,
    }).then(this._checkResponse);
  }

  getAllData() {
    return this._request("/beatfilm-movies", {
      headers: this._headers,
    });
  }
}

export const moviesApi = new MoviesApi({ baseUrl: BEATFILM_API_URL, headers });
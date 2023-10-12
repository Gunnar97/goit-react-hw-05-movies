import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    language: 'en-US',
    page: 1,
    api_key: '859bd5e6eef52bbb11dc68c1bf778b1c',
  },
});
export async function getTrendMovies(endpoint, params = {}) {
  const { data } = await API.get(endpoint, {
    params: {
      ...params,
    },
  });
  return data;
}

export async function getSearchMovies(endpoint, query) {
  const { data } = await API.get(endpoint, {
    params: {
      ...query,
    },
  });
  return data;
}

export async function getMovie(endpoint) {
  const { data } = await API.get(endpoint);
  return data;
}

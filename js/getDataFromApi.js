import axios from 'axios';

export const urlRickAndMorty = 'https://rickandmortyapi.com/api/character/';
export const apiError = 'https://httpstat.us/';

export const getDataFromApi = url => {
  return axios.get(url)
    .then(({ data }) => {
      return data
    });
};
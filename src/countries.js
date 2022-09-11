import axios from "axios";

const url = 'https://restcountries.com/v3.1/';

function searchAll() {
  return axios.get(`${url}all`);
}

function searchContinent(region) {
  return axios.get(`${url}subregion/${region}`);
}

function searchCountry(country) {
  return axios.get(`${url}name/${country}`);
}

export {searchAll, searchContinent, searchCountry}
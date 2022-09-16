import axios from "axios";

const url = 'https://restcountries.com/v3.1/';

function searchAll() {
  return axios.get(`${url}all`);
}

function searchContinent(region) {
  return axios.get(`${url}region/${region}`);
}

function searchCountry(country, fullText = false) {
  const searchFull = fullText ? "fullText=true" : "";
  return axios.get(`${url}name/${country}${searchFull}`);
}

function getBorders(border) {
  return axios.get(`${url}alpha/${border}`);
}

export {searchAll, searchContinent, searchCountry, getBorders}
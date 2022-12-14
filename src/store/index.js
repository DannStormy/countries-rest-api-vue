import { createStore } from 'vuex'
import { searchContinent, searchAll, searchCountry } from '@/countries'

export default createStore({
  state: {
    allCountries: null,
    region: null,
    countryDetails: null,
    isLoading: false,
    isError: null,
  },
  getters: {
    getCountryBorder(state) {
      const borders = {};
      const countries = state.allCountries;
      countries.map(country => {
        const code = country.cca3;
        borders[code] = country.name.common
      })
      console.log(borders)
      return borders;
    }
  },
  mutations: {
    SET_COUNTRIES(state, countries){
      state.allCountries = countries
    },
    SET_COUNTRY_DETAILS(state, countryDetails) {
      state.countryDetails = countryDetails
    },
    SET_LOADING(state, isLoading){
      state.isLoading = isLoading
    },
    SET_ERROR(state, isError){
      state.isError = isError
    },
    SET_BORDERS(state, borders){
      state.borders = borders
    }
  },
  actions: {
    async getRegion({commit}, region){
      try {
        commit('SET_LOADING', true)
        const response = await searchContinent(region)
        const data = response.data
        commit('SET_COUNTRIES', data)
      }catch(err){
        console.log(err)
      }finally{
        commit('SET_LOADING', false)
      }
    },
    async getAllCountries({commit}){
      try {
        commit('SET_LOADING', true)
        const response = await searchAll()
        const data = response.data
        commit('SET_COUNTRIES', data)
      }catch(err){
        console.log(err)
      }finally{
        commit('SET_LOADING', false)
      }
    },
    async searchCountry({commit}, country){
      commit('SET_LOADING', true)
      try {
        const response = await searchCountry(country)
        const data = response.data
        commit('SET_COUNTRIES', data)
      }catch(err){
        commit('SET_ERROR', err.status)
        console.log(err)
      }finally{
        commit('SET_LOADING', false)
      }
    },
    async getCountryDetails({commit}, country) {
      commit('SET_LOADING', true)
      try {
        const response = await searchCountry(country)
        const data = response.data
        commit('SET_COUNTRY_DETAILS', data)
        commit('SET_ERROR', null)
      } catch(err) {
        commit('SET_ERROR', err.message)
        console.log(err.message)
      }finally{
        commit('SET_LOADING', false)
      }
    },
  },
  modules: {
  }
})

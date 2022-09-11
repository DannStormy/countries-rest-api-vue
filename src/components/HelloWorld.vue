<template>
  <div class="search__inputs">
    <div class="search">
      <img src="@/assets/icons8-search.svg" alt="search__icon">
      <input type="text" placeholder="Search for country..." v-model="country">
    </div>
    <div class="select__menu">
      <select v-model="selected">
        <option disabled value="">Filter by region</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  </div>
  <LoadingCircle v-if="isLoading" />
  <div class="country__container" v-if="!isLoading">
    <div class="countries" v-for="country in allCountries" :key="country">
      <div class="flag__container" @click="checkCountryDetails(country.name.common)">
        <img :src=country.flags.png alt="flag">
      </div>
      <div class="country__info">
        <div class="name__container">
          <p class="name">
            {{country.name.common}}
          </p>
        </div>
        <div class="population__container">
          <p class="population">
            <b>Population:</b> {{country.population.toLocaleString("en-US")}}
          </p>
        </div>
        <div class="region__container">
          <p class="region">
            <b>Region:</b> {{country.region}}
          </p>
        </div>
        <div class="capital__container">
          <p class="capital__heading"> <b> Capital:</b> </p>
          <p class="capital" v-for="capital in country.capital" :key="capital">
             {{capital}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapState
  } from 'vuex';
  import LoadingCircle from './LoadingCircle.vue';

  export default {
    data: () => ({
      selected: "",
      country: ""
    }),
    name: "HelloWorld",
    methods: {
      ...mapActions(["getRegion", "getAllCountries", "searchCountry", "getCountryDetails"]),
      searchRegion(selected) {
        if (selected) {
          this.getRegion(selected);
        }
      },
      checkCountryDetails(country) {
        this.$router.replace({
          query: {
            country: country
          }
        });
        this.$router.push(`${country}`);
      }
    },
    computed: {
      ...mapState(["allCountries", "isLoading"])
    },
    watch: {
      selected() {
        this.getRegion(this.selected);
      },
      country() {
        this.searchCountry(this.country);
      }
    },
    mounted() {
      this.getAllCountries();
      // this.$router.replace({query : {country: "all"}})
    },
    components: {
      LoadingCircle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search__inputs{
    width: 1270px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    position: sticky;
    z-index: 1;
    top: 30px;
  }

  .search{
    display: flex;
    align-items: center;
  }
  /* .search img{
    padding: 15px;
    background-color: hsl(209, 23%, 22%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  } */
  .search input, select{
    width: 460px;
    padding: 15px;
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    background-color: hsl(209, 23%, 22%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  ::placeholder{
    color: white;
  }
  select{
    width: 200px;
  }
  .country__container {
    width: 1350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 70px;
    color: white;
  }

  .countries {
    width: 265px;
    height: 400px;
    background-color: hsl(209, 23%, 22%);
    border-radius: 5px;
  }

  .flag__container img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 265px;
    height: 160px;
    cursor: pointer;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .flag__container img:hover {
    border-radius: 5px;
    transform: scale(1.1);
  }

  .country__info {
    padding: 20px;
  }

  .country__info>div {
    padding: 10px;
  }

  .capital__container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .name {
    font-size: 18px;
    font-weight: 600;
  }

</style>
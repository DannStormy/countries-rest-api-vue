<template>
  <NavBar />
  <button @click="goBack">Back</button>
  <div class="error" v-if="isError && !isLoading">
    <h1>Country details not found</h1>
  </div>
  <LoadingCircle v-if="isLoading" />
  <div class="country__details__container" v-if="!isLoading && !isError">
    <div class="country__details" v-for="detail in countryDetails" :key="detail">
      <div class="left">
        <div class="fg__container">
          <img :src=detail.flags.png alt="flag">
        </div>
      </div>
      <div class="middle">
        <div class="first">
          <div class="name__container">
            <span class="name">
              {{detail.name.common}}
            </span>
          </div>
          <div class="native__name__container">
            <span class="native__name">
              <b>Native Name: </b> {{Object.values(detail.name.nativeName)[0].common}}
            </span>
          </div>
          <div class="population__container">
            <span class="population">
              <b>Population: </b> {{detail.population.toLocaleString("en-US")}}
            </span>
          </div>
          <div class="region__container">
            <span class="region">
              <b>Region: </b> {{detail.region}}
            </span>
          </div>
          <div class="subregion__container">
            <span class="subregion">
              <b>Sub Region: </b> {{detail.subregion}}
            </span>
          </div>
          <div class="capital__container">
            <b>Capital: </b>
            <span v-for="(capital, index) in Object.values(detail.capital)" :key="capital">
              <span class="capital">{{capital}}</span>
              <span v-if="index != Object.values(detail.capital).length - 1">, </span>
            </span>
          </div>
        </div>
        <div class="second">
          <div class="topld">
            <span class="top_level_domain">
              <b>Top Level domains: </b> {{detail.tld[0]}}
            </span>
          </div>
          <div class="currency_container">
            <span class="currency">
              <b> Currencies: </b> {{Object.values(detail.currencies)[0].name}}
            </span>
          </div>
          <div class="languages__container">
            <b>Languages: </b>
            <span class="languages" v-for="(language, index) in Object.values(detail.languages)" :key="language">
              <span>{{language}}</span>
              <span v-if="index != Object.values(detail.languages).length - 1">, </span>
            </span>
          </div>
        </div>
        <div class="third">
          <div class="border__container" v-if="detail.borders">
            <b>Border Countries: </b>
              <span class="border" @click="checkCountryDetails(getCountryBorder[border])" v-for="border in detail.borders" :key="border">
              {{getCountryBorder[border]}}
              </span>
          </div>
          <div class="border__container" v-else>
            <b>Border Countries: </b>
            <spam class="border">No Borders</spam>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '@/router';
  import {
    mapActions,
    mapGetters,
    mapState
  } from 'vuex';
  import LoadingCircle from './LoadingCircle.vue';
  import NavBar from './NavBar.vue';

  export default {
    computed: {
      ...mapState(['countryDetails', 'isLoading', 'isError']),
      ...mapGetters(['getCountryBorder'])
    },
    created() {
      this.getAllCountries({});
    },
    mounted() {
      console.log("Mounting")
      const country = this.$route.params.country;
      if (country) {
        this.getCountryDetails(country);
      }
    },
    watch: {
      $route() {
        const country = this.$route.params.country
        if (country) {
          this.getCountryDetails(country);
        }
      }
    },
    methods: {
      ...mapActions(['getCountryDetails', 'getAllCountries']),
      goBack() {
        router.back()
      },
      checkCountryDetails(border) {
        this.$router.replace({
          query: {
            country: border
          }
        });
        this.$router.push(`${border}`);
        this.getCountryDetails(border)
      }
    },
    components: {
      LoadingCircle,
      NavBar
    }
  }
</script>
<style scoped>
  button {
    margin-top: 80px;
    margin-left: 45px;
    padding: 10px 30px;
    background-color: var(--container-bg-color);
    color: var(--text-color);
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }

  .country__details__container {
    width: 1350px;
    margin-left: auto;
    margin-right: auto;
    color: var(--container-bg-color);
    margin-top: 40px;
    color: var(--text-color)
  }

  .fg__container img {
    width: 500px;
    height: 400px;
  }

  .country__details {
    display: flex;
    gap: 100px;
    margin-bottom: 50px;
  }

  .languages__container,
  .capital__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .border__container {
    display: flex;
    align-items: center;
  }

  .capital__container p {
    margin-right: 5px;
  }

  b {
    margin-right: 4px;
  }

  .name {
    font-weight: 600;
    font-size: 20px;
  }

  .languages {
    margin-right: 5px;
  }

  .middle {
    display: flex;
    flex-wrap: wrap;
  }

  .first>*,
  .second>* {
    margin-bottom: 10px;
  }

  .first {
    width: 375px;
  }

  .second {
    width: 375px;
    margin-top: 100px;
  }

  .name__container {
    margin-top: 50px;
    margin-bottom: 25px;
  }

  .border__container {
    margin-top: 80px;
    flex-wrap: wrap;
  }

  .border {
    padding: 10px 20px;
    background-color: var(--container-bg-color);
    box-shadow: rgba(0, 0, 0, 0.35) 1.95px 1.95px 2.6px;
    margin: 4px;
    cursor: pointer;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .border:hover {
    transform: scale(1.1);
  }

  .error {
    width: 100%;
    text-align: center;
    margin-top: 150px;
  }

  @media screen and (max-width: 768px) {

    .country__details,
    .middle {
      flex-direction: column;
    }

    .country__details__container {
      max-width: 100%;
    }

    .fg__container img {
      padding: 25px;
      width: 100%;
      height: 300px;
      margin-left: 0;
      margin-right: 0;
    }

    .middle {
      padding-left: 25px;
    }

    .border__container {
      flex-wrap: wrap;
    }

    .border__container b {
      width: 100%;
    }
  }

  /* .right{
    width: 100%;
  } */
</style>
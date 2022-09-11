<template>
  <button @click="goBack">Back</button>
  <LoadingCircle v-if="isLoading"/>
  <div class="country__details__container" v-else>
    <div class="country__details" v-for="detail in countryDetails" :key="detail">
      <div class="left">
        <div class="fg__container">
          <img :src=detail.flags.png alt="flag">
        </div>
      </div>
      <div class="middle">
        <div class="first">
          <div class="name__container">
            <p class="name">
              {{detail.name.common}}
            </p>
          </div>
          <div class="native__name__container">
            <p class="native__name">
              <b>Native Name: </b> {{detail.name.nativeName.this}}
            </p>
          </div>
          <div class="population__container">
            <p class="population">
              <b>Population: </b> {{detail.population.toLocaleString("en-US")}}
            </p>
          </div>
          <div class="region__container">
            <p class="region">
              <b>Region: </b> {{detail.region}}
            </p>
          </div>
          <div class="subregion__container">
            <p class="subregion">
              <b>Sub Region: </b> {{detail.subregion}}
            </p>
          </div>
          <div class="capital__container">
            <b>Capital: </b>
            <p v-for="capital in detail.capital" :key="capital">{{capital}}</p>
          </div>
        </div>
        <div class="second">
          <div class="topld">
            <p class="top_level_domain">
              <b>Top Level domains: </b> {{detail.name.common}}
            </p>
          </div>
          <div class="currency_container">
            <p class="currency">
              <b> Currencies: </b> {{detail.currencies.name}}
            </p>
          </div>
          <div class="languages__container">
            <b>Languages: </b>
            <p class="languages" v-for="language in detail.languages" :key="language">
              {{language}}
            </p>
          </div>
        </div>
        <div class="third">
          <div class="border__container">
            <b>Border Countries: </b>
            <p class="border" v-for="border in detail.borders" :key="border">{{border}}</p>
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
    mapState
  } from 'vuex';
import LoadingCircle from './LoadingCircle.vue';

  export default {
    computed: {
        ...mapState(["countryDetails", "isLoading"])
    },
    mounted() {
        const country = this.$route.params.country;
        this.getCountryDetails(country);
    },
    methods: {
        ...mapActions(["getCountryDetails"]),
        goBack() {
            router.back();
        }
    },
    components: { LoadingCircle }
}
</script>
<style scoped>
  button{
    margin-top: 80px;
    margin-left: 45px;
    padding: 10px 30px;
    background-color: hsl(209, 23%, 22%);
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  .country__details__container {
    width: 1350px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    margin-top: 80px;
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

  /* .capital__container, .border__container {
    display: flex;
    flex-wrap: wrap;
  } */
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
  b{
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
  }

  .border {
    padding: 10px 20px;
    background-color: hsl(209, 23%, 22%);
    margin: 4px;
  }

  /* .right{
    width: 100%;
  } */
</style>
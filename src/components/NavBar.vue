<template>
  <div>
    <nav>
      <p class="title" @click="goHome">Where in the world?</p>
      <div class="theme" @click="isDark = !isDark">
        <SvgIcon />
        <p v-if="isDark">Dark Mode</p>
        <p v-else>Light Mode</p>
      </div>
    </nav>

  </div>
</template>
<script>
import router from '@/router';
import SvgIcon from './SvgIcon.vue';
export default {
    data: () => ({
        isDark: false
    }),
    methods: {
        goHome() {
            router.push("/");
        }
    },
    watch: {
        isDark(value) {
            if (value) {
                this.body.classList.add("dark");
            }
            else {
                this.body.classList.remove("dark");
            }
            localStorage.setItem('theme', value);
        }
    },
    created() {
      this.isDark = JSON.parse(localStorage.getItem('theme'));
    },
    components: { SvgIcon }
}
</script>
<style scoped>
  nav{
    display: flex;
    justify-content: space-between;
    background-color: var(--container-bg-color);
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 600;
    color: var(--text-color);
    padding: 20px;
  }
  .title{
    font-size: 20px;
    margin-left: 25px;
    cursor: pointer;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .title:hover {
    transform: scale(1.05);
  }
  .theme {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 135px;
  }
  .theme p {
    font-size: 13px;
    margin-right: 30px;
  }
  .theme img {
    fill: red;
  }
  @media screen and (max-width: 768px) {
    .title{
      margin-left: 2px;
    }
    .theme p{
      margin-right: 0;
    }
  }
</style>
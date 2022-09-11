<template>
  <div>
    <nav>
      <p class="title">Where in the world?</p>
      <div class="theme" @click="isDark = !isDark">
        <p>Dark Mode</p>
      </div>
    </nav>

  </div>
</template>
<script>
export default {
  data: () => ({
    isDark: false
  }),
  watch: {
    isDark(value) {
      if (value) {
        this.body.classList.add('dark')
      } else {
        this.body.classList.remove('dark')
      }
    }
  }
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
  }
  .theme {
    cursor: pointer;
  }
  .theme p {
    font-size: 13px;
    margin-right: 30px;
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
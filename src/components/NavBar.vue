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
  .theme {
    cursor: pointer;
  }
  .theme p {
    font-size: 13px;
  }
</style>
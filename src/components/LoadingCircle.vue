<template lang="">
  <div>
    <div class="loader__container">
      <div class="lds-dual-ring"></div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }

  .loader__container {
    margin-top: 200px;
    width: 100px;
    margin-left: auto;
    margin-right: auto;
  }

  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--text-color);
    border-color: var(--text-color) transparent var(--text-color) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
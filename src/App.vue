<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>

html {
  --bg-color: hsl(0, 0%, 98%);
  --input-color: hsl(0, 0%, 52%);
  --text-color: black;
  --container-bg-color:  hsl(0, 0%, 100%);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: var(--bg-color)
}

body.dark {
  --bg-color: hsl(207, 26%, 17%);
  --text-color: white;
  --container-bg-color: hsl(209, 23%, 22%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-color);
  /* text-align: center; */
  color: var(--text-color)
}


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

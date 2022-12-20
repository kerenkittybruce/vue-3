<template>
  <nav>
    <router-link to="/">Home</router-link> 💖
    <router-link to="/products">Products</router-link> 💖
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e300c4;
  background-color:mediumorchid;
  text-align: center;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #5c00dc;
}

nav a.router-link-exact-active {
  color: #1b0d21;
}
</style>

<template>
  <div class="home">
    <Landing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '../components/Landing.vue'

export default {
  name: 'HomeView',
  components: {
    Landing
  }
}
</script>

<style>
.home{
  background-image: url(../assets/abstractbanner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>

<template>
  <div class="image">
    <img src="../assets/curly-girl.png" alt="logo" />
  </div>
  <div class="words">
    <h1>The Mad Store</h1>
    <p>Welcome to our store!</p>
    <p>We hope that you will enjoy the products that we offer .</p>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
template {
  background-color: mediumorchid;
  text-align: center;
  margin: 2rem;
  padding: 2.5rem;
  overflow: hidden;
}

.image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

h1,
p {
  background-color: #ff86ef9e;
  color: #e300c4;
}

h1 {
  font-weight: 600;
  font-size: 4.25rem;
  margin-top: 0;
  margin-bottom: 0;
}

p {
  font-weight: 200;
  font-size: 2.125rem;
}
</style>

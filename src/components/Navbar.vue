<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/NewTodo">New-Todo</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  background: skyblue;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
}

a {
  font-family: cursive;
  font-size: 1.2rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
}

@media only screen and (min-width: 1200px) {
  .nav {
    justify-content: center;
  }

  a {
    margin-right: 3rem;
  }
}
</style>

<template>
  <div class="about">
    <h1>{{ header }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "This is about page",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel ipsa natus velit. Recusandae facilis in ea deserunt obcaecati explicabo eum delectus nesciunt reprehenderit, a, totam quo. Odio, minima explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur cumque veniam minima nostrum nesciunt sapiente iste maxime labore quidem, consequatur ipsam laudantium, similique inventore facilis id? Qui, sint odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa vitae voluptatum excepturi, ad exercitationem sed! Maiores, temporibus? Fugiat dolor natus dolorum mollitia nobis excepturi ex placeat quis suscipit sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, fugit facere consequatur, adipisci impedit ipsa magni deserunt accusamus nulla labore voluptate iste nemo maiores, laboriosam harum molestias maxime culpa eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel ipsa natus velit. Recusandae facilis in ea deserunt obcaecati explicabo eum delectus nesciunt reprehenderit, a, totam quo. Odio, minima explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur cumque veniam minima nostrum nesciunt sapiente iste maxime labore quidem, consequatur ipsam laudantium, similique inventore facilis id? Qui, sint odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa vitae voluptatum excepturi, ad exercitationem sed! Maiores, temporibus? Fugiat dolor natus dolorum mollitia nobis excepturi ex placeat quis suscipit sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, fugit facere consequatur, adipisci impedit ipsa magni deserunt accusamus nulla labore voluptate iste nemo maiores, laboriosam harum molestias maxime culpa eaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel ipsa natus velit. Recusandae facilis in ea deserunt obcaecati explicabo eum delectus nesciunt reprehenderit, a, totam quo. Odio, minima explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur cumque veniam minima nostrum nesciunt sapiente iste maxime labore quidem, consequatur ipsam laudantium, similique inventore facilis id? Qui, sint odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa vitae voluptatum excepturi, ad exercitationem sed! Maiores, temporibus? Fugiat dolor natus dolorum mollitia nobis excepturi ex placeat quis suscipit sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, fugit facere consequatur, adipisci impedit ipsa magni deserunt accusamus nulla labore voluptate iste nemo maiores, laboriosam harum molestias maxime culpa eaque?",
    };
  },
};
</script>

<style scoped>
.about {
  border: 2px solid black;
  background: rgb(135, 206, 235, 0.7);
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 10px;
}

@media only screen and (min-width: 768px) {
.about {
  font-size: 1.3rem;
}
}
</style>

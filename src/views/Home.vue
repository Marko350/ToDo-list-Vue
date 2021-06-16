<template>
  <div class="home">
    <h1>To-Do List!</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoList,
  },
};
</script>

<style scoped>
.home {
  width: 90%;
  max-width: 700px;
  margin: 2rem auto;
}

.home h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

@media only screen and (min-width: 768px) {
  .home {
    width: 70%;
  }

  .home h1 {
    font-size: 2.5rem
  }
}
</style>

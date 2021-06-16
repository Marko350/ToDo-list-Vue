<template>
  <div>
    <Todos v-for="(todo, index) in todos" :key="index" :todo="todo" />
    <form action="">
      <div>

      </div>
    </form>
  </div>
</template>

<script>
import Todos from './Todo.vue'
export default {
    components: {
        Todos
    },

    computed: {
      todos(){
        return this.$store.state.todos
      },
    }
}
</script>

<style>

</style>
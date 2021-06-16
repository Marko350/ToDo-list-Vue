<template>
  <div class="todo">
    <i class="fas fa-times-circle" @click="removeTodo"></i>
    <div class="task">
      <p :class="{ taskDone: todo.done }">{{ todo.task }}</p>
    </div>
    <input type="checkbox" id="scales" name="scales" v-model="todo.done" />

    <div class="info">
      <p class="name" :class="{ taskDone: todo.done }">{{ todo.name }}</p>
      <p :class="{ taskDone: todo.done }">{{ todo.time }}</p>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  data() {
    return {};
  },

  methods: {
    removeTodo() {
      this.$store.commit("removeTodo", this.todo);
    },
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 2rem;
  background: rgb(135, 206, 235, 0.7);
  position: relative;
}

.task {
  display: flex;
  padding: 1rem;
  justify-content: center;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.name {
  text-overflow: ellipsis;
  width: 95px;
  overflow: hidden;
}

.todo i {
  cursor: pointer;
  color: #c6866e;
  margin: 10px;
  font-size: 1.2rem;
  border-radius: 100%;
  font-weight: bold;
  position: absolute;
  top: 0px;
  left: 0;
  cursor: pointer;
}

.todo input {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}

.taskDone {
  text-decoration: line-through;
}

input {
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
.todo{
  font-size: 1.5rem;
}

.name {
  width: 250px;
}

.todo i {
  font-size: 1.5rem;
  left: 5px;
}

.todo input {
  width: 20px;
  height: 20px;
  right: 5px;
  top: 2px;
}
}
</style>

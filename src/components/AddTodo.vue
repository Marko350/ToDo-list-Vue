<template>
  <div class="container">
    <form>
      <div class="form-container" @submit.prevent="createTodo">
        <h2>Add New Todo</h2>
        <div class="author wrapper">
          <label for="name" class="text">Name:</label>
          <input
            placeholder="Your name..."
            type="text"
            id="name"
            name="name"
            v-model="name"
          />
        </div>
        <div class="desc wrapper">
          <label for="task" class="text">Task:</label>
          <textarea
            placeholder="Write your task..."
            name="task"
            id="task"
            cols="25"
            rows="5"
            v-model="task"
          ></textarea>
        </div>
        <input type="submit" class="btn" @click="createTodo" value="Add" />
      </div>
    </form>
  </div>
</template>

<script>
let now = new Date();
let timeStamp = now.toLocaleString();
export default {
  data() {
    return {
      name: "",
      task: "",
      time: timeStamp,
      done: false,
    };
  },

  methods: {
    createTodo() {
      let newTodo = {
        name: this.name,
        task: this.task,
        time: this.time,
        done: false,
      };
      this.$store.commit("addNewTodo", newTodo);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.form-container {
  border: 2px solid black;
  border-radius: 10px;
  display: inline-block;
  background: rgb(135, 206, 235, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.desc,
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.btn {
  width: 100px;
  background: rgb(216, 185, 158);
  border-radius: 5px;
  cursor: pointer;
  padding: 0.3rem;
  font-weight: bold;
  margin-top: 1rem;
}

.container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.text {
  padding-right: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

@media only screen and (min-width: 768px) {
.form-container {
  font-size: 1.5rem;
  padding: 3rem;
}

h2 {
  margin-bottom: 2rem;
}

label {
  margin-bottom: 0.5rem;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black
}

textarea {
  border: 1px solid black;
  border-radius: 5px;
}

.btn {
  margin-top: 2rem;
}
}
</style>

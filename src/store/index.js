import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const dateNow = new Date(Date.now())

let svDate = dateNow.toLocaleString('de');

export default new Vuex.Store({
  state: {
    todos: [
      { name: "Marko", task: "Buy milk", time: "10.6.2021, 15:20:13", done: false },
      { name: "Natasha", task: "Book a flight", time: "5.6.2021, 10:32:33", done: false },
      {
        name: "Matias",
        task: "Clean the kitchen",
        time: "26.5.2021, 19:10:20",
        done: true,
      },
      { name: "Eva", task: "Make a dinner", time: "10.5.2021 08:38:10", done: true },
    ],
  },
  mutations: {
    removeTodo(state, todoToRemove) {
      state.todos = state.todos.filter((todo) => todoToRemove !== todo);
    },

    addNewTodo(state, addTodo) {
      let timeStamp = svDate;
      addTodo.time = timeStamp;
      state.todos.unshift(addTodo);
    },
  },
});

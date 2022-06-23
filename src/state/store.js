import { createStore } from "vuex";
import layout from "./modules/layout";
import todo from "./modules/todo";

// eslint-disable-next-line no-unused-vars
const store = createStore({
  modules: {
    layout,
    todo,
  },
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: import.meta.env.NODE_ENV !== "production",
});

export default store;

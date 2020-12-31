import { createStore } from "vuex";

const store = createStore({
  state() {
    return { users: [], isLoggedIn: false };
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
      console.log(state.users);
    },
    setIsLoggedIn(state, payload) {
      state.isLoggedIn = payload;
      console.log(state.isLoggedIn);
    },
  },
});

export default store;

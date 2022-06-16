import UserService from '@/services/UserService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    username: "",
    balanceAmount: 0,
    transacciones: []
  },
  getters: {},
  mutations: {
    newUser(state, username) {
      state.username = username;
    },
    cargarTransacciones(state) {
        UserService.getTransacciones(state.username)
        .then((response) => {
          state.transacciones = response.data;
          console.log(state.transacciones)
          console.log(state.username)
        })
        .catch(() => {
          alert("Error");
        });
    }
  },
  actions: {},
  modules: {},
});

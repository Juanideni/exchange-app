import UserService from '@/services/UserService';
import { createStore } from 'vuex'

export default createStore({
  state: {
    username: "",
    balanceAmount: 0,
    transacciones: [],
    cryptos: UserService.cryptos,
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
    },
    newSale(state, sale){
      debugger;
      var money = parseFloat(sale.money)
      var amount = parseFloat(sale.crypto_amount);
     state.cryptos.find(x => x.symbol === sale.crypto_code).sales += money;
     state.cryptos.find(x => x.symbol === sale.crypto_code).amount -= amount;
     
    },
    newPurchase(state, sale){
      debugger;
      var money = parseFloat(sale.money)
      var amount = parseFloat(sale.crypto_amount);
     state.cryptos.find(x => x.symbol === sale.crypto_code).purchases += money;
     state.cryptos.find(x => x.symbol === sale.crypto_code).amount += amount;
     
    }
  },
  actions: {},
  modules: {},
});

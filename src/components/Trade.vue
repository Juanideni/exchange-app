<template>
<div>
  <h1>It's trading time! </h1>
</div>
  <div class="trade">
    <div>
      <select
        class="form-select"
        aria-label=".form-select-sm example"
        @change="onChangeBuy($event)"
      >
      <option value = "" selected>Choose one to buy</option>
        <option v-for="crypto in cryptos" :key="crypto.id">
          {{ crypto.symbol }}
        </option>
      </select>
      <br />
      <input class="form-control" type="number" v-model="amountToBuy" />
      <br />
      <button class="btn btn-warning" v-on:click="newBuy()">Buy</button>
    </div>
    <div class="card text-bg-light" style="width: 20rem; height: 11rem;">
      <div class="card-header">{{ action }} </div>
      <div class="card-body">
        <p class="card-text">{{ keyWord }}</p>
        <h5 class="card-title" v-for="crypto in cryptos" :key="crypto.id">
          {{
            coinSelectedToBuy === crypto.symbol && action === "Buy"
              ? amountToBuy === "" || amountToBuy === null ? " 1 "+coinSelectedToBuy+" = AR $ "+buyPrice : amountToBuy+" "+coinSelectedToBuy+" = AR $ "+(buyPrice * amountToBuy).toLocaleString()
              : action === "Sell" && coinSelectedToSell === crypto.symbol
              ? amountToSell === "" || amountToSell === null ? " 1 "+coinSelectedToSell+" = AR $ "+salePrice : amountToSell+" "+coinSelectedToSell+" = AR $ "+(salePrice * amountToSell).toLocaleString()
              : ""
          }}
        </h5>
      </div>
    </div>
    <div>
      <select
        class="form-select"
        aria-label=".form-select-sm example"
        @change="onChangeSell($event)"
      >
      <option value = "" selected>Choose one to sell</option>
        <option v-for="crypto in cryptos" :key="crypto.id">
          {{ crypto.symbol }}
        </option>
      </select>
      <br />
      <input class="form-control" type="number" v-model="amountToSell" />
      <br />
      <button class="btn btn-warning" v-on:click="newSell()">Sell</button>
    </div>
  </div>
  <hr />
  
</template>

<script>

import store from "@/store";
import axios from "axios";
import UserService from "@/services/UserService";



export default {
  name: "Trade",
  data() {
    return {
      cryptos: UserService.cryptos,
      investmentHistory: [],
      amountToBuy: null,
      amountToSell: null,
      coinSelectedToBuy: null,
      coinSelectedToSell: null,
      nameCoin: null,
      buyPrice: null,
      salePrice: null,
      action: "Price card",
      keyWord: "Price in AR $",

      purchase: {
        user_id: "",
        action: "",
        crypto_code: "",
        crypto_amount: "",
        money: "",
        datetime: "",
      },

      sell: {
        user_id: "",
        action: "",
        crypto_code: "",
        crypto_amount: "",
        money: "",
        datetime: "",
      }
    };
  },
  
  methods: {
    onChangeBuy(event) {
      if (event.target.value !== "") {
        this.coinSelectedToBuy = event.target.value;
        UserService.getCryptoData(this.coinSelectedToBuy)
        .then((response) => {
            this.buyPrice = response.data.totalAsk;
        })
        .catch((e) => {
            console.log(e);
        });
        this.action = "Buy";
        this.keyWord = "Purchase price in AR $";
      } else {
        this.action = "Price card";
        this.keyWord = "Price in AR $";
      }
    },
    onChangeSell(event) {
      if (event.target.value !== "") {
        this.coinSelectedToSell = event.target.value;
          UserService.getCryptoData(this.coinSelectedToSell)
          .then((response) => {
            this.salePrice = response.data.totalBid;
          })
          .catch((e) => {
            console.log(e);
          });
        this.action = "Sell";
        this.keyWord = "Sale price in AR $";
      } else if (event.target.value === "") {
        this.action = "Price card";
        this.keyWord = "Price in AR $";
      }
    },

    newBuy(){
      this.purchase.user_id = this.$store.state.username;
      this.purchase.crypto_code = this.coinSelectedToBuy;
      this.purchase.crypto_amount = this.amountToBuy.toFixed(2)
      this.purchase.money = (this.buyPrice * this.amountToBuy).toFixed(2).toString()
      this.purchase.action = "purchase";
      this.purchase.datetime =  Date.now();

      
      UserService.newTrade(this.purchase)
      
      this.$store.commit("newPurchase", this.purchase)
      this.$router.push("/Current-status")
    
      alert("Success")
      
    },

    newSell(){
      this.sell.user_id = this.$store.state.username;
      this.sell.crypto_code = this.coinSelectedToSell;
      this.sell.crypto_amount = this.amountToSell.toFixed(2)
      this.sell.money = (this.salePrice * this.amountToSell).toFixed(2).toString()
      this.sell.action = "sale";
      this.sell.datetime =  Date.now();
   
      UserService.newTrade(this.sell)
     
      this.$store.commit("newSale", this.sell)
      this.$router.push("/Current-status")

      alert("Success")
    },

   
  },
 
};
</script>
<style scoped>
.trade {
  display: flex;
  justify-content: space-evenly;
  margin: 10% 0 5% 0;
}
</style>

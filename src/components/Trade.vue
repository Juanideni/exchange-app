<template>
<div>
  <h1>Hello {{username}}!</h1>
  <h4>Your balance amount: {{balance}}</h4>
</div>
  <div class="trade">
    <div>
      <select
        class="form-select"
        aria-label=".form-select-sm example"
        @change="onChangeBuy($event)"
      >
      <option>--</option>
        <option v-for="crypto in cryptos" :key="crypto.id">
          {{ crypto.symbol }}
        </option>
      </select>
      <br />
      <input class="form-control" type="number" v-model="amountToBuy" />
      <br />
      <button class="btn btn-warning">Buy</button>
    </div>
    <div class="card text-bg-light mb-3" style="max-width: 18rem">
      <div class="card-header">{{ action }} </div>
      <div class="card-body">
        <p class="card-text">{{ keyWord }}</p>
        <h5 class="card-title" v-for="crypto in cryptos" :key="crypto.id">
          {{
            coinSelectedToBuy === crypto.symbol && action === "Buy"
              ? amountToBuy === "" || amountToBuy === null ? " 1 "+coinSelectedToBuy+" = AR$ "+buyPrice : amountToBuy+" "+coinSelectedToBuy+" = AR$ "+(buyPrice * amountToBuy)
              : action === "Sell" && coinSelectedToSell === crypto.symbol
              ? amountToSell === "" || amountToSell === null ? " 1 "+coinSelectedToSell+" = AR$ "+salePrice : amountToSell+" "+coinSelectedToSell+" = AR$ "+(salePrice * amountToSell)
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
      ><option>--</option>
        <option v-for="crypto in cryptos" :key="crypto.id">
          {{ crypto.symbol }}
        </option>
      </select>
      <br />
      <input class="form-control" type="number" v-model="amountToSell" />
      <br />
      <button class="btn btn-warning">Sell</button>
    </div>
  </div>
  <hr />
  <div>
    <h1>Trade´s history</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Action</th>
          <th scope="col">Currency</th>
          <th scope="col">Amount</th>
          <th scope="col">Money (in $ARS)</th>
          <th scope="col">Date</th>
          <th scope="col">Buttons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Purchase</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Sale</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Purchase</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Trade",
  data() {
    return {
      cryptos: [
        { id: 0, name: "Bitcoin", symbol: "BTC" },
        { id: 1, name: "Ethereum", symbol: "ETH" },
        { id: 2, name: "Theter", symbol: "USDT" },
        { id: 3, name: "USD Coin", symbol: "USDC" },
        { id: 4, name: "Dai", symbol: "DAI" },
      ],
      username: this.$store.state.username,
      balance: this.$store.state.balanceAmount,
      amountToBuy: null,
      amountToSell: null,
      coinSelectedToBuy: null,
      coinSelectedToSell: null,
      nameCoin: null,
      buyPrice: null,
      salePrice: null,
      action: null,
      keyWord: null,
    };
  },
  mounted() {},
  methods: {
    onChangeBuy(event) {
      if (event.target.value !== "--") {
        this.coinSelectedToBuy = event.target.value;
        axios
          .get(
            "https://criptoya.com/api/buenbit/" +
              this.coinSelectedToBuy +
              "/ars/0.5"
          )
          .then((response) => {
            this.buyPrice = response.data.totalAsk;
          })
          .catch((e) => {
            console.log(e);
          });
        this.action = "Buy";
        this.keyWord = "Purchase price in AR$";
      } else if (event.target.value === "--") {
        this.action = "Price card";
        this.keyWord = "Price in AR$";
      }
    },
    onChangeSell(event) {
      if (event.target.value !== "--") {
        this.coinSelectedToSell = event.target.value;
        axios
          .get(
            "https://criptoya.com/api/buenbit/" +
              this.coinSelectedToSell +
              "/ars/0.5"
          )
          .then((response) => {
            this.salePrice = response.data.totalBid;
          })
          .catch((e) => {
            console.log(e);
          });
        this.action = "Sell";
        this.keyWord = "Sale price in AR$";
      } else if (event.target.value === "--") {
        this.action = "Price card";
        this.keyWord = "Price in AR$";
      }
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

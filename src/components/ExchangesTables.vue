<template>
<div class="tables">
  <table class="table table-bordered table-dark  border-light">
    <thead>
          <tr>
            <th scope="col">Exchanges Bitcoin</th>
      <th scope="col">Buy Price</th>
      <th scope="col">Sale Price</th>
    </tr>
  </thead>
  <tbody class="table-group-divider " v-for="exchangeBtc of exchangesBtc" :key="exchangeBtc.id">
    <tr>
  
      <td>{{exchangeBtc.exchangeBtc.charAt(0).toUpperCase() + exchangeBtc.exchangeBtc.slice(1)}}</td>
      <td>AR$ {{exchangeBtc.ask}}</td>
      <td>AR$ {{exchangeBtc.bid}}</td>
    </tr>
  </tbody>
</table>
<table class="table table-bordered table-dark  border-light">
        <thead>
          <tr>
            <th scope="col">Exchanges Ethereum</th>
      <th scope="col">Buy Price</th>
      <th scope="col">Sale Price</th>
    </tr>
  </thead>
  <tbody class="table-group-divider " v-for="exchangeEth of exchangesEth" :key="exchangeEth.id">
    <tr>
  
      <td>{{exchangeEth.exchangeEth.charAt(0).toUpperCase() + exchangeEth.exchangeEth.slice(1)}}</td>
      <td>AR$ {{exchangeEth.ask}}</td>
      <td>AR$ {{exchangeEth.bid}}</td>
    </tr>
  </tbody>
</table>
</div>
<div class="tables">
<table class="table table-bordered table-dark  border-light">
        <thead>
          <tr>
            <th scope="col">Exchanges DAI</th>
      <th scope="col">Buy Price</th>
      <th scope="col">Sale Price</th>
    </tr>
  </thead>
  <tbody class="table-group-divider " v-for="exchangeDai of exchangesDai" :key="exchangeDai.id">
    <tr>
  
      <td>{{exchangeDai.exchangeDai.charAt(0).toUpperCase() + exchangeDai.exchangeDai.slice(1)}}</td>
      <td>AR$ {{exchangeDai.ask}}</td>
      <td>AR$ {{exchangeDai.bid}}</td>
    </tr>
  </tbody>
</table>
<table class="table table-bordered table-dark  border-light">
        <thead>
          <tr>
            <th scope="col">Exchanges Tether (USDT)</th>
      <th scope="col">Buy Price</th>
      <th scope="col">Sale Price</th>
    </tr>
  </thead>
  <tbody class="table-group-divider " v-for="exchangeUsdt of exchangesUsdt" :key="exchangeUsdt.id">
    <tr>
  
      <td>{{exchangeUsdt.exchangeUsdt.charAt(0).toUpperCase() + exchangeUsdt.exchangeUsdt.slice(1)}}</td>
      <td>AR$ {{exchangeUsdt.ask}}</td>
      <td>AR$ {{exchangeUsdt.bid}}</td>
    </tr>
  </tbody>
</table>
          </div>
  
</template>
<script>
import axios from "axios"

export default {
    name: "BtcService",
    data() {
        return {
          exchangesBtc: null,
          exchangesEth: null,
          exchangesDai: null,
          exchangesUsdt: null,
        }
    },
  async mounted() {
      const optionsBtc = {
        method: 'GET',
        url: 'https://criptoya.com/api/btc/ars/0.1',
      };
      
      axios.request(optionsBtc).then(response => {
        this.exchangesBtc = Object.keys(response.data).map((exchangeBtc) => (
              {
                exchangeBtc,
                bid: response.data[exchangeBtc].totalBid,
                ask: response.data[exchangeBtc].totalAsk,
              }));
      }).catch(function (error) {
        console.error(error);
      });

      const optionsEth = {
        method: 'GET',
        url: 'https://criptoya.com/api/Eth/ars/0.1',
      };
      
      axios.request(optionsEth).then(response => {
        this.exchangesEth = Object.keys(response.data).map((exchangeEth) => (
              {
                exchangeEth,
                bid: response.data[exchangeEth].totalBid,
                ask: response.data[exchangeEth].totalAsk,
              }));
      }).catch(function (error) {
        console.error(error);
      });
      const optionsDai = {
        method: 'GET',
        url: 'https://criptoya.com/api/Dai/ars/0.1',
      };
      
      axios.request(optionsDai).then(response => {
        this.exchangesDai = Object.keys(response.data).map((exchangeDai) => (
              {
                exchangeDai,
                bid: response.data[exchangeDai].totalBid,
                ask: response.data[exchangeDai].totalAsk,
              }));
      }).catch(function (error) {
        console.error(error);
      });

      const optionsUsdt = {
        method: 'GET',
        url: 'https://criptoya.com/api/Usdt/ars/0.1',
      };
      
      axios.request(optionsUsdt).then(response => {
        this.exchangesUsdt = Object.keys(response.data).map((exchangeUsdt) => (
              {
                exchangeUsdt,
                bid: response.data[exchangeUsdt].totalBid,
                ask: response.data[exchangeUsdt].totalAsk,
              }));
      }).catch(function (error) {
        console.error(error);
      });
    },
    
    
}



</script>
<style scoped>
.title{
  margin: 5% 0 0 0
}
.tables {
  display: flex;
  justify-content: space-evenly;
}
.table{
  max-width: 600px;
  padding: 15%;
}
</style>

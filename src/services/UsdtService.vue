<template>
      <table class="table table-bordered table-dark  border-light">
        <thead>
          <tr>
            <th scope="col">Exchanges Usdt</th>
      <th scope="col">Buy Price</th>
      <th scope="col">Sale Price</th>
    </tr>
  </thead>
  <tbody class="table-group-divider " v-for="exchangeUsdt of exchangesUsdt" :key="exchangeUsdt.id">
    <tr>
  
      <td>{{exchangeUsdt.exchangeUsdt.charAt(0).toUpperCase() + exchangeUsdt.exchangeUsdt.slice(1)}}</td>
      <td>$ARS {{exchangeUsdt.ask}}</td>
      <td>$ARS {{exchangeUsdt.bid}}</td>
    </tr>
  </tbody>
</table>

  
</template>
<script>
import axios from "axios"

export default {
    name: "UsdtService",
    data() {
        return {
          exchangesUsdt: null,
        }
    },
  async mounted() {
      const optionsUsdt = {
        method: 'GET',
        url: 'https://criptoya.com/api/usdt/ars/0.1',
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

.table{
  max-width: 600px;
}
</style>
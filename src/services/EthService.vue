<template>
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

  
</template>
<script>
import axios from "axios"

export default {
    name: "EthService",
    data() {
        return {
          exchangesEth: null,
        }
    },
  async mounted() {
      const optionsEth = {
        method: 'GET',
        url: 'https://criptoya.com/api/eth/ars/0.1',
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

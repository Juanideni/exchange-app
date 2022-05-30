<template>
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
      <td>$ARS {{exchangeBtc.ask}}</td>
      <td>$ARS {{exchangeBtc.bid}}</td>
    </tr>
  </tbody>
</table>

  
</template>
<script>
import axios from "axios"

export default {
    name: "BtcService",
    data() {
        return {
          exchangesBtc: null,
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
    },
    
    
}



</script>
<style scoped>
.title{
  margin: 5% 0 0 0
}

.table{
  max-width: 600px;
  padding: 15%;
}
</style>

<template>
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

  
</template>
<script>
import axios from "axios"

export default {
    name: "DaiService",
    data() {
        return {
          exchangesDai: null,
        }
    },
  async mounted() {
      const optionsDai = {
        method: 'GET',
        url: 'https://criptoya.com/api/dai/ars/0.1',
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
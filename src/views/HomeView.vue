<template>
  <div class="home">

    <Navbar />
    <Coins/>
    <h1 class="title">Exchange´s prices</h1>
      <ExchangesTables />
    <Foot />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import ExchangesTables from "@/components/ExchangesTables.vue";
import Foot from "@/components/Foot.vue";
import Coins from "@/components/Coins.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    ExchangesTables,
    Foot,
    Coins
},
};
</script>
<style scoped>

</style>

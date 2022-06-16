<template>
  <div class="home">

    <Navbar />
    <CoinsDataService/>
    <h1 class="title">Exchange´s prices</h1>
    <div class="dashboard ">
      <BtcService />
      <EthService />
    </div>
    <div class="dashboard">
      <DaiService />
      <UsdtService />
    </div>
    <Foot />
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import BtcService from "@/services/BtcService.vue";
import EthService from "@/services/EthService.vue";
import DaiService from "@/services/DaiService.vue";
import Foot from "@/components/Foot.vue";
import UsdtService from "../services/UsdtService.vue";
import CoinsDataService from "@/services/CoinsDataService.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    BtcService,
    EthService,
    Foot,
    DaiService,
    UsdtService,
    CoinsDataService
},
};
</script>
<style scoped>
.dashboard {
  display: flex;
  justify-content: space-evenly;
}
</style>

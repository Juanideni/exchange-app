<template>
    <div class="home">
      <Navbar/>
      <TradeHistory/>
      <Foot/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import TradeHistory from '@/components/TradeHistory.vue'
  import Navbar from '@/components/Navbar.vue'
  import Foot from '@/components/Foot.vue'
  
  export default {
    name: 'TradeHistoryView',
    components: {
      TradeHistory,
      Navbar,
      Foot,
  }
  }
  </script>
  
   
  
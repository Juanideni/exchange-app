<template>
    <div class="home">
      <Navbar/>
      <TradeHistory/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import TradeHistory from '@/components/TradeHistory.vue'
  import Navbar from '@/components/Navbar.vue'
 
  
  export default {
    name: 'TradeHistoryView',
    components: {
      TradeHistory,
      Navbar,
  }
  }
  </script>
  
   
  
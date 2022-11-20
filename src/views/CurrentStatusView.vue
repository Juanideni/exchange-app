
<template>
    <div class="home">
      <Navbar/>
      <CurrentStatus/>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CurrentStatus from '@/components/CurrentStatus.vue'
  import Navbar from '@/components/Navbar.vue'
 
  
  export default {
    name: 'CurrentStatusView',
    components: {
      CurrentStatus,
      Navbar,
     
  }
  }
  </script>
  
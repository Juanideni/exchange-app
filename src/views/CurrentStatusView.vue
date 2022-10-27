
<template>
    <div class="home">
      <Navbar/>
      <CurrentStatus/>
      <Foot/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CurrentStatus from '@/components/CurrentStatus.vue'
  import Navbar from '@/components/Navbar.vue'
  import Foot from '@/components/Foot.vue'
  
  export default {
    name: 'CurrentStatusView',
    components: {
      CurrentStatus,
      Navbar,
      Foot,
  }
  }
  </script>
  
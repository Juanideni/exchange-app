<template>
  <div class="home">
    <Navbar/>
    <Trade/>
  </div>
</template>

<script>
// @ is an alias to /src
import Trade from '@/components/Trade.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'TradeView',
  components: {
    Trade,
    Navbar,
}
}
</script>

 

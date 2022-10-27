<template>
  <div class="home">
    <Navbar/>
    <Trade/>
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Trade from '@/components/Trade.vue'
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'TradeView',
  components: {
    Trade,
    Navbar,
    Foot,
}
}
</script>

 

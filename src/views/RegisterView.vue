<template>
  <div class="home">
    <Navbar/>
    <Register/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Login.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'RegisterView',
  components: {
    Register,
    Navbar
  }
}
</script>

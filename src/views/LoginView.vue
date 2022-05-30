<template>
  <div class="home">
    <Navbar/>
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'LoginView',
  components: {
    Login,
    Navbar
}
}
</script>
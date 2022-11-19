<template>
 <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/home" class="nav-link px-2 text-white">Home</router-link></li>
          <li><router-link to="/trade" class="nav-link px-2 text-white">Trading</router-link></li>
          <li><router-link to="/trade-history" class="nav-link px-2 text-white">Movements</router-link></li>
          <li><router-link to="/current-status" class="nav-link px-2 text-white">Current Status</router-link></li>
        </ul>

        <div class="text-end">
          <router-link type="button" to="/" class="btn btn-warning" v-if="this.$store.state.username === ''">Login</router-link>
          <p class="text-dark btn btn-warning" v-else>{{this.$store.state.username}}</p>
        
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  
};
</script>

<style scoped>

</style>

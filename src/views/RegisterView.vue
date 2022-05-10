<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Register msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'

export default {
  name: 'RegisterView',
  components: {
    Register
  }
}
</script>

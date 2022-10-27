<template>
 <div class="register">
   <h2>Enter a nickname or your name as Username to start</h2>
   <div class="form-register m-auto mb-3">
     <form v-on:submit.prevent="createUser">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
        <input type="text"  class="form-control mb-3" id="username" name="username" v-model="username" placeholder="Enter your username">
      <label for="floatingInput">Username</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Register me!</button>
  </form>
</div>
</div>

</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
    }
  },
  methods: {
    createUser: function() {
      if (this.username === "") {
      console.log("Error, couldn´t be empty")
      }
      else if (this.username.length > 15) {
      console.log("Username mustn´t have more than 15 characters")
      }
      else {
        this.$store.commit("newUser", this.username)
        this.$store.commit("cargarTransacciones")
        this.$router.push("/")
     }
    }
  },
  
}
</script>

<style scoped>

.register{
    margin: 10% 0 0 0;
}
.form-register {
  max-width: 330px;
  padding: 15px;
}

.form-register .form-floating:focus-within {
  z-index: 2;
}

.form-register input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-register input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}



</style>
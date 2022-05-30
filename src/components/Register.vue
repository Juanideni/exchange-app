<template>

  <div class="forms">
    <div class="form-signin">
      <form>
        <div class="text">
          <h3>If you are a newbie, you must register :D</h3>
      <h5>Please, enter an email and a password to start</h5>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
  </div>
  </div>


</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

.forms{
  display: flex;
  justify-content: space-evenly;
  margin: 10% 0 0 0 ;
}
.text{
  text-align: justify;
  margin: 1% 0 5% 0;
}
.form-signin, .form-login {
  width: 100%;
  max-width: 550px;
  padding: 15px;
}

.form-signin .form-floating:focus-within, .form-login .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"], .form-login input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"], .form-login input[type="password"] {
  margin-bottom: 15px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
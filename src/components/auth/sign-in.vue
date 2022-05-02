<template>
  <div class="signUp">
    <div class="signUp__container">
      <div class="signUp__container__header">
        <h1 class="signUp__container__heading">Sign-In</h1>
      </div>
      <div class="signUp__container__body">
        <input class="signUp__container__body__input" placeholder="Username" type="text" v-model="username">
        <input class="signUp__container__body__input" placeholder="Password" type="password" v-model="password">
      </div>
      <div class="signUp__container__footer">
        <button class="signUp__container__footer__btn btn-success" type="button">Sign In</button>
        <router-link @click="redirectTo" class="signUp__container__footer__signIn" to="/auth/sign-up">Create New Account</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sign-in",
  data(){
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    redirectTo() {
      this.handleFormType = !this.handleFormType;
    }
  }
}
</script>

<style lang="scss" scoped>

$lightBlue: #49a69e;
$darkBlue: #2e948c;
$white: #ffffff;

.btn-success {
  font-size: 20px;
  border: none;
  color: #ffffff;
  background-color: $lightBlue;
  border-radius: 10px;
  text-decoration: none;
  transition: all .2s ease;
  &:hover {
    cursor: pointer;
    box-shadow: #2c3e50;
  }
  &:active{
    background-color: $darkBlue;
  }
}

.signUp {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #e8e8e8;
  &__container {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    width: 400px;
    background-color: #c4d0ce;
    border-radius: 25px;
    &__header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      background-color: $lightBlue;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
    }
    &__heading{
      color: $white;
    }
    &__body {
      display: flex;
      flex-direction: column;
      height: 80%;
      padding: 30px;
      gap: 1.5rem;
      &__input {
        padding: 0 20px 0 20px;
        line-height: 40px;
        border: none;
        outline: none;
        border-radius: 10px;
        &:focus {
          outline: 2px solid $lightBlue;
        }
        &::placeholder {
          font-family: sans-serif;
          font-size: 1.2em;
        }
      }
    }
    &__footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      height: 50%;
      &__btn {
        line-height: 40px;
        padding: 0 30px 0 30px;
      }
      &__signIn{
        padding-bottom: 20px;
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
}

</style>
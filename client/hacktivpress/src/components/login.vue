<template>
  <div>
    <div class="ui container">
      <h1>LOGIN</h1>
      <form class="ui form">
        <div class="field">
          <label>username</label>
          <input type="text" placeholder="username" v-model="formlogin.username">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="password" v-model="formlogin.password">
        </div>
        <button @click="signin()" class="ui button" type="submit">Submit</button>
      </form>
    </div>
    <br>
    <div class="ui container">
      <h1>SIGNUP</h1>
      <form class="ui form">
        <div class="field">
          <label>Nama</label>
          <input type="text" placeholder="name" v-model="formregister.name">
        </div>
        <div class="field">
          <label>Username</label>
          <input type="text" placeholder="username" v-model="formregister.username">
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="password" v-model="formregister.password">
        </div>
        <button @click="signup()" class="ui button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formlogin: {
        username: '',
        password: ''
      },
      login: this.$store.state.login,
      formregister: {
        name: '',
        username: '',
        password: ''
      },
      register: this.$store.state.register
    }
  },
  methods: {
    ...mapActions([
      'getLogin',
      'getRegister'
    ]),
    signin () {
      this.getLogin(this.formlogin)
    },
    signup () {
      this.getRegister(this.formregister)
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="ui container">
    <h1>LOGIN</h1>
    <form class="ui form">
      <div class="field">
        <label>username</label>
        <input type="text" placeholder="username">
      </div>
      <div class="field">
        <label>Password</label>
        <input type="password" placeholder="password">
      </div>
      <button @click="" class="ui button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formlogin: {
        username: ''
        password: ''
      },
      login: this.$store.state.login
    }
  }
  methods: {

  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="main">
    <form class="Login">
      <h1>Login</h1>
      <input type="text" class="username" placeholder="username" v-model="username">
      <input type="password" class="password" placeholder="password" v-model="password">
      <input type="submit" value="Login" @click.prevent="loginUser()">
    </form>
    <form class="CreateUser">
      <h1>Create a new user</h1>
      <input type="text" class="username" placeholder="username" v-model="createUserUsername">
      <input type="password" class="password" placeholder="password" v-model="createUserPassword">
      <input type="submit" value="Create user" @click.prevent="createUser()">
    </form>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      username: '',
      password: '',
      createUserUsername: '',
      createUserPassword: ''
    }
  },

  // TODO : will need to figure out salting here

  methods: {
    loginUser: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('loginAdminUser', {username: username, password: password})
    },
    createUser: function () {
      let username = this.createUserUsername
      let password = this.createUserPassword
      this.$store.dispatch('createNewUser', {username: username, password: password})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

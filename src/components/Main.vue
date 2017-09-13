<template>
  <div class="main">
    <!-- <form class="Login">
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
    </form> -->

    <h1>Upcoming Events</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h3>First Generation <small>Latest year here</small></h3>
      </div>
      <div class="col-md-6 col-sm-12">
        <h3>Next Generation <small>Latest year here</small></h3>
      </div>
    </div>
    
    <h4>Bar Sports Triathlon Concepts</h4>
    <ul>
      <li>The Bar Sports Triathlon consists of 3 sporting events hand selected to compliment the alcohol consumption naturally associated with each</li>
      <li>The 3 sports are Bowling, Pool, and Darts</li>
      <li>Each sport consists of 3 games per event</li>
      <li>Each game is scored separately and the points are totaled from all games to determine an overall winner</li>
      <li>Each game is scored evenly with 1st Place receiving 3 points, 2nd Place receiving 2 points, 3rd Place receiving 1 point, 4th Place (1/2 point), and 5th Place (1/4 point)</li>
    </ul>
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

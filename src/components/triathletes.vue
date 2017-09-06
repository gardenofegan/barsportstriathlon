<template>
  <div class="triathletes">
    <ul v-if="triathleteList.length">
      <li v-for="triathlete in triathleteList">
        First Name --> {{triathlete.first_name}}<br/>
        Last Name --> {{triathlete.last_name}}<br/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'triathletes',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('getTriathletes')
  },
  computed: {
    triathleteList () {
      return this.$store.getters.getTriathletes
    }
  },
  methods: {
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

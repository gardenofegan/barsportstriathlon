<template>
  <div class="triathlete">
    <div class="row">
      <div class="col-sm-12">
        <h1>Bob Lenhof</h1>
        :)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'triathlete',
  data () {
    return {
    }
  },
  created () {
    // this.$store.dispatch('getTriathletes')
  },
  computed: {
    // triathleteList () {
    //   return this.$store.getters.getTriathletes
    // }
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

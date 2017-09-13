<template>
  <div class="triathletes">
    <h1>Triathletes</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h3>First Generation Triathletes</h3>
        <ul v-if="triathleteList.length">
          <li v-for="triathlete in triathleteList">
            <router-link :to="{name: 'triathlete', params: {id: triathlete.id_triathlete}}">{{triathlete.id_triathlete}} {{triathlete.first_name}} {{triathlete.last_name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12">
        <h3>Next Generation Triathletes</h3>
        <ul v-if="triathleteList.length">
          <li v-for="triathlete in triathleteList">
            <router-link :to="{name: 'triathlete', params: {id: triathlete.id_triathlete}}">{{triathlete.id_triathlete}} {{triathlete.first_name}} {{triathlete.last_name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
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
    if (!this.$store.getters.getTriathletes.length) {
      this.$store.dispatch('getTriathletes')
    }
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

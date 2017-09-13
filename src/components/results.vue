<template>
  <div class="results">
    <h1>Champions</h1>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h3>First Generation</h3>
        <ul>
          <li>champ name : years won listed</li>
        </ul>
      </div>
      <div class="col-md-6 col-sm-12">
        <h3>Next Generation</h3>
          <ul>
            <li>champ name : years won listed</li>
          </ul>
      </div>
    </div>
    
    <h2>Detailed Results</h2>
    <p>
      <sup>*</sup>Note: Detailed Results for dates prior to 2011 are limited to just the winner's name.  Stats prior to this date have been lost to history.
    </p>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <h3>First Generation <small>Results by Year</small></h3>
        <ul>
          <!-- <li><router-link :to="{name: 'result', params: {division: 'first-generation', id: competition.year}}">{{competition.year}}</router-link></li> -->
        </ul>
      </div>
      <div class="col-md-6 col-sm-12">
        <h3>Next Generation <small>Results By Year</small></h3>
        <ul>
          <!-- <li><router-link :to="{name: 'result', params: {division: 'next-generation', id: competition.year}}">{{competition.year}}</router-link></li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'results',
  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

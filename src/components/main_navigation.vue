<template>
  <nav class="navbar navbar-toggleable-md fixed-top navbar-black" color-on-scroll="300">
    <div class="container">
			<div class="navbar-translate">
	      <button class="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-bar"></span>
					<span class="navbar-toggler-bar"></span>
					<span class="navbar-toggler-bar"></span>
	      </button>
        <router-link class="navbar-brand" to="/">Bar Sports Triathlon</router-link>
			</div>
	    <div class="collapse navbar-collapse" id="navbarToggler">
	      <ul class="navbar-nav ml-auto">
					<li class="nav-item">
            <router-link class="navbar-brand" to="/results">Past Results</router-link>
	        </li>
          <li class="nav-item">
	          <router-link class="navbar-brand" to="/triathletes">Triathletes</router-link>
	        </li>
	        <li class="nav-item">
	          <router-link class="navbar-brand" to="/rules/bowling-rules">Rules</router-link>
	        </li>
          <li class="nav-item">
	          <router-link class="navbar-brand" to="/scoring">Scoring</router-link>
	        </li>
	      </ul>
	    </div>
		</div>
  </nav>
</template>

<script>
export default {
  name: 'main-navigation',
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

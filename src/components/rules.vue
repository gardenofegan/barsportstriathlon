<template>
  <div class="rules">
    <div class="row">
      <div class="col-sm-12">
        <h1>Rules</h1>
        <ul>
          <li>The Bar Sports Triathlon consists of 3 sporting events hand selected to compliment the alcohol consumption naturally associated with each.</li>
          <li>The 3 sports are Bowling, Pool, and Darts</li>
          <li>Each sport consists of 3 games per event</li>
          <li>Each game is scored separately and the points are totaled from all games to determine an overall winner</li>
          <li>Each game is scored evenly with 1st Place receiving 3 points, 2nd Place receiving 2 points, and 3rd Place receiving 1 point</li>
          <li>The organizer has the option to add points for 4th Place (1/2 point) and 5th Place (1/4 point)</li>
          <li>Entry fee also varies per year based on the number of participants and individual game payouts (see score sheets for suggested payoffs)</li>
			  </ul>
        <hr/>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link to="/rules/bowling-rules" class="nav-link" v-bind:class="activeTab('/rules/bowling-rules')">Bowling</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rules/pool-rules" class="nav-link" v-bind:class="activeTab('/rules/pool-rules')">Pool</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rules/darts-rules" class="nav-link" v-bind:class="activeTab('/rules/darts-rules')">Darts</router-link></router-link>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rules',
  data () {
    return {
    }
  },
  methods: {
    activeTab (tab) {
      return (this.$route.path === tab) ? 'active' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

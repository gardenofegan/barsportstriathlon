<template>
  <div class="tab-pane fade" v-bind:class="activeTab" id="pool-rules" role="tabpanel" aria-labelledby="pool-rules-tab">
    <div class="row">
      <div class="col-md-4 col-sm-12">
			<h3>8 Ball</h3>
			<ul>
				<li>Each participant will play every other participant once (Flip for break)</li>
				<li>Call all shots after break</li>
				<li>If you scratch on break, all balls made remain in pocket</li>
				<li>If you pocket 8-ball on break ... you win</li>
				<li>If you pocket 8-ball on break and scratch ... you lose</li>
				<li>If you only make solids on break and do not scratch you are solids</li>
				<li>If you only make stripes on break and do not scratch you are stripes</li>
				<li>If you make any combination of solids/stripes on break ... table is open</li>
				<li>8-ball is not neutral.  Cannot be used in any combination of balls</li>
				<li>If on the 8-ball, cannot contact any other ball</li>
				<li>If you scratch, you pull one ball plus any of your balls made on that shot</li>
				<li>Can use opponents ball(s) in combination as long as your ball is hit first</li>
				<li>Do not have to call long rails on bank shots (rail parallel to direction of the ball as it approaches object pocket)</li>
				<li>All other disputes will be settled by scorekeepers (feel free to have a neutral player observe any complicated shots before they are attempted)</li>
			</ul>
		</div>
		<div class="col-md-4 col-sm-12">
			<h3>9 Ball</h3>
			<ul>
				<li>Each participant will play every other participant once (Flip for break)</li>
				<li>If you scratch on break, all balls made remain in pocket (except 9-ball)</li>
				<li>If you pocket 9-ball on break ... you win</li>
				<li>If you pocket 9-ball on break and scratch ... spot 9-ball</li>
				<li>If you scratch on break, opponent does not get ball-in-hand.  Opponent shoots from behind scratch line (spot low-number ball if behind line)</li>
				<li>The first ball struck on each shot must be the low-number ball on the table</li>
				<li>Shots are not called (slop counts)</li>
				<li>No balls are pulled on a scratch or illegal shot except the 9-ball</li>
				<li>Opponent gets ball-in-hand if previous shooter scratches, does not strike low-number ball first, or shoots cue ball off the table</li>
				<li>All other disputes will be settled by scorekeeper</li>
			</ul>
		</div>
		<div class="col-md-4 col-sm-12">
			<h3>Run</h3>
			<ul>
				<li>Get neutral person to watch your run</li>
				<li>Rack your own balls (no re-rack on bad break ... except very bad miscue)</li>
				<li>If you scratch on break, all balls made remain in pocket and turn continues</li>
				<li>Shots are not called (slop counts)</li>
				<li>Continue shooting until a scratch occurs or no ball is pocketed</li>
				<li>If all 15 balls are made ... re-rack and apply above rules</li>
				<li>If run ends in a scratch, ball(s) made on that shot do not count towards total</li>
				<li>After 1st Run attempt is over ... RACK 2ND TIME AND APPLY ABOVE RULES</li>
				<li>Use greater total of balls made from both attempts as your Run Total</li>
			</ul>
		</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'pool-rules',
  computed: {
    activeTab: function () {
      return (this.$route.path === '/rules/pool-rules') ? 'show active' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

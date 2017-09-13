<template>
  <div class="tab-pane fade" v-bind:class="activeTab" id="darts-rules" role="tabpanel" aria-labelledby="darts-rules-tab">
    <div class="row">
      <div class="col-md-4 col-sm-12">
			<h3>Cricket</h3>
			<ul>
				<li>Close out 20, 19, 18, 17, 16, 15, and Bulls Eye</li>
				<li>To close out a number you must have 3 legal scores for that number</li>
				<li>Possible legal scores consist of single, double, or triple</li>
				<li>Numbers can be closed in any order</li>
				<li>Each round is complete after every player has thrown 3 darts</li>
				<li>Winning order is determined by whom ever closes all numbers at the end of any round</li>
				<li>If more than one player closes out in any round they will have a shootout</li>
				<li>Shootout consists of 3 darts thrown at the Bulls Eye (player with most Bulls Eyes wins)</li>
				<li>Repeat Shootout until a winner is determined</li>
				<li>Continue rounds until all places are filled (2nd, 3rd, etc.)</li>
			</ul>
		  </div> 
		<div class="col-md-4 col-sm-12">
			<h3>401 Double-Out</h3>
			<ul>
				<li>Start scoring with every player having 401 points</li>
				<li>Deduct from 401 with total of every set of 3 darts thrown by players</li>
				<li>Totals are determined by tallying the number-area the 3 darts hit (taking into account the double and triple)</li>
				<li>To close out the game your total must equal ZERO exactly after any dart of your last set of 3 darts is totaled.</li>
				<li>Also, when ZERO total is reached, it must be by your last dart landing in a DOUBLE area.</li>
				<li>If after any of your 3 darts are thrown your total equals 1 or less than zero ... that turn is over and no points are deducted for that round</li>
				<li>Winning order is determined by whom ever reaches ZERO at the end of any round</li>
				<li>If more than one player zeros out in any round they will have a shootout</li>
				<li>Shootout consists of 3 darts thrown at the Bulls Eye (player with most Bulls Eyes wins)</li>
				<li>Repeat Shootout until a winner is determined</li>
				<li>Continue rounds until all places are filled (2nd, 3rd, etc.)</li>
			</ul>
		  </div>
			<div class="col-md-4 col-sm-12">
			<h3>301 Double-In and Double-Out</h3>
			<ul>
				<li>Start scoring with every player having 301 points</li>
				<li>Deduct from 301 with total of every set of 3 darts thrown by players</li>
				<li>Deduction does not start until a dart is thrown in a DOUBLE area</li>
				<li>If the DOUBLE is hit after the 1st dart is thrown ... the 1st dart does not count in that round’s total</li>
				<li>If the DOUBLE is hit after the 2nd dart is thrown ... the 1st &amp; 2nd darts do not count in that round’s total</li>
				<li>Totals are determined by tallying the number-area the 3 darts hit (taking into account the double and triple)</li>
				<li>To close out the game your total must equal ZERO exactly after any dart of your last set of 3 darts is totaled.</li>
				<li>Also, when ZERO total is reached, it must be by your last dart landing in a DOUBLE area.</li>
				<li>If after any of your 3 darts are thrown your total equals 1 or less than zero ... that turn is over and no points are deducted for that round</li>
				<li>Winning order is determined by whom ever reaches ZERO at the end of any round</li>
				<li>If more than one player zeros out in any round they will have a shootout</li>
				<li>Shootout consists of 3 darts thrown at the Bulls Eye (player with most Bulls Eyes wins)</li>
				<li>Repeat Shootout until a winner is determined</li>
				<li>Continue rounds until all places are filled (2nd, 3rd, etc.)</li>
			</ul>
		  </div> 
        </div>
  </div>
</template>

<script>
export default {
  name: 'darts-rules',
  computed: {
    activeTab: function () {
      return (this.$route.path === '/rules/darts-rules') ? 'show active' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

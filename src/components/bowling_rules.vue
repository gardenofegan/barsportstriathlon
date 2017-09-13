<template>
  <div class="tab-pane fade" v-bind:class="activeTab" id="bowling-rules" role="tabpanel" aria-labelledby="bowling-rules-tab">
    <ul>
      <li>Bowling consists of 3 separate regulation games</li>
      <li>Each game is scored individually for point purposes</li>
      <li>Players will randomly select to determine on which set of 2 lanes they will bowl (This order selection will also be used for the 8-ball / 9-ball Pool schedule)</li>
      <li>Bowling is scored by standard PBA rules</li>
      <li>Winning order is determined by end score of each game</li>
      <li>If any placing results in a tie ... there will be a one ball, most pins, roll-off to decide the victor</li>
      <li>If the roll-off results in a tie by strike ... Repeat roll-off</li>
      <li>If the roll-off results in a tie by less than a strike ... throw 2nd ball at remaining pins</li>
      <li>Repeat roll-off until victor is determined</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bowling-rules',
  computed: {
    activeTab: function () {
      return (this.$route.path === '/rules/bowling-rules') ? 'show active' : ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div id="app">
    <main-navigation></main-navigation>
    <div class="container">
      <div class="row tim-row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer-section></footer-section>
  </div>
</template>

<script>
import mainNavigation from './components/main_navigation'
import footerSection from './components/footer_section'
export default {
  name: 'app',
  components: {
    mainNavigation,
    footerSection
  }
}
</script>

<style lang="scss">
  @import "../assets/css/bootstrap.min.css";
  @import "../assets/css/paper-kit.css";
  @import "../assets/css/barsportstriathlon.css";

</style>

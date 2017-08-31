// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:7555'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  render: h => h(App)
  // template: '<App/>',
})

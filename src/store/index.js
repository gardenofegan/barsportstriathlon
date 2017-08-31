import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  username: ''
}

const mutations = {
  'SET_USERNAME' (state, username) {
    state.username = username
  }
}

const actions = {
  createNewUser ({commit, state}, userDetails) {
    return Vue.http.post('/api/createUser', userDetails)
    .then((response) => {
      commit('SET_USERNAME', userDetails.username)
      console.log('SUCCESS : Created user - ' + userDetails.username)
    }).catch(() => {
      commit('SET_USERNAME', '')
      console.log('error creating user -- ' + userDetails.username)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})


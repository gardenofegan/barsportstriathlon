import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const state = {
  username: '',
  triathletes: []
}

const mutations = {
  'SET_USERNAME' (state, username) {
    state.username = username
  },
  'FETCHED_TRIATHLETES' (state, triathletes) {
    state.triathletes = triathletes || []
  }
}

const actions = {
  createNewUser ({commit, state}, userDetails) {
    return Vue.http.post('/api/createUser', userDetails)
    .then((response) => {
      console.log('SUCCESS : Created user - ' + userDetails.username)
    }).catch(() => {
      console.log('error creating user -- ' + userDetails.username)
    })
  },
  loginAdminUser ({commit, state}, userDetails) {
    return Vue.http.post('/api/login', userDetails)
    .then((response) => {
      commit('SET_USERNAME', userDetails.username)
      console.log('SUCCESS : logged in user - ' + userDetails.username)
    }).catch(() => {
      commit('SET_USERNAME', '')
      console.log('error logging in user -- ' + userDetails.username)
    })
  },
  getTriathletes ({commit, state}) {
    console.log('vue getting triathletes')
    return Vue.http.get('/api/triathletes')
    .then((response) => {
      commit('FETCHED_TRIATHLETES', response.body)
      console.log(response)
    }).catch(() => {
      commit('FETCHED_TRIATHLETES', [])
      console.log('error')
    })
  }
}

const getters = {
  getUsername: (state, getters) => {
    return state.username
  },
  getTriathletes: (state, getters) => {
    return state.triathletes
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})


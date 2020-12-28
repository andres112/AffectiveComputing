import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section: null
  },
  mutations: {
    setSection(state, payload) {
      state.section = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

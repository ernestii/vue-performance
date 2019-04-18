import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customOptionOne: 'test'
    , customOptionTwo: 'blabla'
    , customOptionThree: { bla: 1, a: 1, b: 2 }
  },
  mutations: {

  },
  actions: {

  }
})

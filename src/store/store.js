import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import { userGetters } from './getters'
import { loginMutations } from './mutations'
import { loginActions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    kakaoAccessToken: null,
    openLoginPopUp: false
  },
  getters: Object.assign({}, userGetters),
  mutations: Object.assign({}, loginMutations),
  actions: Object.assign({}, loginActions),
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: false }), // secure같은 경우는 https일 경우에만 true로 만든다.
        removeItem: key => Cookies.remove(key)
      },
      reducer: state => ({
        kakaoAccessToken: state.kakaoAccessToken
      })
    })
  ]
})

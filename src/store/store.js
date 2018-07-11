import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import { userGetters, rankGetters, contentsDetailGetters } from './getters'
import { loginMutations, rankMutations, contentsDetailMutations } from './mutations'
import { loginActions, rankActions, contentsDeetailActions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    kakaoAccessToken: null,
    user_id: null,
    openLoginPopUp: false,
    openVotePopUp: false,
    openVoteSplash: false,
    voteTarget: null,
    likeRankingList: [],
    isLike: null,
    voting_cnt: null,
    activeImgIndex: 0, // 컨텐츠 상세 페이지에서 큰 이미지의 인덱스
    contentsDetail: null,
    imageArray: []
  },
  getters: Object.assign({}, userGetters, rankGetters, contentsDetailGetters),
  mutations: Object.assign({}, loginMutations, rankMutations, contentsDetailMutations),
  actions: Object.assign({}, loginActions, rankActions, contentsDeetailActions),
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
        kakaoAccessToken: state.kakaoAccessToken,
        user_id: state.user_id
      })
    })
  ]
})

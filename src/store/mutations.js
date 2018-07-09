import router from '../router/index'

export const loginMutations = {
  openLoginComponent (state) {
    console.log('login component opened')
    state.openLoginPopUp = !state.openLoginPopUp
  },
  signInSuccess (state, payload) {
    state.kakaoAccessToken = payload.token
    state.user_id = payload.id
    state.openLoginPopUp = !state.openLoginPopUp
  },
  logout (state) {
    state.kakaoAccessToken = null
    state.openLoginPopUp = false
    router.push('/')
  }
}

export const rankMutations = {
  likeRankingSuccess (state, payload) {
    state.likeRankingList = payload
    console.log('get like ranking success')
  },
  putIsLike (state, payload) {
    state.isLike = payload
    console.log('put IsLike success')
  }
}

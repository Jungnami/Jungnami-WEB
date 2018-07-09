import router from '../router/index'

export const loginMutations = {
  openLoginComponent (state) {
    console.log('login component opened')
    state.openLoginPopUp = !state.openLoginPopUp
  },
  signInSuccess (state, payload) {
    state.kakaoAccessToken = payload.token
    state.openLoginPopUp = !state.openLoginPopUp
  },
  logout (state) {
    state.kakaoAccessToken = null
    state.openLoginPopUp = false
    router.push('/')
  }
}

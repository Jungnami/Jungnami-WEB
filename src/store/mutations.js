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
    const JUNGNAMI_ACCESS_TOKEN = payload.token
    localStorage.setItem('JUNGNAMI_ACCESS_TOKEN', JUNGNAMI_ACCESS_TOKEN)
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
  },
  votingCountSuccess (state, payload) {
    state.voting_cnt = payload.voting_cnt
    console.log('get voting count success')
  }
}

//추천페이지 뮤테이션
export const recommendMutations = {

  setRecommendContentList (state, payload){
    state.recommendContentList = payload
    console.log('set recommendContents success')
  }
}

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
  },
  changeOpenVotePopUp (state) {
    state.openVotePopUp = !state.openVotePopUp
  },
  enrollLegislatorId (state, payload) {
    state.voteTarget = payload
    console.log('국회의원 아이디 등록')
  },
  voteSuccess (state) {
    console.log('vote success')
    state.openVotePopUp = false
    state.openVoteSplash = true
  },
  changeOpenVoteSplash (state) {
    state.openVoteSplash = !state.openVoteSplash
  }
}

export const contentsDetailMutations = {
  plusActiveImgIndex (state) {
    state.activeImgIndex++
  },
  minusActiveImgIndex (state) {
    state.activeImgIndex--
  },
  postingViewSuccess (state, payload) {
    state.contentsDetail = payload
  }
}
// 추천페이지 뮤테이션
export const recommendMutations = {
  setRecommendContentList (state, payload) {
    state.recommendTop20 = payload.recommend
    state.recommendTMI = payload.tmi
    state.recommendStory = payload.story
    // console.log("payload:::" + JSON.stringify(payload));
    // console.log('set recommendContents success')
  },
  setTMIContentsData (state, payload) {
    // console.log("mutations :::: " + payload);
    state.contentsTMI = payload
  },
  setStoryContentsData (state, payload) {
    // console.log(payload);
    state.contentsStory = payload
  },
  setRecommendContentsData (state, payload) {
    state.contentsRecommend = payload
  },
  setMyInforData (state, payload) {
    state.myInfomation = payload
  }
}

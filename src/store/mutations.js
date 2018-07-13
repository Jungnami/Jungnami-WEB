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
    localStorage.removeItem('JUNGNAMI_ACCESS_TOKEN');
    state.kakaoAccessToken = null
    state.user_id = null
    state.openLoginPopUp = false
    router.push('/')
  },
  setMypageInfo (state, payload) {
    state.myPageInfo = payload
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
  changeImgIndex (state, payload) {
    console.log('여기까지 들어옴')
    state.activeImgIndex = payload
  },
  postingViewSuccess (state, payload) {
    state.contentsDetail = payload
  },
  commentListSuccess (state, payload) {
    state.commentList = payload
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

export const partyMutations = {
  setPartyData (state, payload) {
    state.partyInfo = payload
  },
  setRegionData (state, payload) {
    state.regionInfo = payload
  },
  setRegion (state, payload) {
    // console.log("State region :::" + payload)
    state.region = payload
  },
  setRegionColor (state, payload) {
    state.regionColor = payload
  }
}

// 국회의원 페이지 mutations
export const legislatorMutations = {
  setLegislatorData (state, payload) {
    state.legislatorInfo = payload
  },
  setUserCoin (state, payload) {
    state.userCoin = payload
  },
  setSupportCoin (state, payload) {
    state.supportCoin = payload
  }
}

export const myPageMutations = {
  setCoinInfo (state, payload) {
    state.coinInfo = payload
  },
  changeOpenBuySplash (state) {
    state.openBuySplash = !state.openBuySplash
  },
  buySuccess (state) {
    state.openBuySplash = true
  },
  updateMyCoin (state, payload) {
    state.myPageInfo.coin += payload
  }
}

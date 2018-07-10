export const userGetters = {
  getKakaoAccessToken (state) {
    console.log('kakaotoken 넘겨줌')
    return state.kakaoAccessToken
  },
  getOpenLoginPopUp (state) {
    console.log('login popup open')
    return state.openLoginPopUp
  }
}

export const rankGetters = {
  getLikeRankingList (state) {
    console.log('호감 순위 넘겨줌')
    return state.likeRankingList
  },
  getIsLike (state) {
    console.log('isLike 값 넘겨줌')
    return state.isLike
  },
  getVotingCount (state) {
    console.log('voting count 값 넘겨줌')
    return state.voting_cnt
  }
}


//추천 페이지 게터
export const recommendGetters = {
  getRecommendContents (state) {
    console.log('recommend content 값 넘겨줌')
    return state.recommendContentList
  }
}

import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jungnami.tk/',
  timeout: 30000
})

const tokenKey = 'JUNGNAMI_ACCESS_TOKEN'
const MESSAGE_200 = 'Success'

export const loginActions = {
  postAccessToken ({ commit }, payload) {
    instance.post('/user/login/kakao', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('signInSuccess', response.data.data)
        axios.defaults.headers['authorization'] = response.data.data.token
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  getMyLoginInfo ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routePath = '/user/mypage/' + payload.mypage_id
    instance.get(routePath).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setMypageInfo', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  }
}

export const rankActions = {
  getLikeRanking ({ commit }, isLike) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/web/ranking/all/${isLike}`).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('likeRankingSuccess', response.data.data)
        commit('putIsLike', isLike)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  getVotingCount ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/user/vote').then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('votingCountSuccess', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  postVoting ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/legislator/vote', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('voteSuccess')
      }
    }).catch(error => {
      if (error.message === `No vote`) {
        alert('투표권이 부족하여 투표를 할 수가 없습니다')
      } else {
        alert(error.message)
      }
    })
  }
}

export const contentsDetailActions = {
  getPostingView ({ commit }, contentsID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/contents/${contentsID}/detail`).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('postingViewSuccess', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  getCommentList ({ commit }, contentsID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/contents/comment/${contentsID}`).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('commentListSuccess', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  postMakeComment ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/contents/comment', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('makeCommentSuccess')
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  postLikeComment ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/contents/comment/like', payload).then(response => {
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
    })
  },
  postLikeCancelComment (commentID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.delete(`/contents/comment/like/${commentID}`).then(response => {
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
    })
  },

  // 스크랩관련
  // 컨텐츠 스크랩하기
  doScrapContents ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/user/scrap', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        console.log('스크랩 성공')
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  deleteScrap ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)

    let contentsid = payload.contentsid
    let routePath = '/user/scrap/' + contentsid

    instance.delete(routePath, payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        console.log('스크랩 취소 성공')
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  doLikeContents ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routePath = '/contents/like'
    instance.post(routePath, payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        console.log('글 좋아요 성공')
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  deleteLikeContents ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)

    let contentsid = payload.contents_id
    let routePath = '/contents/like/' + contentsid

    instance.delete(routePath, payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        console.log('좋아요 취소 성공')
      }
    }).catch(error => {
      alert(error.message)
    })
  }
}

// 추천페이지 액션
export const recommendActions = {
  getRecommendContents ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/web/contents/main').then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setRecommendContentList', response.data.data)
      }
    }).catch(error => {
      alert('recommendActions error ::: ' + error.message)
    })
  },
  getContentsData ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routeName = '/web/contents/category/' + payload.name
    instance.get(routeName).then(response => {
      if (response.data.message === MESSAGE_200) {
        if (payload.name === 'TMI') {
          commit('setTMIContentsData', response.data.data.content)
        } else if (payload.name === '스토리') {
          commit('setStoryContentsData', response.data.data.content)
        } else {
          console.log('error')
        }
      }
    }).catch(error => {
      alert('recommendActions error ::: ' + error.message)
    })
  },
  getRecommendData ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/web/contents').then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setRecommendContentsData', response.data.data.content)
      }
    }).catch(error => {
      alert('recommendActions error ::: ' + error.message)
    })
  },
  getMyInfoData ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routeNames = '/user/mypage/' + payload.userId
    instance.get(routeNames).then(response => {
      if (response.data.message === MESSAGE_200) {
        let scrapData = []
        let infoData = response.data.data.scrap
        for (var i = 0; i < infoData.length; i++) {
          var obj = {}
          obj.c_id = infoData[i].c_id
          obj.c_title = infoData[i].c_title
          obj.thumbnail = infoData[i].thumbnail
          obj.text = infoData[i].text
          scrapData.push(obj)
        }
        // console.log("come here!!!" + JSON.stringify(scrapData));

        commit('setMyInforData', scrapData)
      }
    }).catch(error => {
      // console.log("myinfo data error");
      console.log('MYINFO recommendActions error ::: ' + error.message)
    })
  }
}

export const partyActions = {
  getLegislatorListByParty ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routePath = '/web/ranking/party/' + payload.party_name + '/' + payload.isLike
    instance.get(routePath).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('likeRankingSuccess', response.data.data)
      }
    }).catch(error => {
      console.log('MYINFO partyActions error ::: ' + error.message)
    })
  },
  getLegislatorListByRegion ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routePath = '/web/ranking/city/' + payload.region + '/' + payload.isLike
    instance.get(routePath).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('likeRankingSuccess', response.data.data)
      }
    }).catch(error => {
      console.log('MYINFO partyActions error ::: ' + error.message)
    })
  }
}

// 국회의원 페이지 액션
export const legislatorActions = {
  getLegislatorData ({ commit }, legislatorID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/legislator/page/${legislatorID}`).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setLegislatorData', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  legislatorSupport ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/user/point').then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setUserCoin', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  postSupportComplete ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    commit('setSupportCoin', payload.coin)
    instance.post('/legislator/support', payload).then(response => {
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
    })
  }
}

// 마이페이지관련
export const myPageActions = {
  coinInfo ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/user/point').then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('setCoinInfo', response.data.data)
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  exchangeCoin ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/user/vote', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('exchangeSuccess')
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  postBuyCoin ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    commit('updateMyCoin', payload.point)
    instance.post('/user/point', payload).then(response => {
      if (response.data.message === MESSAGE_200) {
        commit('buySuccess')
      }
    }).catch(error => {
      alert(error.message)
    })
  }
}

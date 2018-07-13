import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://jungnami.ml/',
  timeout: 3000
})

const tokenKey = 'JUNGNAMI_ACCESS_TOKEN'

export const loginActions = {
  postAccessToken ({ commit }, payload) {
    instance.post('/user/kakaologin', payload).then(response => {
      if (response.data.message === 'success') {
        commit('signInSuccess', response.data.data)
        // console.log(JSON.stringify(response.data.data))
        // console.log('login success!!!')
        axios.defaults.headers['authorization'] = response.data.data.token
      }
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  getMyLoginInfo ({ commit }, payload) {
    console.log("actions :::" + JSON.stringify(payload));
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routePath = '/user/mypage/' + payload.mypage_id
    instance.get(routePath).then(response => {
      // console.log("ASdfasf!@#!")
      // console.log("safdasdfasdf" + JSON.stringify(response.data));
      if (response.data.message === 'Select Data Success') {
        console.log(JSON.stringify(response.data.data));
        commit('setMypageInfo', response.data.data );
      }
    }).catch(error => {
      // alert(error.message)
    })
  }
}

export const rankActions = {
  getLikeRanking ({ commit }, isLike) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/ranking/list/${isLike}`).then(response => {
      if (response.data.message === 'Select Data Success') {
        commit('likeRankingSuccess', response.data.data)
        commit('putIsLike', isLike)
      }
      console.log(response.data)
    }).catch(error => {
      console.log(error.message)
    })
  },
  getVotingCount ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/legislator/voting').then(response => {
      if (response.data.message === 'Select Data Success') {
        commit('votingCountSuccess', response.data.data)
      }
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  postVoting ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/legislator/voting', payload).then(response => {
      if (response.data.message === 'Insert and Update Data Success') {
        commit('voteSuccess')
      }
      // console.log(response.data)
    }).catch(error => {
      if (error.message === `I don't have enough voting_cnt`) {
        alert('투표권이 부족하여 투표를 할 수가 없습니다')
      } else {
        // alert(error.message)
      }
    })
  }
}

export const contentsDetailActions = {
  getPostingView ({ commit }, contentsID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/contents/cardnews/${contentsID}`).then(response => {
      if (response.data.message === 'Successfully get posting view') {
        commit('postingViewSuccess', response.data.data)
      }
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  getCommentList ({ commit }, contentsID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/contents/commentlist/${contentsID}`).then(response => {
      if (response.data.message === 'Successfully get contents comment list') {
        commit('commentListSuccess', response.data.data)
      }
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  postMakeComment ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/contents/makecomment', payload).then(response => {
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  postLikeComment ({ commit }, payload) {
    console.log(payload)
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/contents/likecomment', payload).then(response => {
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },
  postLikeCancelComment (commentID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.delete(`/delete/contentscommentlike/${commentID}`).then(response => {
      console.log(response.data)
    }).catch(error => {
      // alert(error.message)
    })
  },

  //스크랩관련
  //컨텐츠 스크랩하기
  doScrapContents ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    console.log("do scrap contents go");
    // let contentsid = payload.contentsid
    let routePath = '/contents/scrap'

    instance.post(routePath, payload).then(response => {
      if(response.data.message === 'Successfully scrap') {
        console.log("isScrap ::: " + JSON.stringify(response.data))
        // alert("스크랩 성공 :: " + response.data);
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  deleteScrap ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)

    let contentsid = payload.contentsid
    let routePath = '/delete/scrap/' + contentsid

    instance.delete(routePath, payload).then(response => {
      if(response.data.message === 'Successfully delete') {
        // alert("스크랩 삭제 성공 :: " + response.data);

        console.log("deleteScrap ::: " + JSON.stringify(response.data))
      }
    }).catch(error => {
      alert(error.message)
    })
  },
  doLikeContents ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    console.log("do like contents go");
    let routePath = '/contents/like'

    instance.post(routePath, payload).then(response => {
      if(response.data.message === 'Successfully insert contentslike') {
        console.log("isScrap ::: " + JSON.stringify(response.data))
        alert("좋아요 성공 :: " + response.data);
      }
    }).catch(error => {
      alert(error.message)
    })
  },
    deleteLikeContents ({ commit }, payload) {
      axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)

      let contentsid = payload.contents_id
      let routePath = '/delete/contentslike/' + contentsid

      instance.delete(routePath, payload).then(response => {
        if(response.data.message === 'Successfully cancel') {
          alert("좋아요 삭제 성공 :: " + response.data);

          console.log("deleteScrap ::: " + JSON.stringify(response.data))
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
    instance.get('/contents/recommendforweb').then(response => {
      if (response.data.message === 'Successfully get posting view') {
        // console.log("recommendData actions come here ::: " + JSON.stringify(response.data.data));
        commit('setRecommendContentList', response.data.data)
      }
    }).catch(error => {
      console.log('recommendActions error ::: ' + error.message);
    })
  },
  getContentsData ({ commit }, payload) {
    let routeName = '/contents/main/' + payload.name
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey) // 추천페이지에 이게 필요?
    // axios.default.headers['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODA3NDY1MjM5LCJpYXQiOjE1MzA3NzU1MDQsImV4cCI6MTUzMzM2NzUwNH0.DAXcgbHm4gOaJMTFyQW0KCvs64lUZai6Cc_pi5pKu4Q'
    instance.get(routeName).then(response => {
      if (response.data.message === 'Successfully get posting view') {
        if (payload.name === 'TMI') {
          commit('setTMIContentsData', response.data.data.content)
        } else if (payload.name === '스토리') {
          commit('setStoryContentsData', response.data.data.content)
        } else {
          console.log('error')
        }
      }
    }).catch(error => {
      console.log('recommendActions error ::: ' + error.message);
    })
  },
  getRecommendData ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/contents/recommend').then(response => {
      if (response.data.message === 'Successfully get posting view') {
        commit('setRecommendContentsData', response.data.data.content)
      }
    }).catch(error => {
      console.log('recommendActions error ::: ' + error.message)
    })
  },
  getMyInfoData ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    let routeNames = '/user/mypage/' + payload.userId
    // let routeName = "/user/mypage/809994856" + '809994856'

    // console.log("routeName :::: " + routeName);
    instance.get(routeNames).then(response => {
      // console.log("message :::" + response);
      if (response.data.message === 'Select Data Success') {
        // console.log("myinfo data ::::: " + JSON.stringify(response.data));
        let scrapData = []
        let infoData = response.data.data.scrap
        console.log("infoData :::" + JSON.stringify(infoData));
        // console.log(infoData.length);
        for (var i = 0;i<infoData.length;i++) {
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
    let routePath ='/legislatorlist/groupbypartyforweb/' + payload.isLike + '/' + payload.party_name;
    instance.get(routePath).then(response => {
      // console.log("!!!");
      // console.log("here response data::::" + response.data.message);
      if(response.data.message === 'Success'){
        // console.log("here responsessss" + JSON.stringify(response.data.data));

        commit('setPartyData', response.data.data)
      }
    }).catch(error =>{
      console.log('MYINFO partyActions error ::: ' + error.message)

    })
  },
  getLegislatorListByRegion ({ commit }, payload){
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    // let routePath ='/legislatorlist/groupbyregion/1/서울';

    let routePath ='/legislatorlist/groupbyregionforweb/' + payload.isLike + '/' + payload.region;
    console.log("reoutePath :::" + routePath)
    instance.get(routePath).then(response => {
      // console.log("region !!!");
      // console.log("here response data::::" + response.data.message);
      if(response.data.message === 'Success'){
        // console.log("here responsessss" + JSON.stringify(response.data.data));

        commit('setRegionData', response.data.data)
      }
    }).catch(error =>{
      console.log('MYINFO partyActions error ::: ' + error.message)
    })
  }
}
// 국회의원 페이지 액션
export const legislatorActions = {
  getLegislatorData ({ commit }, legislatorID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/legislator/page/${legislatorID}`).then(response => {
      if (response.data.message === 'Select Data Success') {
        commit('setLegislatorData', response.data.data)
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
    })
  },
  legislatorSupport ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/legislator/support').then(response => {
      if (response.data.message === 'Select Data Success') {
        commit('setUserCoin', response.data.data)
      }
      console.log(response.data)
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

//마이페이지관련
export const myPageActions = {
  coinInfo ({ commit }) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get('/user/coin').then(response => {
      console.log("coinINFO:::::::" + JSON.stringify(response.data.data));
      if (response.data.message === 'Success') {
        console.log("success");
        commit('setCoinInfo', response.data.data)
      }

    }).catch(error => {
      alert(error.message)
    })
  },
}

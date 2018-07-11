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
        console.log('login success!!!')
        axios.defaults.headers['authorization'] = response.data.data.token
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
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
      alert(error.message)
      this.$router.push('/')
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
      alert(error.message)
    })
  },
  postVoting ({ commit }, payload) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.post('/legislator/voting', payload).then(response => {
      if (response.data.message === 'Insert and Update Data Success') {
        commit('voteSuccess')
      }
      console.log(response.data)
    }).catch(error => {
      if (error.message === `I don't have enough voting_cnt`) {
        alert('투표권이 부족하여 투표를 할 수가 없습니다')
      } else {
        alert(error.message)
      }
    })
  }
}

export const contentsDeetailActions = {
  getPostingView ({ commit }, contentsID) {
    axios.defaults.headers['authorization'] = localStorage.getItem(tokenKey)
    instance.get(`/contents/cardnews/${contentsID}`).then(response => {
      if (response.data.message === 'Successfully get posting view') {
        commit('postingViewSuccess', response.data.data)
        console.log(response.data.data.imagearray.data)
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.message)
    })
  }
}
// 추천페이지 액션
export const recommendActions = {
  getRecommendContents ({ commit }) {
    axios.default.headers['authorization'] = localStorage.getItem(tokenKey) 
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
    // axios.default.headers['authorization'] = localStorage.getItem(tokenKey) //추천페이지에 이게 필요?
    // axios.default.headers['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODA3NDY1MjM5LCJpYXQiOjE1MzA3NzU1MDQsImV4cCI6MTUzMzM2NzUwNH0.DAXcgbHm4gOaJMTFyQW0KCvs64lUZai6Cc_pi5pKu4Q'
    instance.get(routeName).then(response => {
      if (response.data.message === 'Successfully get posting view') {
        if (payload.name === 'TMI') {
          commit('setTMIContentsData', response.data.data.content)
        }
        else if (payload.name === '스토리') {
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
    instance.get('/contents/recommend').then(response => {
      if (response.data.message === 'Successfully get posting view') {
        commit('setRecommendContentsData', response.data.data.content)
      }
    }).catch(error => {
      console.log('recommendActions error ::: ' + error.message)
    })
  },
  getMyInfoData ({ commit }, payload) {
    let routeNames = '/user/mypage/' + payload.userId
    // let routeName = "/user/mypage/809994856" + '809994856'

    // console.log("routeName :::: " + routeName);
    instance.get(routeNames).then(response => {
      // console.log("message :::" + response);
      if (response.data.message === 'Select Data Success') {
        // console.log("myinfo data ::::: " + JSON.stringify(response.data));
        let scrapData = []
        let infoData = response.data.data.scrap
        // console.log("infoData :::" + JSON.stringify(infoData));
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

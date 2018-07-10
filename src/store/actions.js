import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.124.216.2:3000',
  timeout: 3000,
  headers: {
    'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODA3NDY1MjM5LCJpYXQiOjE1MzA3NzU1MDQsImV4cCI6MTUzMzM2NzUwNH0.DAXcgbHm4gOaJMTFyQW0KCvs64lUZai6Cc_pi5pKu4Q'
  }
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
//추천페이지 액션
export const recommendActions = {
  getRecommendContents ({ commit }) {
    // axios.default.headers['authorization'] = localStorage.getItem(tokenKey) //추천페이지에 이게 필요?
    // axios.default.headers['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODA3NDY1MjM5LCJpYXQiOjE1MzA3NzU1MDQsImV4cCI6MTUzMzM2NzUwNH0.DAXcgbHm4gOaJMTFyQW0KCvs64lUZai6Cc_pi5pKu4Q'
    instance.get('/contents/recommendforweb').then(response => {
      if(response.data.message === 'Successfully get posting view') {
        // console.log("recommendData actions come here ::: " + JSON.stringify(response.data.data));
        commit('setRecommendContentList', response.data.data)
      }
    }).catch(error => {
      console.log("recommendActions error ::: " + error.message);
    })
  },
  getContentsData ({ commit }, payload) {
    let routeName = '/contents/main/' + payload.name;
    // axios.default.headers['authorization'] = localStorage.getItem(tokenKey) //추천페이지에 이게 필요?
    // axios.default.headers['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODA3NDY1MjM5LCJpYXQiOjE1MzA3NzU1MDQsImV4cCI6MTUzMzM2NzUwNH0.DAXcgbHm4gOaJMTFyQW0KCvs64lUZai6Cc_pi5pKu4Q'
    instance.get(routeName).then(response => {
      if(response.data.message === 'Successfully get posting view') {
        if(payload.name === 'TMI') {
          commit('setTMIContentsData', response.data.data.content)
        }
        else if(payload.name === '스토리') {
          commit('setStoryContentsData', response.data.data.content)
        }
        else{
          console.log("error");
          return;
        }
      }
    }).catch(error => {
      console.log("recommendActions error ::: " + error.message);
    })
  },
  getRecommendData ({ commit }, payload) {
    instance.get('/contents/recommend').then(response => {
      if(response.data.message === 'Successfully get posting view') {
        commit('setRecommendContentsData', response.data.data.content)
      }
    }).catch(error => {
      console.log("recommendActions error ::: " + error.message);
    })
  }


}

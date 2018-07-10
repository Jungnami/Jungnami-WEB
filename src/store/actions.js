import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.124.216.2:3000',
  timeout: 1000
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
  }
}
//추천페이지 액션
export const recommendActions = {
  getRecommendContents ({ commit }) {
    axios.default.headers['authorization'] = localStorage.getItem(tokenKey) //추천페이지에 이게 필요?
    instance.get('/contents/recommend').then(response => {
      if(response.data.message === 'Select Data Success') {
        console.log("recommendData actions come here ::: " + response.data.data);
        commit('setRecommendContentList', response.data.data)
      }
    }).catch(error => {
      console.log("recommendActions error ::: " + error.message);
    })
  }
}

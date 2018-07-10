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

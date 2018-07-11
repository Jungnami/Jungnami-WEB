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

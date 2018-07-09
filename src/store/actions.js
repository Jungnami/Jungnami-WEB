import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.124.216.2:3000',
  timeout: 1000
})

export const loginActions = {
  postAccessToken ({ commit }, payload) {
    instance.post('/user/kakaologin', payload).then(response => {
      if (response.data.message === 'success') {
        commit('signInSuccess', response.data.data)
        console.log('login success!!!')
        axios.defaults.headers.common['authorization'] = response.data.data.token
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.data.message)
    })
  }
}

export const rankActions = {
  getLikeRanking ({ commit }, isLike) {
    instance.get(`/ranking/list/${isLike}`).then(response => {
      if (response.data.message === 'Select Data Success') {
        commit('likeRankingSuccess', response.data.data)
        commit('putIsLike', isLike)
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.data.message)
      this.$router.push('/')
    })
  }
}

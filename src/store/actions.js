import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.124.216.2:3000',
  timeout: 1000
})

export const loginActions = {
  postAccessToken ({ commit }, payload) {
    instance.post('/user/kakaologin', payload).then(response => {
      if (response.result.message === 'success') {
        commit('signInSuccess', response.result.data)
        console.log('login success!!!')
        axios.defaults.headers.common['authorization'] = response.result.data.token
      }
      console.log(response.data)
    }).catch(error => {
      alert(error.result.message)
    })
  }
}

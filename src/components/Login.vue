<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        <button @click="close" large class="close_btn"><v-icon>close</v-icon></button>
        <div class="image_wrapper">
          <div class="login_image"></div>
        </div>
        <div class="kakao_login" @click="loginWithKakao">
        </div>
      </div>
    </div>
  </div>
</transition>
</template>


<script>
import { store } from '../store/store'

export default {
  name: 'Login',
  data() {
    return {
      kakaoAccessToken: null
    }
  },
  methods: {
    loginWithKakao() {
      Kakao.Auth.login({
        success: function(authObj) {
          const object = {
            accessToken: authObj.access_token
          }
          store.dispatch('postAccessToken', object)
          console.log(authObj.access_token)
        },
        fail: function(err) {
          alert(JSON.stringify(err));
        }
      });
    },
    close () {
      this.$store.commit('openLoginComponent')
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
.modal_mask
{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal_wrapper
{
  display: table-cell;
  vertical-align: middle;
}
.modal_container
{
  padding-top: 32px;
  width: 374.99px;
  height: 641px;
  margin: 0px auto;
  background-color: white;
  transition: all .3s ease;
  border-radius: 2.5%;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
}
.close_btn
{
  margin-left: 322.15px;
}
.image_wrapper{
  height: 248px;
  width: 248px;
  margin-left: 63.5px;
  margin-right: 63.5px;
  margin-top: 16px;
  margin-bottom: 16px;
}
.login_image
{
  background-size: contain;
  height: 100%;
  width: 100%;
  margin-bottom: 60px;
  vertical-align: middle;
  background-image: url('../../static/main_character.png');
  color: #6B6B6B;
  text-align: center;
  font-family: NanumBarunGothic;
}
.kakao_login
{
  height: 46px;
  width: auto;
  margin-left: 31.84px;
  margin-right: 31.84px;
  background-color: #F7F7F7;
  font-family: NanumBarunGothicLight;
  background-image: url('../../static/kakao_login.png');
  background-size: cover;
  cursor: pointer;
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

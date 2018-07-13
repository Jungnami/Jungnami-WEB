<template>
<div>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1 class="profile_box_wrapper">
      <button @click="logout" class="right">
        <img src="/static/mypage_button_logout.png" alt="logout_button" class="logout_img">
      </button>
        <div class="background_image_box">
      
      <v-layout row wrap class="profile_box">
        <v-flex xs1></v-flex>
        <img :src="myInfo.img" alt="image_profile" class="image_profile">
        <v-layout column justify-space-between class="profile_contents">
          <v-flex class="name">{{myInfo.nickname}}</v-flex>
          <v-flex>
            <button class="setting_btn">
              <!-- <img src="../../../static/mypage_button_setting.png" alt="setting_button" class="setting_img"> -->
            </button>
          </v-flex>
        </v-layout>
      </v-layout>
        </div>
      
    </v-flex>
    <v-flex xs1></v-flex>
  </v-layout>
  <v-layout row wrap justify-space-between class="mypage_tab_bar">
    <router-link to="/mypage">
      <div class="link_box">
        <img src="../../../static/mypage_button_mycoin_off.png" alt="mycoin_btn" class="link_img mycoin_img">
        <div class="mycoin link_name">나의 코인</div>
      </div>
    </router-link>
    <router-link to="/mypage/myvote">
      <div class="link_box">
        <img src="../../../static/mypage_button_myvote_off.png" alt="myvote_btn" class="link_img myvote_img">
        <div class="myvote link_name">나의 투표권</div>
      </div>
    </router-link>
    <router-link to="/mypage/scrap">
      <div class="link_box">
        <img src="../../../static/mypage_button_scrap_off.png" alt="scrap_btn" class="link_img scrap_img">
        <div class="scrap link_name">스크랩</div>
      </div>
    </router-link>
  </v-layout>
  <hr>
  <router-view v-bind:mypage_data="myInfo"></router-view>
</div>
</template>

<script>
import * as Cookies from 'js-cookie'

export default {
  name: 'MyPage',
  data() {
    return {

    }
  },
  methods: {
    logout () {
      Cookies.remove('kakaoAccessToken')
      Cookies.remove('openLoginPopUp')
      this.$store.commit('logout')
    },
    getMypageInfoData() {
      return this.myInfo;
    }
  },
  computed : {
    myInfo: function() {
      // console.log("here computed:::" + this.$store.getters.getMypageInfo)
      return this.$store.getters.getMypageInfo
    }
  },
  created () {
    const object = {
      mypage_id: this.$store.getters.getUserId,
    }
    this.$store.dispatch('getMyLoginInfo', object);
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  img.logout_img {
    width: 5.87vw;
    margin-top: 3.47vw;
    margin-right: 3.47vw;
  }
  div.profile_box {
    margin-top: 11.47vw;
    margin-bottom: 11.47vw;
    height: 29.87vw;
  }
  div.name {
    font-size: 3.5vw;
  }
  button.setting_btn {
    width: 18.6vw;
    height: 5.56vw;
  }
  div.profile_contents {
    margin-top: 5vh;
    margin-bottom: 3vh;
  }
  div.mypage_tab_bar {
    margin-top: 5.6vw;
  }
  div.link_box {
    width: 26vw;
  }
  .router-link-exact-active {
    border-bottom: 1vw solid #36C5F1;
  }
  img.link_img {
    width: 8.78vw;
  }
  div.link_name {
    font-size: 3.2vw;
  }
}
.profile_box_wrapper
{
  margin-top: 4.63vh;
  background: #FCFCFC;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.logout_img
{
  width: 2.08vw;
  margin-top: 1.77vw;
  margin-right: 1.77vw;
}


.profile_box
{
  margin-top: 8.6vh;
  margin-bottom: 8.6vh;
  height: 22.87vh;
  background-image: url('../../../static/mypage_bigbox.png');
  /* z-index: 100; */
  
  
}


.image_profile
{
  height: 100%;
  margin-right: 2.15vw;
  border-radius: 50%;
}
.profile_contents
{
  margin-top: 6vh;
  margin-bottom: 4vh;
}
.name
{
  font-family: NanumBarunGothic;
  font-size: 1.93vw;
  color: #707070;
}
.setting_btn
{
  width: 8.2vw;
  height: 2.45vw;
  border: 1px solid #B4B4B4;
  border-radius: 5px;
  background-image: url('../../../static/mypage_button_setting.png');
  background-size: 100%;
}
.mypage_tab_bar
{
  margin-left: 8.33vw;
  margin-right: 8.33vw;
  margin-top: 2.4vw;
}
hr
{
  margin-left: 8.33vw;
  margin-right: 8.33vw;
  margin-bottom: 4.68vh;
}
.link_box
{
  width: 19.79vw;
  padding-bottom: 0.76vw;
  text-align: center;
}
.link_img
{
  width: 2.96vw;
}
.link_name
{
  font-size: 1.32vw;
  font-family: NanumBarunGothicBold;
  color: #6C6C6C;
  margin-top: 0.8vw;
}
.router-link-exact-active
{
  color: #36C5F1;
  border-bottom: 0.41vw solid #36C5F1;
}
.router-link-exact-active div
{
  color: #36C5F1;
}
</style>

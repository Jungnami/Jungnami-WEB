<template>
<div class="nav">
  <v-layout row nowrap class="nav_bar">
    <v-icon @click="sideNav = !sideNav" class="hidden-sm-and-up menu_icon">menu</v-icon>
    <v-flex offset-sm1 class="logo_box">
      <router-link to="/" class="logo">
        <img src="../../static/tab_image_title.png" alt="logo_title">
      </router-link>
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn color="text" class="hidden-xs-only nav_menu" v-bind:class="{ on : $route.path.includes(item.path)}" flat depressed v-for="item in items" :key="item.text" :to="item.path">
        {{ item.text }}
    </v-btn>
    <router-link to="/mypage" v-if="kakaoToken">
      <img src="../../static/tab_icon_mypage.png" alt="mypage_logo" class="mypage_icon">
    </router-link>
    <button class="mypage_icon login_icon" v-if="!kakaoToken" @click="openLogin">로그인</button>
    <v-flex xs1 class="mypage_margin">
    </v-flex>
  </v-layout>

  <v-navigation-drawer v-model="sideNav" temporary absolute>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.text" :to="item.path">
          {{ item.text }}
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  data () {
    return {
      sideNav: false,
      textColor: 'text',
      items: [
        {icon: 'supervisor_account', text: '순위', path: '/contentsDetail/20'},
        {icon: 'room', text: '의원목록', path: '/list'},
        {icon: 'room', text: '컨텐츠', path: '/contents'}
      ],
      search_items: [
        {img: '/static/tab_search_icon_legislator.png', text: '국회의원 검색'},
        {img: '/static/tab_search_icon_content.png', text: '컨텐츠 검색'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      kakaoToken: 'getKakaoAccessToken'
    })
  },
  methods: {
    openLogin () {
      this.$store.commit('openLoginComponent')
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .logo_box {
    margin-left: 4vw;
  }
  img.mypage_icon {
    margin-left: 3vw;
  }
}
.nav
{
  position: fixed;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
  width: 100vw;
  z-index: 9998;
}
.nav_bar
{
  height: 7.41vh;
  background-color: white;
}
.menu_icon
{
  margin-left: 3vw;
}
.logo img
{
  height: 7.41vh;
}
.search_menu
{
  margin-left: 2vw;
}
.search_btn
{
  width: 170px;
  text-align: left;
  color: #B4B4B4;
  font-size: 12px;
  font-family: NanumBarunGothicLight;
  background-color: #F9F9FB;
  border: 1px solid #B4B4B4;
  border-radius: 4px;
}
#search_icon
{
  color: #A1A1A1;
  margin-left: 3%;
}
.search_text
{
  display: inline-block;
  vertical-align: super;
}
div.search_list
{
  padding: 0;
}
.item_title
{
  color: #B4B4B4;
  font-size: 12px;
  font-family: NanumBarunGothicLight;
  margin-left: 8px;
}
.mypage_icon
{
  height: 100%;
  margin-left: 5.5vw;
}
.login_icon
{
  color: #36C5F1;
  font-family: NanumBarunGothic;
}
.nav_menu
{
  margin-top: 1.5vh;
  font-family: NanumBarunGothic
}
.nav_menu.on
{
  color: #36C5F1 !important;
}
</style>

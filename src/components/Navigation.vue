<template>
<div>
  <v-layout row nowrap class="nav_bar">
    <v-icon @click="sideNav = !sideNav" class="hidden-sm-and-up menu_icon">menu</v-icon>
    <v-flex offset-xs1>
      <router-link to="/" class="logo">
        <img src="../../static/tab_image_title.png" alt="logo_title">
      </router-link>
    </v-flex>
    <v-spacer></v-spacer>
    <v-btn color="text" class="hidden-xs-only nav_menu" flat depressed v-for="item in items" :key="item.text" :to="item.path">
        {{ item.text }}
    </v-btn>
    <v-menu offset-y class="search_menu">
      <button slot="activator" color="white" class="search_btn">
        <v-icon id="search_icon">search</v-icon>
        <div class="search_text">검색</div>
      </button>
      <v-list class="search_list">
        <template v-for="(item, index) in search_items">
          <v-list-tile :key="index">
            <img :src="item.img" alt="item_img">
            <v-list-tile-title class="item_title">{{ item.text }}</v-list-tile-title>
          </v-list-tile>
          <v-divider v-if="index + 1 < search_items.length" :key="index"></v-divider>
        </template>
      </v-list>
    </v-menu>
    <input type="text" class="search_list">
    <router-link to="/mypage">
      <img src="../../static/tab_icon_mypage.png" alt="mypage_logo" class="mypage_icon">
    </router-link>
    <v-flex xs1>
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
export default {
  name: 'Navigation',
  data () {
    return {
      sideNav: false,
      textColor: 'text',
      items: [
        {icon: 'supervisor_account', text: '순위', path: '/rank'},
        {icon: 'room', text: '의원목록', path: '/produce'},
        {icon: 'room', text: '컨텐츠', path: '/legislator'}
      ],
      search_items: [
        {img: '../../static/tab_search_icon_legislator.png', text: '국회의원 검색'},
        {img: '../../static/tab_search_icon_content.png', text: '컨텐츠 검색'}
      ]
    }
  }
}
</script>

<style scoped>
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
  margin-left: 1.15vw;
}
.nav_menu
{
  margin-top: 1.5vh;
  font-family: NanumBarunGothic
}
</style>

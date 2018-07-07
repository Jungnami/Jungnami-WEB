<template>
<v-layout row nowrap>
  <v-flex sm2 class="hidden-sm-and-down drawer">
    <router-link v-for="(item, i) in link_items" :key=i :to="item.path">
      <div class="link_box">{{ item.text }}</div>
    </router-link>
    <div class="recent_scrap">
      <div class="scrap_title">
        최근 스크랩 글 
        <img src="../../../static/contents_scrap_icon.png" alt="contents_scrap_icon">
      </div>
    </div>
  </v-flex>
  <v-flex md8 offset-md-3>
    <router-view></router-view>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'Contents',
  data () {
    return {
      link_items: [
        {text: '추천', path: '/contents'},
        {text: 'TMI', path: '/contents/TMI'},
        {text: '스토리', path: '/contents/story'}
      ],
    }
  }
}
</script>

<style scoped>
.drawer
{
  height: 90vh;
  position: fixed;
  /* background: gray; */
}
.link_box
{
  width: 14.58vw;
  color: #2B2B2B;
  font-family: NanumBarunGothic;
  font-size: 1.09vw;
  margin-left: 1.04vw;
  margin-right: 1.04vw;
  padding-left: 0.52vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
  border-bottom: 1px solid #E1E1E1;
}
.router-link-exact-active div
{
  color: #36C5F1;
  background: rgba(54, 197, 241, 0.2);
  margin-left: 0;
  margin-right: 0;
  padding-left: 1.56vw;
  width: 16.66vw;
}
.recent_scrap
{
  margin-left: 1.56vw;
  margin-right: 1.56vw;
}
.scrap_title
{
  font-size: 1.09vw;
  font-family: NanumBarunGothic;
  columns: #2B2B2B;
}
</style>

<template>
<v-layout row nowrap>
  <v-flex sm2 class="hidden-sm-and-down drawer">
    <router-link v-for="(item, i) in link_items" :key=i :to="item.path">
      <v-layout row wrap justify-space-between class="link_box">
        <div>{{ item.text }}</div>
        <div><img src="/static/contents_rightarrow_btn.png" alt="right_arrow" class="right_icon"></div>
      </v-layout>
    </router-link>
    <div class="recent_scrap">
      <div class="scrap_title">최근 스크랩 글 
        <img src="../../../static/contents_scrap_icon.png" alt="contents_scrap_icon" class="scrap_icon">
      </div>
      <div v-for="item in recent_items" :key="item.id" class="scrap_card">
        <img :src="item.image" alt="scrap_card_img" class="card_img">
        <div class="card_title">{{ item.title }}</div>
        <div class="card_info">{{ item.category }} · {{ item.recent }}</div>
      </div>
      <router-link to="/mypage/scrap">
        <button class="view_more"></button>
      </router-link>
    </div>
  </v-flex>
  <v-flex xs8 offset-xs2 class="hidden-md-and-up">
    <v-layout row wrap justify-space-between>
      <router-link v-for="(item, i) in link_items" :key=i :to="item.path">
        <div class="mobile_item">{{ item.text }}</div>
      </router-link>
    </v-layout>
  </v-flex>
  <v-flex xs10 md8 offset-xs1 offset-md3>
    <router-view></router-view>
    <router-view class="contents_router_view"></router-view>
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
      recent_items: [
        {
          id: 17,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 운명',
          category: '스토리',
          recent: '11분'
        },
        {
          id: 15,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          category: 'TMI',
          recent: '30분'
        },
      ]
    }
  }
}
</script>

<style scoped>
.drawer
{
  /* height: 90vh; */
  position: fixed;
  /* background: gray; */
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
}
.link_box
{
  width: 29.63vh;
  color: #2B2B2B;
  font-family: NanumBarunGothic;
  font-size: 1.94vh;
  margin-left: 1.85vh;
  margin-right: 1.85vh;
  padding-left: 0.92vh;
  padding-right: 2.77vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  border-bottom: 1px solid #E1E1E1;
}
.right_icon
{
  width: 0;
  /* margin-left: 10vw; */
}
.router-link-exact-active > div
{
  color: #36C5F1;
  background: rgba(54, 197, 241, 0.2);
  margin-left: 0;
  margin-right: 0;
  padding-left: 1.56vw;
  width: 16.5vw;
}
.router-link-exact-active img.right_icon
{
  width: 0.52vw;
  vertical-align: middle;
  text-align: right;
}
.recent_scrap
{
  margin-left: 1.56vw;
  margin-right: 1.56vw;
}
.scrap_title
{
  font-size: 1.94vh;
  font-family: NanumBarunGothic;
  columns: #2B2B2B;
  margin-top: 1.6vh;
}
.scrap_icon
{
  width: 1.04vw;
  vertical-align: middle;
}
.card_img
{
  width: 100%;
  border-radius: 5%;
  margin-top: 1.6vh;
}
.card_title
{
  font-family: NanumBarunGothic;
  font-size: 0.94vw;
  margin-top: 1vh;
  margin-left: 0.78vw;
  margin-right: 0.78vw;
}
.card_info
{
  margin-top: 0.5vh;
  margin-left: 0.78vw;
  margin-right: 0.78vw;
  
  color: #C6C6C6;
  font-family: NanumBarunGothic;
  font-size: 0.83vw;
}
.view_more
{
  margin-left: 1.41vw;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  width: 10.69vw;
  height: 2.76vw;
  background-image: url('/static/contents_viewmore_btn.png');
  background-size: 100%;
  border: 1px solid #A2A2A2;
  border-radius: 1.41vw;
}
.contents_router_view
{
  margin-left: 29.63vh;
}
.mobile_item
{
  color: #D8D8D8;
  font-family: NanumBarunGothic;
  font-size: 3.73vw;
}
</style>

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
      <div class="scrap_title">
        최근 스크랩 글 
        <img src="../../../static/contents_scrap_icon.png" alt="contents_scrap_icon" class="scrap_icon">
      </div>
      <div v-for="item in recent_items" :key="item.id" class="scrap_card">
        <img :src="item.image" alt="scrap_card_img" class="card_img">
        <div class="card_title">{{ item.title }}</div>
        <div class="card_info">{{ item.category }} · {{ item.recent }}</div>
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
  padding-right: 1.56vw;
  padding-top: 1.2vw;
  padding-bottom: 1.2vw;
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
  width: 16.66vw;
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
  font-size: 1.09vw;
  font-family: NanumBarunGothic;
  columns: #2B2B2B;
  margin-top: 1.2vw;
}
.scrap_icon
{
  width: 1.04vw;
  vertical-align: text-top;
}
.card_img
{
  width: 100%;
}
.card_title
{
  font-family: NanumBarunGothic;
  font-size: 0.94vw;
  margin-top: 0.79vw;
  margin-left: 0.78vw;
  margin-right: 0.78vw;
}
</style>

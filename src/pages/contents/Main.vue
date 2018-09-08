<template>
<div>
  <v-layout row wrap class="mobile_tab">
    <v-flex xs8 offset-xs2 class="hidden-md-and-up">
      <v-layout row wrap justify-space-between>
        <router-link v-for="(item, i) in link_items" :key=i :to="item.path" class="mobile_router">
          <div class="mobile_item">{{ item.text }}</div>
        </router-link>
      </v-layout>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex sm2 class="hidden-sm-and-down drawer">
      <router-link v-for="(item, i) in link_items" :key=i :to="item.path" class="left_router">
        <v-layout row wrap justify-space-between class="link_box">
          <div>{{ item.text }}</div>
          <div><img src="/static/contents_rightarrow_btn.png" alt="right_arrow" class="right_icon"></div>
        </v-layout>
      </router-link>
      <div class="recent_scrap">
        <div class="scrap_title">최근 스크랩 글
          <img src="../../../static/contents_scrap_icon.png" alt="contents_scrap_icon" class="scrap_icon">
        </div>
        <div v-for="item in recent_items" :key="item.c_id" class="scrap_card">
          <router-link :to="'/contentsDetail/' + item.c_id">

          <img :src="item.thumbnail" alt="scrap_card_img" class="card_img">
          <div class="card_title">{{ item.c_title }}</div>
          <div class="card_info">{{ item.text }}</div>
          </router-link>
        </div>

        <button class="view_more" v-if="this.$store.getters.getUserId === null" @click="$store.commit('openLoginComponent')"></button>
        <router-link to="/mypage/scrap">
          <button class="view_more" v-if="this.$store.getters.getUserId !== null"></button>
        </router-link>
      </div>
    </v-flex>
    <v-flex xs10 md8 offset-xs1 offset-md3>
      <router-view></router-view>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import router from '../../router/index'

export default {
  name: 'Contents',
  data () {
    return {
      link_items: [
        {text: '추천', path: '/contents/'},
        {text: 'TMI', path: '/contents/TMI'},
        {text: '스토리', path: '/contents/story'}
      ]
      // recent_items : this.myInfo
    }
  },
  created() {
    this.$store.dispatch('getMyInfoData', {
      userId: this.$store.getters.getUserId
    })
  },
  computed : {
    recent_items: function() {
      return this.$store.getters.getMyInfo.slice(0,2); //최근2개만
     }
  },
  methods: {

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
  width: 14.42vw;
  color: #2B2B2B;
  font-family: NanumBarunGothic;
  font-size: 1.94vh;
  margin-left: 1.04vw;
  margin-right: 1.04vw;
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
.left_router.router-link-exact-active > div
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
  color: rgb(75, 75, 75);
  margin-top: 0vh;
  margin-left: 0.78vw;
  margin-right: 0.78vw;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
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
.mobile_tab
{
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
}
.mobile_item
{
  display: inline-block;
  color: #D8D8D8;
  font-family: NanumBarunGothic;
  font-size: 3.73vw;
  width: 12.27vw;
  text-align: center;
  padding-top: 3.47vw;
  padding-bottom: 3.47vw;
}
.mobile_item:hover
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
.mobile_router.router-link-exact-active > div
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
</style>

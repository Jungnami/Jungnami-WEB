<template>
<div>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <button class="route_link party_link" :id="booleanLike? 'activeTab' : ''" @click="getLikeRanking(1)">
        호감
      </button>
      <button class="route_link region_link" :id="!booleanLike? 'activeTab' : ''" @click="getLikeRanking(0)">
        비호감
      </button>
      <hr>
    </v-flex>
    <v-flex xs1></v-flex>
  </v-layout>

  <v-layout row wrap class="main_legislator_wrapper">
    <v-flex xs5 offset-xs1 class="main_legislator_left" :style="{backgroundImage: `url(${items[0].mainimg})`}" justify-end>
      <div class="rank_tag_box">
        <img src="/static/rank_first_tag.png" alt="first_tag" class="rank_tag">
      </div>
      <div class="name">{{ items[0].l_name }}</div>
      <div class="party">{{ items[0].party_name }}</div>
      <div class="vote_box">
        <div class="vote_count text-align-right vote_count_left" :style="{ width: items[0].width * 28 + 'vw' }">{{ items[0].score }}표</div>
      </div>
    </v-flex>
    <v-flex xs5 class="main_legislator_right" :style="{backgroundImage: `url(${items[1].mainimg})`}" justify-end>
      <div class="rank_tag_box text-align-right">
        <img src="/static/rank_second_tag.png" alt="second_tag" class="rank_tag rank_second_tag">
      </div>
      <div class="name text-align-right">{{ items[1].l_name }}</div>
      <div class="party text-align-right">{{ items[1].party_name }}</div>
      <div class="vote_box">
        <div class="vote_count vote_count_right" :style="{ marginLeft: (1-items[1].width + 13.66/28) * 28 + 'vw' }">{{ items[1].score }}표</div>
      </div>
    </v-flex>
  </v-layout>
  <img src="/static/rank_vs_icon.png" alt="vs_icon" class="vs_icon">
  <img src="/static/rank_1_character.png" alt="1_character" class="character_one">
  <img src="/static/rank_2_character.png" alt="2_character" class="character_two">
  
  <v-layout row wrap justify-center>
    <v-flex xs6 md4>
      <img src="/static/rank_mainchart_text.png" alt="mainchart_text" class="mainchart_text">
    </v-flex>
  </v-layout>

  <v-layout row wrap class="rank_tab">
    <v-flex xs3 md2 offset-xs1 class="rank_tab_bar">
      {{rank_1}}위 - {{rank_2}}위
    </v-flex>
    <v-flex xs10 offset-xs1><hr class="tab"></v-flex>
  </v-layout>

  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <rank-box v-on:rankPageInfo="changeShowRank"></rank-box>
    </v-flex>
    <v-flex xs1></v-flex>
  </v-layout>
</div>
</template>

<script>
import RankBox from './components/RankBox'

export default {
  name: 'Rank',
  components: { RankBox },
  data () {
    return {
      rank_1: 1,
      rank_2: 30,
      booleanLike: true
    }
  },
  computed: {
    items: function () {
        return this.$store.getters.getLikeRankingList
    }
  },
  methods: {
    changeShowRank: function(payload) {
      var num = payload.num;
      this.rank_1 = 30 * (num-1) + 1;
      this.rank_2 = 30 * num;
    },
    getLikeRanking (isLike) {
      this.booleanLike = !this.booleanLike
      this.$store.dispatch('getLikeRanking', isLike)
    }
  },
  created () {
    this.$store.dispatch('getLikeRanking', 1)
  }
}
//그림 3개 position fixed 한 다음 위치잡아서 해결
//글씨 오른쪽에 붙어있거나 하는 것은 text-align right로 해결
</script>

<style scoped>
@media (max-width: 600px) {
  button.route_link {
    font-size: 5vw;
    width: 40vw;
    margin-right: 0;
  }
  div.main_legislator_wrapper {
    height: 53.3vw;
    margin-top: 5.3vw;
  }
  div.main_legislator_left {
    background-size: auto 100%;
  }
  div.main_legislator_right {
    background-size: auto 100%;
  }
  img.rank_tag {
    width: 10.9vw;
    margin-top: 3.2vw;
    border-radius: 0px 3px 3px 0px;
  }
  img.rank_second_tag.rank_tag {
    border-radius: 3px 0 0 3px;
  }
  img.vs_icon {
    width: 8vw;
    height: 8vw;
    left: 46vw;
    top: 58vw;
  }
  img.character_one {
    height: 10.42vw;
    left: 30vw;
    top: 78.5vw;
  }
  img.character_two {
    height: 10.42vw;
    left: 49vw;
    top: 78.5vw;
  }
  div.name {
    font-size: 3.73vw;
    margin-top: 29.3vw;
  }
  div.party {
    font-size: 2.4vw;
  }
  div.vote_count {
    font-size: 1.87vw;
    margin-top: 0.5vw;
  }
  img.mainchart_text {
    margin-top: 3.36vw;
  }
  div.rank_tab_bar {
    font-size: 3.3vw;
  }
  div.rank_tab {
    margin-top: 5.87vw;
  }
}
@media (min-width: 600px) and (max-width: 960px) {
  img.vs_icon {
    left: 46vw;
    top: 31vw;
  }
  img.character_one {
    left: 30vw;
    top: 42.5vw;
  }
  img.character_two {
    left: 49vw;
    top: 42.5vw;
  }
}
@media (min-width: 960px) and (max-width: 1264px) {
  img.vs_icon {
    left: 46vw;
    top: 28vw;
  }
  img.character_one {
    left: 30vw;
    top: 39.5vw;
  }
  img.character_two {
    left: 49vw;
    top: 39.5vw;
  }
}
.route_link
{
  width: 8.33vw;
  padding-top: 2.73vh;
  padding-bottom: 2.27vh;
  margin-right: 8.33vw;
  border-bottom: 0.46vh solid white;
  text-align: center;
  font-size: 1.46vw;
  font-family: NanumBarunGothic;
  color: #666666;
  display: inline-block;
}
.route_link:hover
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
.main_legislator_wrapper
{
  height: 36.3vw;
  margin-top: 2.68vw;
}
.main_legislator_left
{
  background-size: 100%;
  margin-right: 0.1vw;
}
.main_legislator_right
{
  background-size: 100%;
  margin-left: 0.1vw;
}
.rank_tag
{
  width: 8.7vw;
  margin-top: 2.68vw;
  background: #36C5F1;
  border-radius: 0px 6px 6px 0px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.43);
}
img.rank_second_tag
{
  border-radius: 6px 0 0 6px;
}
.name
{
  font-family: NanumBarunGothic;
  color: #F7F7F7;
  font-size: 2.5vw;
  margin-top: 15vw;
  margin-left: 2.1vw;
  margin-right: 2.1vw;
}
.party
{
  font-family: NanumBarunGothicLight;
  color: #E2E2E2;
  font-size: 1.82vw;
  margin-left: 2.1vw;
  margin-right: 2.1vw;
}
.text-align-right
{
  text-align: right;
}
.vs_icon
{
  position: absolute;
  width: 6.7vw;
  height: 6.7vw;
  left: 46vw;
  top: 25vw;
}
.character_one
{
  position: absolute;
  height: 10.42vw;
  left: 30vw;
  top: 37.5vw;
}
.character_two
{
  position: absolute;
  height: 10.42vw;
  left: 49vw;
  top: 37.5vw;
}
.vote_count
{
  background: #1870B9;
  padding-left: 1.56vw;
  padding-right: 1.56vw;
  margin-top: 2vw;
  color: #E2E2E2;
  font-family: NanumBarunGothicLight;
  font-size: 1.56vw;
}
.vote_count_left
{
  border-radius: 0px 200px 200px 0;
}
.vote_count_right
{
  border-radius: 200px 0 0 200px;
}
.mainchart_text
{
  margin-top: 2.08vw;
  width: 100%;
}
.rank_tab
{
  margin-top: 6.24vh;
}
.rank_tab_bar
{
  border-radius: 6px 6px 0px 0px;
  text-align: center;
  padding-top: 1.45vh;
  padding-bottom: 0.91vh;
  background: #36C5F1;
  font-family: NanumBarunGothic;
  font-size: 1.3vw;
  color: white;
}
hr.tab
{
  width: 100%;
  border: 0;
  height: 3px;
  background: #36C5F1;
}
#activeTab
{
  border-bottom: 0.46vh solid #36C5F1;
  color: #36C5F1;
}
</style>

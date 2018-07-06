<template>
<v-layout row wrap class="region_page">
  <v-flex xs7 md3 offset-xs1>
    <img src="../../../../static/region_main_text.png" alt="list_region_text" class="region_text">
    <map-component class="hidden-sm-and-down map_component"></map-component>
  </v-flex>
  <v-flex xs10 md7 offset-xs1 offset-md0>
    <v-layout row wrap justify-space-between class="hidden-md-and-up">
      <button v-for="(region, i) in regions1" :key="i" class="region_btn">{{ region }}</button>
    </v-layout>
    <v-layout row wrap justify-space-between class="hidden-md-and-up btns">
      <button v-for="(region, i) in regions2" :key="i" class="region_btn">{{ region }}</button>
    </v-layout>
    <v-layout row wrap justify-space-between class="hidden-md-and-up btns">
      <button v-for="(region, i) in regions3" :key="i" class="region_btn">{{ region }}</button>
    </v-layout>
    <v-layout row wrap class="hidden-md-and-up btns">
      <button v-for="(region, i) in regions4" :key="i" class="region_btn btns_last">{{ region }}</button>
    </v-layout>

    <v-layout row nowrap justify-space-between class="hidden-sm-and-down">
      <div v-for="(party, i) in partys" :key="i" class="party_color">
        <div :style="{backgroundColor: party.color}" class="color_circle"></div>
        <div class="party_name">{{ party.name }}</div>
      </div>
    </v-layout>
    
    <v-layout row wrap justify-space-between class="region_tab">
      <v-flex xs4 md2 :style="{backgroundColor: active_region.color}" class="region_tab_bar">
        {{ active_region.name }}
      </v-flex>
      <div class="member_count">국회의원 수 : 49명</div>
      <hr>
    </v-layout>
    <v-layout row wrap justify-space-between>
      <div class="voting_list">
        <voting-list></voting-list>
      </div>
      <div class="voting_list">
        <voting-list></voting-list>
      </div>
    </v-layout>
  </v-flex>
  <v-flex xs1></v-flex>
</v-layout>
</template>

<script>
import MapComponent from './Map'
import VotingList from '../../../components/Vote'

export default {
  name: 'Region',
  data () {
    return {
      regions1: ["서울", "인천", "경기", "강원", "경북"],
      regions2: ["충남", "세종", "대전", "경남", "울산"],
      regions3: ["전남", "전북", "대구", "부산", "충북"],
      regions4: ["제주", "광주"],
      partys: [
        {color: "#1783DC", name: "더불어민주당"},
        {color: "#E1241A", name: "자유한국당"},
        {color: "#FCDC00", name: "정의당"},
        {color: "#EC8C0D", name: "민중당"},
        {color: "#14CDCC", name: "바른미래당"},
        {color: "#3DA336", name: "민주평화당"},
        {color: "#123167", name: "대한애국당"},
        {color: "#F37B7C", name: "더불어민주당 / 자유한국당"},
        {color: "#00A1A0", name: "더불어민주당 / 바른미래당"}
      ],
      active_region: {color: "#157ACE", name: "서울"}
    }
  },
  components: { MapComponent, VotingList }
}
</script>

<style scoped>
@media (max-width: 960px) {
  img.region_text {
    margin-bottom: 3vh;
  }
  div.region_tab_bar {
    font-size: 4vw;
  }
  div.member_count {
    font-size: 3.8vw;
  }
  div.region_tab {
    margin-top: 3vh;
  }
  div.voting_list {
    width: 83vw;
  }
}
.region_page
{
  margin-top: 4.63vh;
}
.region_text
{
  width: 100%;
  margin-bottom: 10.74vh;
}
.map_component
{
  padding-right: 3vw;
}
.region_btn
{
  width: 13.33vw;
  padding-top: 0.7vw;
  padding-bottom: 0.4vw;
  text-align: center;
  border: 1px solid #B0B0B0;
  border-radius: 3.2vw;

  font-size: 3.47vw;
  font-family: NanumBarunGothic;
  color: #B0B0B0;
}
.btns
{
  margin-top: 2.03vh;
}
.btns_last
{
  margin-right: 3.9vw;
}
.color_circle
{
  display: inline-block;
  width: 0.7vw;
  height: 0.7vw;
  border-radius: 1000px;
  margin-right: 0.2vw;
}
.party_name
{
  display: inline-block;
  vertical-align: text-bottom;
  font-family: NanumBarunGothic;
  color: #A1A1A1;
  font-size: 0.78vw;
}
.region_tab
{
  margin-top: 6.24vh;
}
.region_tab_bar
{
  border-radius: 6px 6px 0px 0px;
  text-align: center;
  padding-top: 1.45vh;
  padding-bottom: 0.91vh;

  font-family: NanumBarunGothic;
  font-size: 1.8vw;
  color: white;
}
.member_count
{
  font-family: NanumBarunGothic;
  font-size: 1.4vw;
  color: #A1A1A1;
  padding-top: 2.3vh;
}
hr
{
  width: 100%;
  border: 0;
  height: 3px;
  background: #1783DC;
}
.voting_list
{
  width: 28.64vw;
}
</style>

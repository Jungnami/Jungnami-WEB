<template>
<v-layout row wrap class="region_page">
  <vote-splash v-if="this.$store.getters.getOpenVoteSplash"></vote-splash>
  <vote-modal v-if="this.$store.getters.getOpenVotePopUp"></vote-modal>
  <v-flex xs7 md3 offset-xs1>
    <img src="../../../../static/region_main_text.png" alt="list_region_text" class="region_text">
    <map-component @click-map="setRegionData(region, regionColor)" class="hidden-sm-and-down map_component"></map-component>
  </v-flex>
  <v-flex xs10 md7 offset-xs1 offset-md0>
    <v-layout row wrap justify-space-between class="hidden-md-and-up">
      <button @click="setRegionData(regionName.name, regionName.color)" v-for="(regionName, i) in regions1" :key="i" class="region_btn">{{ regionName.name }}</button>
    </v-layout>
    <v-layout row wrap justify-space-between class="hidden-md-and-up btns">
      <button @click="setRegionData(regionName.name, regionName.color)" v-for="(regionName, i) in regions2" :key="i" class="region_btn">{{ regionName.name }}</button>
    </v-layout>
    <v-layout row wrap justify-space-between class="hidden-md-and-up btns">
      <button @click="setRegionData(regionName.name, regionName.color)" v-for="(regionName, i) in regions3" :key="i" class="region_btn">{{ regionName.name }}</button>
    </v-layout>
    <v-layout row wrap class="hidden-md-and-up btns">
      <button @click="setRegionData(regionName.name, regionName.color)" v-for="(regionName, i) in regions4" :key="i" class="region_btn btns_last">{{ regionName.name }}</button>
    </v-layout>

    <v-layout row nowrap justify-space-between class="hidden-sm-and-down">
      <div v-for="(party, i) in partys" :key="i" class="party_color">
        <div :style="{backgroundColor: party.color}" class="color_circle"></div>
        <div class="party_name">{{ party.name }}</div>
      </div>
    </v-layout>

    <v-layout row wrap justify-space-between class="region_tab">
      <v-flex xs3 md2 :style="{backgroundColor: regionColor}" class="region_tab_bar" >
        {{ region }}
      </v-flex>
      <v-flex xs9 md10>
        <v-layout row wrap justify-space-between>
          <div>
            <button class="like_btn" :class="getLike === 1? 'active_btn':''" @click="changeLike(1)">호감</button>
            <button class="like_btn" :class="getLike === 0? 'active_btn':''" @click="changeLike(0)">비호감</button>
          </div>
          <div class="member_count">국회의원 수 : {{ items.length }} 명</div>
        </v-layout>
      </v-flex>
      <hr :style="{background: regionColor}">
    </v-layout>
    <v-layout row wrap justify-space-between>
      <div class="voting_list">
        <voting-list v-bind:list_info="sendListInfo(1)"></voting-list>
      </div>
        <div class="voting_list" v-if="!isMobile()">
        <voting-list v-bind:list_info="sendListInfo(2)"></voting-list>
      </div>
    </v-layout>

    <!--페이징-->
    <div class="dot_box" align="center">
      <!-- <a href="#"  > -->
      <span v-on:click="getPagingNum($event)" id="1" class="dot" v-bind:class="{ on : currentPage == 1 }" ></span>
      <!-- </a> -->
      <!-- <a href="#" v-on:click="getPagingNum($event)" v-bind:id="index" v-for="index in getDotNum" v-if="index >= 2"> -->
      <span v-on:click="getPagingNum($event)" v-bind:id="index" v-for="index in getDotNum" v-if="index >= 2" class="dot" v-bind:class="{ on : currentPage == index }" :key="index"></span>
      <!-- </a> -->
    </div>
    <!--//페이징-->
  </v-flex>
  <v-flex xs1></v-flex>
</v-layout>
</template>

<script>
import MapComponent from './Map'
import VotingList from '../../../components/Vote'
import VoteModal from '../../../components/VoteModal'
import VoteSplash from '../../../components/VoteSplash'

export default {

  name: 'Region',
  components: {
    MapComponent, VotingList, VoteModal, VoteSplash
  },
  data () {
    return{
      MOBILE_LIST_BOX_UNIT: 1,
      PC_LIST_BOX_UNIT: 2,
      mobileCheck: this.windowWidth < 960 ? true : false,
      currentPage: 1,
      MOBILE_PAGE_UNIT: 10, //한 리스트에 보여줄 데이터 수 - 닷 버튼 개수를 구하기위해 사용
      PC_PAGE_UNIT: 20,
      LIST_DATA_UNIT: 10, //하나의 리스트에 솨줄 데이터 갯수 단위
      DOTNUM: 1,
      startIndex: 0,
      windowWidth: window.innerWidth,
      regions1: [{name: "서울", color: '#157ACE' }, {name: "인천", color: '#69B3E4' }, {name: "경기", color: '#69B3E4' }, {name: "강원", color: '#E1241A' }, {name: "경북", color: '#E1241A'}],
      regions2: [{name: "충남", color: '#F37B7C' }, {name: "세종", color: '#F37B7C' }, {name: "대전", color: '#F37B7C' }, {name: "경남", color: '#E1241A' }, {name: "울산", color: '#F37B7C'}],
      regions3: [{name: "전남", color: '#00B6B5' }, {name: "전북", color: '#14CDCC' }, {name: "대구", color: '#F37B7C' }, {name: "부산", color: '#E1241A' }, {name: "충북", color: '#F37B7C'}],
      regions4: [{name: "제주", color: '#1783DC' }, {name: "광주", color: '#14CDCC' }],
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
  methods: {
    changeLike(num){
      this.$store.commit('putIsLike', num);
      this.$store.dispatch('getLegislatorListByRegion', {
        isLike: num,
        region: this.region
      });
    },
    setRegionData(regionParam, regionColor) {
      this.$store.commit('setRegion', regionParam)
      this.$store.commit('setRegionColor', regionColor)

      this.currentPage = 1;
      this.$store.dispatch('getLegislatorListByRegion', {
        isLike: this.getLike,
        region: regionParam
      });
    },

    getPagingNum(event) {
      var curPageNum = event.currentTarget.id;
      this.currentPage = curPageNum;
    },
    //화면별 분기 테이블 관련
    sendListInfo(listNum) {
      return {
        listBoxUnit: this.getListBoxUnit,
        windowWidth: this.windowWidth,
        isMobile: this.isMobile(),
        listNum: listNum,
        listUnit: this.LIST_DATA_UNIT,
        pageNum: this.currentPage,
        pageUnit: this.isMobile() ? this.MOBILE_PAGE_UNIT : this.PC_PAGE_UNIT,
        items: this.sliceItems(listNum)
      }
    },
    sliceItems(listNum) {
      if(!this.isMobile()){
        return this.items.slice(this.getStartIndex + (listNum-1) * this.LIST_DATA_UNIT, this.getStartIndex + this.LIST_DATA_UNIT * listNum);
      } else {
        return this.items.slice(this.getStartIndex, this.getStartIndex + this.LIST_DATA_UNIT);
      }
    },
    handleWindowResize(event) { this.windowWidth = event.currentTarget.innerWidth; },
    isMobile() {
      return (this.windowWidth < 960) ? true : false;
    }

  },
  computed:{
    regionColor: function() {
      return this.$store.getters.getRegionColor
    },
    region: function() {
      return this.$store.getters.getRegion
    },
    getLike: function() {
      return this.$store.getters.getIsLike
    },
    items: function() {
        return this.$store.getters.getRegionContents;
    },
    getListBoxUnit: function(){
      if(this.isMobile()){
        return this.MOBILE_LIST_BOX_UNIT;
      } else{
        return this.PC_LIST_BOX_UNIT;
      }
    },
    getDotNum: function(){
      if(this.isMobile()){
        // this.currentPage = Math.ceil(this.currentPage/2);
        return this.DOTNUM = Math.ceil(this.items.length / this.MOBILE_PAGE_UNIT);
      } else{
        return this.DOTNUM = Math.ceil(this.items.length / this.PC_PAGE_UNIT);//버튼개수 item.length / 10 or 20, item갯수는 axios통신으로 가져올것..
      }
    },
    getStartIndex: function() {
      var dotNum = this.DOTNUM;
      var dot = this.currentPage;
      if(this.isMobile()) {

        // console.log("here MOBILE ::: " + dotnum);
        this.startIndex = 10 * (dot - 1);
      } else {
        // console.log("here PC ::: " + dotnum);
        this.startIndex = this.PC_LIST_BOX_UNIT * 10 * (dot - 1);
      }
      return this.startIndex;
    },
    getLike: function() {
      return this.$store.getters.getIsLike;
    }
  },
  watch: {
    windowWidth: function() {
      if(!this.mobileCheck && this.windowWidth < 960){ // PC일때
        // this.DOTNUM = this.DOTNUM * 2 -1;
        this.currentPage = this.currentPage * this.PC_LIST_BOX_UNIT -1;

        this.mobileCheck = true;
      } else if(this.mobileCheck && this.windowWidth >=960){

        this.currentPage = Math.ceil(this.currentPage / this.PC_LIST_BOX_UNIT);
        this.mobileCheck = false;
      }
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  created() {
    this.$store.commit('setRegion', '서울')
    this.$store.commit('putIsLike', 1);

    this.$store.dispatch('getLegislatorListByRegion', {
      isLike: 1,
      region: '서울'
    });
  },

}
</script>

<style scoped>
@media (max-width: 959px) {
  img.region_text {
    margin-bottom: 3vh;
  }
  div.region_tab_bar {
    font-size: 4vw;
  }
  button.like_btn {
    width: 12.07vw;
    padding-top: 1.07vw;
    padding-bottom: 1.07vw;
    margin-left: 2.67vw;
    margin-top: 2.2vw;
    font-size: 2.13vw;
    border-width: 1px;
  }
  
  button.active_btn.like_btn {
    border-width: 1px;
  }
  div.member_count {
    font-size: 3.2vw;
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
.like_btn {
  width: 5.7vw;
  padding-top: 0.41vw;
  padding-bottom: 0.41vw;
  margin-left: 1.67vw;
  margin-top: 1.1vw;
  border: 2px solid #B4B4B4;
  border-radius: 30px;

  font-size: 0.88vw;
  font-family: NanumBarunGothic;
  color: #B4B4B4;
}
button.like_btn:hover {
  background: #B4B4B4;
  transition: 0.5;
  color: #fafafa;
}
button.like_btn.active_btn:hover {
  background: #FAFAFA;
  color: #36C5F1;
}
button.active_btn {
  border: 2px solid #36C5F1;
  color: #36C5F1;
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

.dot {
  height: 7px;
  width: 7px;
  margin-left: 4.15px;
  margin-right: 4.15px;
  background-color: #FFF;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #36C5F1;
}
.dot_box {
  margin-top: 11.21px;
  margin-bottom: 13.23px;
}

.dot.on {
  background-color: #36C5F1;
}
</style>

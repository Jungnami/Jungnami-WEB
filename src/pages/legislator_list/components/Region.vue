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
      <span v-on:click="getPagingNum($event)" v-bind:id="index" v-for="index in getDotNum" v-if="index >= 2" class="dot" v-bind:class="{ on : currentPage == index }"></span>
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

export default {

  name: 'Region',
  components: {
    MapComponent, VotingList
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
      active_region: {color: "#157ACE", name: "서울"},
      items: [
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민',
            party: '자유한국당',
            count: 1000
        }


      ]
    }


},
  methods: {
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
  }

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

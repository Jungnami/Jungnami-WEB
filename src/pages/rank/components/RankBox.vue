<template>

  <v-layout row wrap class="rank_box">

    <v-flex xs10 md12 offset-xs1 offset-md0>
      <v-layout row wrap justify-space-between>
        <div class="voting_list">
          <voting-list v-bind:list_info="sendListInfo(1)"></voting-list>
        </div>
        <div class="voting_list">
          <voting-list v-bind:list_info="sendListInfo(2)"></voting-list>
        </div>
        <div class="voting_list">
          <voting-list v-bind:list_info="sendListInfo(3)"></voting-list>
        </div>
      </v-layout>

      <!--페이징-->
      <div class="dot_box" align="center">
        <span class="dot" v-on:click="getPagingNum($event)" @click="showPageInfo" id="1" v-bind:class="{ on : currentPage == 1 }" ></span>
        <span class="dot" v-on:click="getPagingNum($event)" @click="showPageInfo" v-bind:id="index + 1" v-for="index in getDotNum-1" :key="index" v-bind:class="{ on : currentPage == index + 1 }"></span>
      </div>
      <!--//페이징-->
    </v-flex>
  </v-layout>
</template>

<script>
import VotingList from '../../../components/Vote'
export default {
  name: 'RankBox',
  components: {
    VotingList
  },
  data () {
    return{
      MOBILE_LIST_BOX_UNIT: 1,
      PC_LIST_BOX_UNIT: 3,
      mobileCheck: this.windowWidth < 960 ? true : false,
      currentPage: 1,
      MOBILE_PAGE_UNIT: 10, //한 리스트에 보여줄 데이터 수 - 닷 버튼 개수를 구하기위해 사용
      PC_PAGE_UNIT: 30,
      LIST_DATA_UNIT: 10, //하나의 리스트에 솨줄 데이터 갯수 단위
      DOTNUM: 1,
      startIndex: 0,
      windowWidth: window.innerWidth,
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
          name: '문재인1',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수2',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표3',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선4',
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
            name: '탁형민-5',
            party: '자유한국당',
            count: 1000
        },
        {
          id: 1,
          thumbnail: '../../static/img_avatar.png',
          name: '문재인-4',
          party: '더불어민주당',
          count: 1000
        },
        {
            id: 2,
            thumbnail: '../../static/img_avatar.png',
            name: '안철수-3',
            party: '정의당',
            count: 1000
        },
        {
            id: 3,
            thumbnail: '../../static/img_avatar.png',
            name: '홍준표-2',
            party: '자유한국당',
            count: 1000
        },
        {
            id: 4,
            thumbnail: '../../static/img_avatar.png',
            name: '명선-1',
            party: '더불어민주당',
            count: 1000
        },
        {
            id: 5,
            thumbnail: '../../static/img_avatar.png',
            name: '탁형민last',
            party: '자유한국당',
            count: 1000
        }


      ]
    }
},
  methods: {
    showPageInfo: function() {
      this.$emit('rankPageInfo', { num: this.currentPage });
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
        // isMobile: this.isMobile(),
        listNum: listNum,
        listUnit: this.LIST_DATA_UNIT,
        pageNum: this.currentPage,
        pageUnit: this.PC_PAGE_UNIT,
        items: this.sliceItems(listNum)
      }
    },
    sliceItems(listNum) {
        return this.items.slice(this.getStartIndex + (listNum-1) * this.LIST_DATA_UNIT, this.getStartIndex + this.LIST_DATA_UNIT * listNum);
    }

  },
  computed:{
    getListBoxUnit: function(){
        return this.PC_LIST_BOX_UNIT;
    },
    getDotNum: function(){
        return this.DOTNUM = Math.ceil(this.items.length / this.PC_PAGE_UNIT);//버튼개수 item.length / 10 or 20, item갯수는 axios통신으로 가져올것..
    },
    getStartIndex: function() {
      // console.log(this.getListBoxUnit);
      var dot = this.currentPage;
      this.startIndex = this.PC_LIST_BOX_UNIT * 10 * (dot - 1);
      console.log(this.startIndex);
      return this.startIndex;
    }
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
.rank_box
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
  width: 25.64vw;
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

<template>
<v-layout row wrap class="party_page">
  <v-flex xs10 md3 offset-xs1>
    <img src="../../../../static/party_main_text.png" alt="list_party_text" class="party_text">
    <v-layout row wrap justify-space-between class="btn_layout">
      <button v-for="(btn, i) in party_btns1" :key="i" :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
    <v-layout row wrap justify-space-between class="btn_layout">
      <button v-for="(btn, i) in party_btns2" :key="i" :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
  </v-flex>

  <v-flex xs10 md7 offset-xs1 offset-md0>
    <v-layout row wrap justify-space-between class="party_tab">
      <v-flex xs4 md2 class="party_tab_bar">
        <img :src="active_party.src" alt="active_party" class="active_party">
      </v-flex>
      <div class="member_count">국회의석 : 130석</div>
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
    <div class="dot_box" align="center">
      <!-- <a href="#" > -->
      <span v-on:click="getPagingNum($event)" id="1" class="dot" v-bind:class="{ on : currentPage == 1 }" ></span>
      <!-- </a> -->
      <!-- <a href="#" > -->
      <span v-on:click="getPagingNum($event)" v-bind:id="index + 1" v-for="index in getDotNum-1" :key="index" class="dot" v-bind:class="{ on : currentPage == index + 1 }"></span>
        <!-- </a> -->
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import VotingList from '../../../components/Vote'

export default {
  name: 'Party',
  data() {
    return {
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
      party_btns1: [{
          src: '../../../../static/party_blue_character.png',
          color: '#1783DC'
        },
        {
          src: '../../../../static/party_red_character.png',
          color: '#E1241A'
        },
        {
          src: '../../../../static/party_yellow_character.png',
          color: '#FCDC00'
        },
        {
          src: '../../../../static/party_orange_character.png',
          color: '#EC8C0D'
        }
      ],
      party_btns2: [{
          src: '../../../../static/party_mint_character.png',
          color: '#14CDCC'
        },
        {
          src: '../../../../static/party_blue_character.png',
          color: '#123167'
        },
        {
          src: '../../../../static/party_blue_character.png',
          color: '#3EA437'
        },
        {
          src: '../../../../static/party_blue_character.png',
          color: '#C6C6C6'
        }
      ],
      active_party: {
        src: "../../../../static/partylist_tab_blue_character.png"
      },
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
  components: {
    VotingList
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
      if (!this.isMobile()) {
        return this.items.slice(this.getStartIndex + (listNum-1) * this.LIST_DATA_UNIT, this.getStartIndex + this.LIST_DATA_UNIT * listNum);
      } else {
        return this.items.slice(this.getStartIndex, this.getStartIndex + this.LIST_DATA_UNIT);
      }
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    isMobile() {
      return (this.windowWidth < 960) ? true : false;
    }

  },
  computed: {
    getListBoxUnit: function(){
      if(this.isMobile()){
        return this.MOBILE_LIST_BOX_UNIT;
      } else{
        return this.PC_LIST_BOX_UNIT;
      }
    },
    getDotNum: function() {
      if (this.isMobile()) {
        // this.currentPage = Math.ceil(this.currentPage/2);
        return this.DOTNUM = Math.ceil(this.items.length / this.MOBILE_PAGE_UNIT);
      } else {
        return this.DOTNUM = Math.ceil(this.items.length / this.PC_PAGE_UNIT); //버튼개수 item.length / 10 or 20, item갯수는 axios통신으로 가져올것..
      }
    },
    getStartIndex: function() {
      var dot = this.currentPage;
      if (this.isMobile()) {

        // console.log("here MOBILE ::: " + dotnum);
        this.startIndex = 10 * (dot - 1);
      } else {
        // console.log("here PC ::: " + dotnum);
        // this.startIndex = 20 * (dot - 1);
        this.startIndex = this.PC_LIST_BOX_UNIT * 10 * (dot - 1);
      }
      return this.startIndex;
    }
  },
  watch: {
    windowWidth: function() {
      if (!this.mobileCheck && this.windowWidth < 960) {
        this.currentPage = this.currentPage * this.PC_LIST_BOX_UNIT -1;


        this.mobileCheck = true;
      } else if (this.mobileCheck && this.windowWidth >= 960) {
        // console.log("960<<<");

        this.currentPage = Math.ceil(this.currentPage / this.PC_LIST_BOX_UNIT);
        this.mobileCheck = false;
      }
    }
    // windowWidth: function() {
    // console.log(this.isMobile());
    // }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  button.party_btn {
    width: 16.85vw;
    height: 16.85vw;
    margin-bottom: 4.71vw;
  }
  div.btn_layout {
    padding-right: 0;
  }
  div.member_count {
    font-size: 3vw;
    padding-top: 15vw;
  }
  div.voting_list {
    width: 83vw;
  }
  div.party_tab_bar {
    height: 21vw;
  }
}

.party_page {
  margin-top: 4.63vh;
}

.party_text {
  width: 100%;
  margin-bottom: 3vh;
}

.btn_layout {
  padding-right: 5.1vw;
}

.party_btn {
  width: 8.66vw;
  height: 8.66vw;
  margin-bottom: 1.54vw;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}

.party_img {
  width: 100%;
}

.party_tab_bar {
  height: 7.4vw;
}

.active_party {
  width: 100%;
}

.member_count {
  font-family: NanumBarunGothic;
  font-size: 1.4vw;
  color: #A1A1A1;
  padding-top: 5vw;
}

hr {
  width: 100%;
  border: 0;
  height: 3px;
  background: #1783DC;
}

.voting_list {
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

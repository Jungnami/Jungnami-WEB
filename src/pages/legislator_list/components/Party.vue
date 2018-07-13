<template>
<v-layout row wrap class="party_page">
  <vote-splash v-if="this.$store.getters.getOpenVoteSplash"></vote-splash>
  <vote-modal v-if="this.$store.getters.getOpenVotePopUp"></vote-modal>
  <v-flex xs10 md3 offset-xs1>
    <img src="../../../../static/party_main_text.png" alt="list_party_text" class="party_text">
    <v-layout row wrap justify-space-between class="btn_layout">
        <button @click="setPartyInfo(btn.party_name, btn.color, btn.bannerSrc)" v-for="(btn, i) in party_btns1" :key="i" :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
    <v-layout row wrap justify-space-between class="btn_layout">
      <button @click="setPartyInfo(btn.party_name, btn.color, btn.bannerSrc)" v-for="(btn, i) in party_btns2" :key="i" :style="{backgroundColor: btn.color}" class="party_btn">
        <img :src="btn.src" alt="party_btn" class="party_img">
      </button>
    </v-layout>
  </v-flex>

  <v-flex xs10 md7 offset-xs1 offset-md0 >
    <v-layout row wrap class="party_tab">
      <v-flex xs4 md2 class="party_tab_bar">
        <img :src="bannerImg" alt="active_party" class="active_party">
      </v-flex>
      <v-flex xs8 md10>
        <v-layout row wrap justify-space-between>
          <div>
            <button class="like_btn" :class="getLike === 1? 'active_btn':''" @click="changeLike(1)">호감</button>
            <button class="like_btn" :class="getLike === 0? 'active_btn':''" @click="changeLike(0)">비호감</button>
          </div>
          <div class="member_count">국회의석 : {{ items.length }} 석</div>
        </v-layout>
      </v-flex>
      <hr :style="{background: partyColor}">
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
      <span v-on:click="getPagingNum($event)" v-bind:id="index" v-for="index in getDotNum" :key="index" v-if=" index >= 2" class="dot" v-bind:class="{ on : currentPage == index}"></span>
        <!-- </a> -->
    </div>
  </v-flex>
</v-layout>
</template>

<script>
import VotingList from '../../../components/Vote'
import VoteModal from '../../../components/VoteModal'
import VoteSplash from '../../../components/VoteSplash'

export default {
  name: 'Party',
  data() {
    return {
      bannerImg: '../../../../static/partylist_tab_blue_character.png',
      partyColor: '#1783DC',
      party: '더불어민주당',
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
          bannerSrc: '../../../../static/partylist_tab_blue_character.png',
          color: '#1783DC',
          party_name: '더불어민주당'
        },
        {
          src: '../../../../static/party_red_character.png',
          bannerSrc: '../../../../static/partylist_tab_red_character.png',
          color: '#E1241A',
          party_name: '자유한국당'
        },
        {
          src: '../../../../static/party_yellow_character.png',
          bannerSrc: '../../../../static/partylist_tab_yellow_character.png',
          color: '#FCDC00',
          party_name: '정의당'
        },
        {
          src: '../../../../static/party_orange_character.png',
          bannerSrc: '../../../../static/legislatorlist_party_tag_minjoong.png',
          color: '#EC8C0D',
          party_name: '민중당'
        }
      ],
      party_btns2: [{
          src: '../../../../static/party_mint_character.png',
          bannerSrc: '../../../../static/partylist_tab_mint_character.png',
          color: '#14CDCC',
          party_name: '바른미래당'
        },
        {
          src: '../../../../static/party_button_indigo.png',
          bannerSrc: '../../../../static/partylist_tab_indigo_character.png',
          color: '#123167',
          party_name: '대한애국당'
        },
        {
          src: '../../../../static/party_button_green.png',
          bannerSrc: '../../../../static/partylist_tab_green_character.png',
          color: '#3FC335',
          party_name: '민주평화당'
        },
        {
          src: '../../../../static/party_button_gray.png',
          bannerSrc: '../../../../static/partylist_tab_gray_character.png',
          color: '#C6C6C6',
          party_name: '무소속'
        }
      ],

    }
  },
  components: {
    VotingList, VoteModal, VoteSplash
  },

  methods: {
    changeLike(num){
      this.$store.commit('putIsLike', num);
      this.$store.dispatch('getLegislatorListByParty', {
        isLike: num,
        party_name: this.party
      });
    },
    setPartyInfo(partyName, partyColor, bannerSrc) {

      this.currentPage = 1;


      this.bannerImg = bannerSrc;
      this.party = partyName;
      this.partyColor = partyColor;
      // console.log(partyColor);
      this.$store.dispatch('getLegislatorListByParty', {
        isLike: this.getLike,
        party_name: partyName
      });
    },
    getPagingNum(event) {
      var curPageNum = event.currentTarget.id;
      this.currentPage = curPageNum;
    },
    //화면별 분기 테이블 관련
    sendListInfo(listNum) {
      return {
        partyColor: this.partyColor,
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

        this.startIndex = 10 * (dot - 1);
      } else {
        this.startIndex = this.PC_LIST_BOX_UNIT * 10 * (dot - 1);
      }
      return this.startIndex;
    },
    getLike: function() {
      return this.$store.getters.getIsLike;
    },
    items: function() {
      this.DOTNUM = 1;
      return this.$store.getters.getPartyContents;
    }
  },
  watch: {
    windowWidth: function() {
      if (!this.mobileCheck && this.windowWidth < 960) {
        this.currentPage = this.currentPage * this.PC_LIST_BOX_UNIT -1;


        this.mobileCheck = true;
      } else if (this.mobileCheck && this.windowWidth >= 960) {

        this.currentPage = Math.ceil(this.currentPage / this.PC_LIST_BOX_UNIT);
        this.mobileCheck = false;
      }
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize);
  },
  created() {
    this.$store.commit('putIsLike', 1);
    this.$store.dispatch('getLegislatorListByParty', {
      isLike: 1,
      party_name: '더불어민주당'
    });
    this.$store.dispatch('getPostingView', this.$route.params.id);


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
  button.like_btn {
    width: 12.07vw;
    padding-top: 1.07vw;
    padding-bottom: 1.07vw;
    margin-left: 2.67vw;
    margin-top: 13.2vw;
    font-size: 2.13vw;
    border-width: 1px;
  }
  button.active_btn.like_btn {
    border-width: 1px;
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
  transition: 0.5s;
}
.party_img:hover
{
  transition: 0.5s;
  transform: scale(1.2)
}

.party_tab_bar {
  height: 7.4vw;
  width: 22vw;
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
.like_btn {
  width: 5.7vw;
  padding-top: 0.41vw;
  padding-bottom: 0.41vw;
  margin-left: 1.67vw;
  margin-top: 4.5vw;
  border: 2px solid #B4B4B4;
  border-radius: 30px;

  font-size: 0.88vw;
  font-family: NanumBarunGothic;
  color: #B4B4B4;
}
.like_btn:hover
{
  background: #B4B4B4;
  transition: 0.5;
  color: rgb(255, 255, 255);
}
.like_btn.active_btn:hover
{
  background: #FAFAFA;
  color: #36C5F1;
}
button.active_btn {
  border: 2px solid #36C5F1;
  color: #36C5F1;
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
  height: 10px;
  width: 10px;
  margin-left: 4.15px;
  margin-right: 4.15px;
  background-color: #FFF;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid #36C5F1;
}

.dot_box {
  margin-top: 26.21px;
  margin-bottom: 0.23px;
}

.dot.on {
  background-color: #36C5F1;
}
</style>

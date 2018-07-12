<template>
<div class="vote">
  <!--리스팅될 화면 pc: 1117.88, tablet: 648.71-->
  <v-list class="vote_list">

    <template v-for="(item, index) in listInfo.items">
    <div class="vote_container" :key="index" :style="{backgroundColor: bg_color[index%2]}">
      <div class="vote_content">
        <div class="rank_box">
          <div class="rank_border">
            <div class="img" v-if="isLike === 1" v-bind:class="[checkGold(index) ? 'gold_medal' : '', checkSilver(index) ? 'silver_medal' : '', checkBronze(index) ? 'bronze_medal' : '']">
              <div class="content" >
                {{ item.ranking }}
              </div>
            </div>
            <div class="img" v-if="isLike === 0" v-bind:class="[checkGold(index) ? 'gold_bomb' : '', checkSilver(index) ? 'silver_bomb' : '', checkBronze(index) ? 'bronze_bomb' : '']">
              <div class="content" >
                {{ item.ranking }}
              </div>
            </div>
          </div>
        </div>
        <div class="thumbnail_box">
          <div class="thumbnail_border">
            <img :src="item.profileimg" alt="Avatar" class="thumbnail_content" style="display: block;">
          </div>
        </div>

        <div class="progress_box">
          <div class="progress_border">
            <div class="progress_percent" :style="{ width: (item.width * 100) + '%'}">
            </div>
            <div class="progress_info">
              <div>
                <span class="name">{{item.l_name}}</span><span class="party">&nbsp;_{{item.party_name}}</span><span class="count">{{item.score}}표</span>
              </div>
            </div>


          </div>
        </div>

        <div class="emotion" :style="{backgroundImage: emotion[isLike]}" @click="vote(item.l_id)">
          <!-- <img src="" style="display: block;"/> -->

        </div>
      </div>
    </div>
    </template>
  </v-list>

</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Vote',
  props: ['list_info'],
  methods: {
    checkGold(index){
      if(this.list_info.listNum == 1 && this.list_info.pageNum == 1 && index == 0){
        return true;
      }
    },
    checkSilver(index){
      if(this.list_info.listNum == 1 && this.list_info.pageNum == 1 && index == 1){
        return true;
      }
    },
    checkBronze(index){
      if(this.list_info.listNum == 1 && this.list_info.pageNum == 1 && index == 2){
        return true;
      }
    },
    vote (l_id) {
      this.$store.commit('changeOpenVotePopUp')
      this.$store.commit('enrollLegislatorId', l_id)
    }

    // 페이징 관련 끝
  },
  computed: {
    ...mapGetters ({
      isLike: 'getIsLike'
    }),
    listInfo: function(){
      return {
        windowWidth: this.list_info.windowWidth,
        listNum: this.list_info.listNum,
        listUnit: this.list_info.listUnit,
        pageNum: this.list_info.pageNum,
        isMobile: this.list_info.isMobile,
        items: this.list_info.items,
        pageUnit: this.list_info.pageUnit
      }
    },
  },
  data () {
    return{
      currentPage: 1,
      PAGEUNIT: this.list_info.pageUnit, // 한화면에 보여줄 데이터 갯수, 즉 PC갯수 = MOBILE*2
      LISTUNIT: this.list_info.listUnit, // 하나의 리스트에 보여줄 데이터 갯수
      bg_color: ['background-color: rgba(0, 0, 0, 0.05)', 'white'],
      emotion: ['url("/static/vote_bad_icon_red.png")', 'url("/static/mypage_button_myvote.png")']
    }
  }
}
</script>


<style scoped>
/*root : 549px*/

@media (max-width: 960px) {
  div.content {
    left: -5%;
    top: 20%;
    position: relative;
    text-align: center;
    font-size: 2.5vw;
    font-family: NanumBarunGothic;
    color: #36C5F1;
    z-index: 2;
  }
  .emotion {
    width: 11%;
    display: table-cell;
    background-position: center;
    background-size: 5.4vw 5.4vw;
    position: relative;
    left: -2.5%;
    cursor: pointer;
  }
  .progress_info div{
    z-index: 4;
    font-size: 2.655vw;
    font-family: NanumBarunGothic;
    position: absolute;
    width: 100%;
    color: #666666;
    top: 7%;
    left: 9%;
  }


  .progress_info .name {
    font-family: NanumBarunGothicBold;
    font-size: 2.76vw;

  }

  .progress_info .party {
    font-family: NanumBarunGothic;
    font-size: 2.76vw;
  }


  .progress_info .count {
    font-family: NanumBarunGothicBold;
    padding-left: 0.92vw;
    font-size: 2.76vw;
  }

}

@media (min-width: 960px) {
  .content {
    /* Centered text */
    left: -5%;
    top: 10%;
    position: relative;
    text-align: center;
    /*font-size: 1.2vw;*/
    font-family: NanumBarunGothic;
    color: #36C5F1;
    z-index: 2;
    /*border: 1px solid #1783DC;*/
  }
  .emotion {
    width: 11%;
    display: table-cell;
    background-position: center;
    background-size: 1.8vw 1.8vw;
    position: relative;
    left: -2.5%;
    cursor: pointer;
  }
  .progress_info div{
    z-index: 4;
    font-size: 0.885vw;
    font-family: NanumBarunGothic;
    position: absolute;
    width: 100%;
    color: #666666;
    top: 7%;
    left: 9%;
  }

  .progress_info .name {
    font-family: NanumBarunGothicBold;
    font-size: 0.92vw;

  }

  .progress_info .party {
    font-family: NanumBarunGothic;
    font-size: 0.92vw;
  }


  .progress_info .count {
    font-family: NanumBarunGothicBold;
    font-size: 0.92vw;
    padding-left: 0.52vw;
  }

}



/*.count {
  font-family: NanumBarunGothicLight;
  top: 15%;
  right: 10%;
}*/
div.vote_list {
  padding: 0;
}

.vote_list {
  align-items: center;

  width: 100%;
}


.vote_container {
  width: 100%;
  /*height:90%;*/
  /*height: 4%;*/
  /*height: auto;*/
  /*position: relative;*/
  background-color: rgba(0, 0, 0, 0.05);
}

.vote_content {
  height: 80%;
  display: table;
}

.rank_box {
  width: 17%;
  display: table-cell;
  position: relative;
  vertical-align: top;
  z-index: 1;
  /*border: 1px solid #1783DC;*/
}

.rank_border {
  position: relative;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  /*align-items:center;*/
}

.img {
  /*top: 50%;*/
  /*top: 200px;*/
  position: relative;
  top: 10%;
  height: 80%;
  width: 50%;
  margin: 0 auto;
  /*background-image: url('../../static/partylist_goldmedal.png');*/
  background-size: contain;
  /*border: 2px solid #1783DC;*/
}

.img.gold_medal {
  background-image: url('/static/partylist_goldmedal.png');
}
.img.gold_bomb {
  background-image: url('/static/partylist_goldbomb.png');
}
.img.silver_medal {
  background-image: url('/static/partylist_silvermedal.png');
}
.img.silver_bomb {
  background-image: url('/static/partylist_silverbomb.png');
}
.img.bronze_medal {
  background-image: url('/static/partylist_bronzemedal.png');
}
.img.bronze_bomb {
  background-image: url('/static/partylist_bronzebomb.png');
}
.img.gold_medal .content, .img.silver_medal .content, .img.bronze_medal .content,
.img.gold_bomb .content, .img.silver_bomb .content, .img.bronze_bomb .content
{
  font-size: 0px;
  /*color: white;*/
}

/* .rank를 기준으로 가운데에 텍스트가필요한 부분*/

.content {
  /* Centered text */
  left: -5%;
  top: 35%;
  position: relative;
  text-align: center;
  font-size: 0.83vw;
  font-family: NanumBarunGothic;
  color: #36C5F1;
  /*border: 1px solid #1783DC;*/
}



.thumbnail_box {
  width: 14%;
  height: 100%;
  display: table-cell;
  vertical-align: top;

}

.thumbnail_border {
  padding-top: 10%;
  padding-bottom: 10%;
  position: relative;

}

.thumbnail_content {
  width: 80%;
  height: auto;
  border: 1px solid #000;

  /*height: 10px*/
  border-radius: 50%;
  vertical-align: baseline;
  /*border: 0.35vw solid #1783DC;*/
  border: 2px solid #1783DC;
  position: relative;
  z-index: 1;
}


.progress_box {
  display: table-cell;
  width: 58%;
  /*position: relative;*/
  /*right: +13px;*/
  z-index: 0;
}

.progress_border {
  position: relative;
  height: 75%;
  width: 100%;
  padding-top: 10%;
  left: -10%;

  /*padding-top: 10%;
  padding-bottom: 10%;*/
}

.progress_percent {
  position: relative;
  height: 100%;
  background-color: #36C5F1;
  padding-bottom: 7.5%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.progress_info div{
  z-index: 4;
  font-size: 0.5vw;
  font-family: NanumBarunGothic;
  /*position: absolute;*/
  color: #666666;
  top: 7%;
}









/*.name
{
  z-index: 4;
  color: white;
  font-size: 1vw;
  font-family: NanumBarunGothic;
  position: absolute;
  top: 15%;
  left: 8%;
  /*top: 38%;*/
/*}*/
/*.count
{
  text-align: right;
  font-size: 1vw;
  font-family: NanumBarunGothicLight;
  color: white;
  position: absolute;
  top: 15%;
  right: 7%;*/
  /*position: relative;*/
/*}*/



/*.vote_container {
  width: 324.29px;
  height: 60.13px;
  display: inline-block;
  background-color: '#000';
}

.vote_box {
  width: 300px;
  background: #000;
}

.vote_progress {
  width: 80%;
}*/
</style>

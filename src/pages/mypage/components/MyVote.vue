<template>
<v-flex xs10 offset-xs1 class="my_vote">
  <v-layout row nowrap justify-center>
    <img src="../../../../static/mypage_icon-vote.png" alt="change_explain_img" class="change_img">
  </v-layout>
  <v-layout column wrap justify-center class="vote_explain">
    <div>투표권 전환방법!</div>
    <div class="explain_text">국회의원에게 투표를 하기 위해 코인으로 투표권을 전환할 수 있습니다.<br> 충전한 코인을 통해 투표권을 전환할 수 있습니다.</div>
  </v-layout>
  <v-layout justify-center>
    <div>
      <input type="text" placeholder="투표권(갯수)" class="change_input" v-model="exCoin" @keypress="isNumber($event)">
      <div class="my_coin">나의 보유 코인 <span>{{ mypage_data.coin - (exCoin ? exCoin : 0)}}코인</span></div>
    </div>
  </v-layout>
  <v-layout>
    <button v-if="mypage_data.coin - exCoin >= 0 && exCoin != 0" class="change_btn" @click="exchangeCoinToVote()">전환하기</button>
    <button v-if="mypage_data.coin - exCoin < 0 || exCoin == 0" class="change_btn" :style="{background: '#EBEBEB'}">전환하기</button>
  </v-layout>
</v-flex>
</template>

<script>
export default {
  name: 'MyVote',
  props: ['mypage_data'],
  data() {
    return {
      exCoin: null
    }
  },
  methods: {
    exchangeCoinToVote() {
      const object = {
        coin: this.exCoin
      }
      this.$store.dispatch('exchangeCoin', object)

    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.my_vote {
    border: none;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  }
  img.change_img {
    width: 41.07vw;
    height: 15.73vw;
    margin-top: 5.77vw;
    margin-bottom: 6.27vw;
  }
  div.vote_explain {
    font-size: 2.67vw;
    padding-top: 3.47vw;
  }
  div.vote_explain .explain_text {
    line-height: 3.73vw;
    margin-top: 1.6vw;
    margin-bottom: 5.07vw;
  }
  input.change_input {
    width: 78.8vw;
    margin-top: 2.27vw;
    padding-top: 1.47vw;
    padding-bottom: 1.47vw;
    font-size: 4vw;
  }
  div.my_coin {
    font-size: 2.93vw;
    margin-top: 1.87vw;
    margin-bottom: 3.73vw;
  }
  button.change_btn {
    padding-top: 3vw;
    padding-bottom: 3vw;
    font-size: 4vw;
  }
}

.my_vote {
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
}

.change_img {
  width: 15.73vw;
  height: 6vw;
  margin-top: 2.6vw;
  margin-bottom: 1.25vw;
}

.vote_explain {
  text-align: center;
  background: #F9F9FB;
  font-family: NanumBarunGothic;
  font-size: 1.3vw;
  color: #707070;
  padding-top: 1.25vw;
  border-bottom: 1px solid #D3D3D3;
  border-top: 1px solid #D3D3D3;
  ;
}

.vote_explain .explain_text {
  color: #B7B7B7;
  line-height: 2.34vw;
  margin-top: 1vw;
  margin-bottom: 1.8vw;
}

.change_input {
  width: 40.31vw;
  border-bottom: 1.2px solid #36C5F1;
  margin-top: 0.94vw;
  padding-top: 1.23vw;
  padding-bottom: 1.23vw;
  font-family: NanumBarunGothic;
  font-size: 1.82vw;
  color: #707070;
}

.change_input::-webkit-input-placeholder {
  color: #9B9B9B;
}

.change_input:-ms-input-placeholder {
  color: #9B9B9B;
}

.my_coin {
  font-family: NanumBarunGothicLight;
  font-size: 1.35vw;
  color: #757575;
  margin-top: 1.22vw;
  margin-bottom: 2.6vw;
}

.my_coin span {
  color: #36C5F1;
}

.change_btn {
  width: 100%;
  background: #36C5F1;
  text-align: center;
  padding-top: 1.46vw;
  padding-bottom: 1.46vw;
  font-family: NanumBarunGothicBold;
  font-size: 1.56vw;
  color: white;
}
</style>

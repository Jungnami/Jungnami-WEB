<template>
<v-flex xs10 offset-xs1 class="my_coin">
  <v-layout row wrap justify-center align-center class="coin_amount">
    <div>나의 코인</div>
    <div class="coin">72 코인</div>
  </v-layout>
  <v-layout column wrap justify-center class="coin_explain">
    <div>정나미 코인이란?</div>
    <div class="explain_text">국회의원의 호감, 비호감을 투표하기 위해 필요한 Point 입니다.<br>
    결제를 통해 구매하거나 서비스 이용을 통해 무료로 얻을 수 있습니다.</div>
  </v-layout>
  <v-layout justify-space-around class="hidden-sm-and-down">
    <div v-for="item in btn_info.slice(0, 3)" :key="item.coin" class="btn_wrapper">
      <v-layout justify-space-between>
        <div>
          <img src="/static/mypage_button_mycoin.png" alt="mycoin_icon" class="mycoin_icon">
          <div class="mycoin_coin_amount">정나미 {{ item.coin }}코인</div>
        </div>
        <button class="charge_btn">{{ item.won }} &#8361;</button>
      </v-layout>
    </div>
  </v-layout>
  <v-layout class="btns_second hidden-sm-and-down" justify-space-around>
    <div v-for="item in btn_info.slice(3)" :key="item.coin" class="btn_wrapper">
      <v-layout justify-space-between>
        <div>
          <img src="/static/mypage_button_mycoin.png" alt="mycoin_icon" class="mycoin_icon">
          <div class="mycoin_coin_amount">정나미 {{ item.coin }}코인</div>
        </div>
        <button class="charge_btn">{{ item.won }} &#8361;</button>
      </v-layout>
    </div>
  </v-layout>
  <v-layout row wrap justify-center class="hidden-md-and-up mobile_btn_group">
    <div v-for="item in btn_info" :key="item.coin" class="btn_wrapper">
      <v-layout justify-space-between>
        <div>
          <img src="/static/mypage_button_mycoin.png" alt="mycoin_icon" class="mycoin_icon">
          <div class="mycoin_coin_amount">정나미 {{ item.coin }}코인</div>
        </div>
        <button class="charge_btn">{{ item.won }} &#8361;</button>
      </v-layout>
    </div>
  </v-layout>
</v-flex>
</template>

<script>
export default {
  name: 'MyCoin',
  data () {
    return {
      btn_info: [
        {coin: 10, won: 1000},
        {coin: 33, won: 3000},
        {coin: 57, won: 5000},
        {coin: 79, won: 7000},
        {coin: 115, won: 10000}
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.my_coin {
    border: none;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.16);
  }
  div.coin_amount {
    height: 18.67vw;
    font-size: 4.27vw;
  }
  div.coin_amount .coin {
    margin-left: 8.24vw;
  }
  div.coin_explain {
    font-size: 2.67vw;
    padding-top: 3.47vw;
  }
  div.coin_explain .explain_text {
    line-height: 3.73vw;
    margin-top: 1.6vw;
    margin-bottom: 5.07vw;
  }
  .mobile_btn_group {
    padding-bottom: 8vw;
  }
  div.btn_wrapper {
    margin-top: 4.27vw;
  }
  div.btn_wrapper > div {
    width: 75.03vw;
  }  
  div.btn_wrapper > div > div {
    padding-top: 1vw;
  }
  img.mycoin_icon {
    height: 4.45vw;
    width: 4.45vw;
    margin-right: 3.37vw;
  }
  div.mycoin_coin_amount {
    font-size: 3.47vw;
  }
  button.charge_btn {
    width: 21.07vw;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    font-size: 3.2vw;
  }
}
.my_coin
{
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
}
.coin_amount
{
  height: 7.55vw;
  font-family: NanumBarunGothic;
  font-size: 1.67vw;
  color: #3C3C3C;
}
.coin_amount .coin
{
  color: #36C5F1;
  margin-left: 5.42vw;
}
.coin_explain
{
  text-align: center;
  background: #F9F9FB;
  font-family: NanumBarunGothic;
  font-size: 1.3vw;
  color: #707070;
  padding-top: 1.25vw;
  border: 1px solid #D3D3D3;
}
.coin_explain .explain_text
{
  color: #B7B7B7;
  line-height: 2.34vw;
  margin-top: 1vw;
  margin-bottom: 1.8vw;
}
.btn_wrapper
{
  margin-top: 2.03vw;
}
.btn_wrapper > div
{
  width: 22.85vw;
}
.btn_wrapper > div > div
{
  padding-top: 0.6vw;
}
.mycoin_icon
{
  height: 1.35vw;
  width: 1.35vw;
  margin-right: 0.49vw;
  vertical-align: text-bottom;
}
.mycoin_coin_amount
{
  display: inline-block;
  font-family: NanumBarunGothic;
  font-size: 1.15vw;
  color: #3C3C3C;
}
.charge_btn
{
  text-align: center;
  width: 7.08vw;
  padding-top: 0.33vw;
  padding-bottom: 0.33vw;
  font-family: NanumBarunGothic;
  font-size: 1.15vw;
  color: #36C5F1;
  border: 1px solid #36C5F1;
  border-radius: 22px;
}
.btns_second
{
  margin-right: 27.3vw;
  margin-bottom: 2.75vw;
}
</style>

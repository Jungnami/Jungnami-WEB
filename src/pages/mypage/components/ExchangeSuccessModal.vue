<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        <div class="success_text"><span>전환</span>이<br>완료되었습니다!</div>
        <button class="yes_btn" @click="pressOk">확인</button>
      </div>
    </div>
  </div>
</transition>  
</template>

<script>
export default {
  name: 'ExchangeSuccessModal',
  methods: {
    pressOk () {
      location.reload(true)
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.modal_container {
    width: 315px;
    height: 182px;
  }
  div.success_text {
    font-size: 21px;
    line-height: 33px;
    padding-top: 55px;
    margin-bottom: 10px;
  }
  button.yes_btn {
    width: 125px;
    padding-top: 5px;
    padding-bottom: 8px;
    font-size: 11px;
  }
}
.modal_mask
{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal_wrapper 
{
  display: table-cell;
  vertical-align: middle;
}
.modal_container 
{
  width: 640px;
  height: 375px;
  margin: 0px auto;
  background-image: url('/static/mypage_popup_vote_fin.png');
  background-size: 100% 100%;
  transition: all .3s ease;
  text-align: center;
}
.success_text
{
  font-family: NanumBarunGothic;
  font-size: 43px;
  color: #6B6B6B;
  line-height: 68px;

  padding-top: 120px;
  margin-bottom: 20px;
}
.success_text span
{
  font-family: NanumBarunGothicBold;
  color: #36C5F1;
}
.yes_btn
{
  width: 255px;
  padding-top: 10px;
  padding-bottom: 14px;
  font-family: NanumBarunGothic;
  font-size: 23px;
  color: white;
  background: #36C5F1;
  border-radius: 29px;
}
</style>

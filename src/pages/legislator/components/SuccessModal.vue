<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        <div class="complete_text">후원완료!</div>
        <div class="complete_explain">김병관 님께<br><span class="coin_amount">50 </span><span>코인</span>을<br>후원하셨습니다.</div>
        <button class="ok_btn">확인</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'SuccessModal'
}
</script>

<style scoped>
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
  height: 580px;
  margin: 0px auto;
  background-image: url('/static/popup_manycoin.png');
  background-size: 100% 100%;
  transition: all .3s ease;
  text-align: center;
}
.complete_text
{
  font-family: NanumBarunGothic;
  font-size: 38px;
  color: #36C5F1;
  margin-top: 240px;
  margin-bottom: 22px;
}
.complete_explain
{
  font-family: NanumBarunGothicLight;
  font-size: 30px;
  color: #6B6B6B;
  margin-bottom: 26px;
  line-height: 50px;
}
.complete_explain span
{
  color: #36C5F1;
}
.complete_explain .coin_amount
{
  font-size: 40px;
}
.ok_btn
{
  width: 255px;
  padding-left: 11px;
  padding-right: 16px;

  font-family: NanumBarunGothic;
  font-size: 23px;
  color: white;
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

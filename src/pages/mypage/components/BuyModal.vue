<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        <div class="check_buy">정나미 <span>{{ buyCoin }}코인</span>을<br>구매하시겠습니까?</div>
        <v-layout justify-space-between class="my_coin">
          <div>나의 코인</div>
          <div class="coin_amount">{{ myCoin }}코인</div>
        </v-layout>
        <v-layout justify-space-between class="btn_group">
          <button class="yes_btn" @click="checkBuying">확인</button>
          <button class="no_btn" @click="$emit('closeModal')">취소</button>
        </v-layout>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'BuyModal',
  props: ['myCoin', 'buyCoin'],
  methods: {
    checkBuying () {
      const object = {
        point: this.buyCoin
      }
      this.$store.dispatch('postBuyCoin', object)
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.modal_container {
    width: 312px;
    height: 255px;
  } 
  div.check_buy {
    padding-top: 102px;
    font-size: 17px;
  }
  div.my_coin {
    margin-top: 15px;
    margin-bottom: 26px;
    margin-left: 26px;
    margin-bottom: 26px;
    font-size: 11px;
  }
  div.btn_group {
    margin-left: 19px;
    margin-right: 19px;
  }
  div.btn_group button {
    width: 124px;
    padding-top: 5px;
    padding-bottom: 8px;
    font-size: 10px;
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
  height: 580px;
  margin: 0px auto;
  background-image: url('/static/popup_coin_people.png');
  background-size: 100% 100%;
  transition: all .3s ease;
  text-align: center;
}
.check_buy
{
  padding-top: 240px;
  font-family: NanumBarunGothic;
  font-size: 38px;
  color: #6B6B6B;
}
.check_buy span
{
  font-family: NanumBarunGothicBold;
  color: #36C5F1;
}
.my_coin
{
  margin-left: 55px;
  margin-right: 55px;
  margin-top: 20px;
  margin-bottom: 53.5px;

  font-family: NanumBarunGothicLight;
  font-size: 24px;
  color: #6B6B6B;
  border-bottom: 1px solid #D8D8D8;
}
.coin_amount
{
  color: #36C5F1;
}
.btn_group
{
  margin-left: 39px;
  margin-right: 39px;
}
.btn_group button
{
  width: 255px;
  padding-top: 10px;
  padding-bottom: 14px;
  border-radius: 29px;

  font-family: NanumBarunGothic;
  font-size: 23px;
  color: white;
}
.yes_btn
{
  background: #36C5F1;
}
.no_btn
{
  background: #E2E2E2;
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

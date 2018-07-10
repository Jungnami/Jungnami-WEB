<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        
        <div class="vote_title">투표 하시겠습니까?</div>
        <div class="my_vote">나의 보유 투표권 : {{ this.$store.getters.getVotingCount }}개</div>
        <v-layout justify-space-between class="button_wrapper">
          <button class="yes_btn">예</button>
          <button class="no_btn">아니오</button>
        </v-layout>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'VoteModal',
  created () {
    this.$store.dispatch('getVotingCount')
  }
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
  width: 33.33vw;
  height: 16.98vw;
  margin: 0px auto;
  text-align: center;
  transition: all .3s ease;
  background: white;
  border-radius: 8px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.41);
}
.vote_title
{
  font-family: NanumBarunGothic;
  font-size: 2.08vw;
  color: #666666;
}
.my_vate
{
  font-family: NanumBarunGothicLight;
  font-size: 1.56vw;
  color: #6B6B6B;
}
.button_wrapper
{
  margin-left: 2.03vw;
  margin-right: 2.03vw;
}
.yes_btn
{
  background: #36C5F1;
  border-radius: 29px;
  font-family: NanumBarunGothic;
  font-size: 0.63vw;
  color: white;
}
.no_btn
{
  background: #E2E2E2;
  border-radius: 29px;
  font-family: NanumBarunGothic;
  font-size: 0.63vw;
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

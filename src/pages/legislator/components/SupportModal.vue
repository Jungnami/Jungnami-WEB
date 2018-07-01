<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        
        <div class="support_title">후원하기</div>
        <div class="my_coin_wrapper">
          <div class="my_coin">
            나의 코인
            <span>100코인</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {

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
  width: 457px;
  height: 616px;
  margin: 0px auto;
  background-image: url('../../../../static/support_modal_bg.png');
  transition: all .3s ease;
}
.support_title
{
  padding-top: 267px;
  font-size: 33px;
  color: #6B6B6B;
  text-align: center;
}
.my_coin
{
  height: 55px;
  margin-top: 28px;
  margin-left: 32px;
  margin-right: 32px; 
  background-color: #F7F7F7;
  border: 0.25px solid #707070;
  
  padding-left: 17px;
  padding-top: 17px;
  font-size: 17px;
  text-align: left;
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

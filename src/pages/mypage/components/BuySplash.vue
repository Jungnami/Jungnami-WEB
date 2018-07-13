<template>
<transition name="splash"
  leave-active-class="animated fadeOut">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <img src="/static/mypage_buy_coin_splash.png" alt="vote_animation" class="modal_container animated zoomIn">      
    </div>
  </div>
</transition>
</template>

<script>
import { store } from '../../../store/store'
export default {
  name: 'BuySplash',
  created () {
    setTimeout(function(){
      store.commit('changeOpenBuySplash')
      console.log('setTime~') }, 800);
  }
}
</script>

<style scoped> 
@media (max-width: 600px) {
  img.modal_container {
    width: 217px;
    height: 175px;
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
  text-align: center;
}
.modal_container
{
  width: 434px;
  height: 350px;
  margin: 0px auto;
}
</style>

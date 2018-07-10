<template>
<transition name="splash"
  leave-active-class="animated fadeOut">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <img :src="item_src[this.$store.getters.getIsLike]" alt="vote_animation" class="modal_container animated bounceIn">      
    </div>
  </div>
</transition>
</template>

<script>
import { store } from '../store/store'
export default {
  name: 'VoteSplash',
  data () {
    return {
      item_src: ['/static/vote_animation_icon_red.png', '/static/vote_animation_icon_blue.png']
    }
  },
  created () {
    setTimeout(function(){
      store.commit('changeOpenVoteSplash')
      console.log('setTime~') }, 800);
  }
}
</script>

<style scoped> 
@media (max-width: 600px) {
  img.modal_container {
    width: 35.2vw;
    height: 35.2vw;
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
  width: 15.63vw;
  height: 15.63vw;
  margin: 0px auto;
}
</style>

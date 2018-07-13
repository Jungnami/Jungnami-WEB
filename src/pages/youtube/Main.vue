<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container" v-if="contentsInfo">
        <iframe :src="contentsInfo.youtube" frameBorder="0" id="video"></iframe>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Youtube',
  computed: {
    ...mapGetters({
      contentsInfo: 'getContentsDetail'
    })
  }

}
</script>

<style>
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
  width: 100%;
  height: 100%;
  margin: 0px auto;
  text-align: center;
  transition: all .3s ease;
  border-radius: 8px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.41);
}
#video
{
  width: 100%;
  height: 100%;
}
</style>

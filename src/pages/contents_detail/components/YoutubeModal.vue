<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container">
        <div class="close_btn"><v-icon large @click="close">close</v-icon></div>
        <iframe :src="url" frameBorder="0" id="video"></iframe>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Youtube',
  props: ['contentsInfo'],
  computed: {
    url () {
      return `https://www.youtube.com/embed/${this.contentsInfo.youtube}`
    }
  },
  methods: {
    close () {
      this.$router.go(-1)
    }
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
  width: 72vw;
  height: 45vw;
  margin: 0px auto;
  text-align: center;
  transition: all .3s ease;
}
.close_btn
{
  margin-top: 8vh;
  text-align: right;
}
#video
{
  width: 100%;
  height: 90%;
}
</style>

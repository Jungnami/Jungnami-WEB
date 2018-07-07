<template>
  <contents v-bind:contents_list_info="sendContentInfo()"></contents>
</template>

<script>
import Contents from './ContentsList'

export default {
  name: 'Recommend',
  components: {
    Contents
  },
  methods: {
    sendContentInfo() {
      return {
        seeContentsMore: false,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
    }
  },data () {
      return {
        showModal: false,

      }
    }

}
</script>

<style>

</style>

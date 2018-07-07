<template>
  <div>

  <contents v-bind:contents_list_info="sendReconmendInfo()"></contents>
  <div class="adventisor"></div>
  <contents v-bind:contents_list_info="sendTMIInfo()"></contents>
  <contents v-bind:contents_list_info="sendContentInfo()"></contents>
</div>

</template>

<script>
import Contents from './ContentsList'

export default {
  name: 'Recommend',
  components: {
    Contents
  },
  methods: {
    sendReconmendInfo() { // 여기서 통신의 키가되는 파라미터를 전달해주고(ContentsList에다가), ContentsList에서 해당 파라미터로 통신을 한 값을 가져오면 된다
      return {
        title: 'TOP 20',
        seeContentsMore: false,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
    },
    sendTMIInfo() {
      return {
        title: 'TMI',
        seeContentsMore: true,
        endItem: 4, //이거 페이징 단위랑 맞춰줘야함.. 좀 잘못짬 ㅠ
        PAGENUM: 4, //페이징 단위
        DOTNUM: 4, //버튼개수
      }
    },
    sendContentInfo() {
      return {
        title: '스토리',
        seeContentsMore: true,
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
.adventisor{
  width:100%;
  height: 12.968vw;
  background-image: url('/static/sopt.jpeg');
}
</style>

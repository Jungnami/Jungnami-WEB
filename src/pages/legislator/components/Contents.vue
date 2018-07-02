<template>
  <v-layout row wrap xs12>
  <div flat class="content_card" v-for="item in items" :key="item.id">
        <img
          :src="item.image"
          class="content_image"
          height="212px"
        >
        <div>
          <div>
            <!-- <h3 class="headline mb-0">Kangaroo Valley Safari</h3> -->
            <div class="content_title"> {{ item.title }}</div>
          </div>
        </div>

        <div class="content_desc">
          {{ item.desc }}
        </div>
      </div>
    </v-layout>
</template>

<script>
export default {
  name: 'Contents',
  data () {
    return {
      items: [
        {id:1, image: '/static/card_image1.jpeg', title: '문재인 대통령의 살아온 일대기와 운명', desc: '테스트1'},
        {id:2, image: '/static/card_image1.jpeg', title: '문재인 대통령의 살아온 일대기와 운명', desc: '테스트2'},
        {id:3, image: '/static/card_image1.jpeg', title: '문재인 대통령의 살아온 일대기와 운명', desc: '테스트3'},
        {id:4, image: '/static/card_image1.jpeg', title: '문재인 대통령의 살아온 일대기와 운명', desc: '테스트4'}
      ]
    }
  }
}
</script>

<style scoped lang="css">

.content_card{
  width: 295.95px;
  height: 311px;
  padding-left: 7.665px;
  padding-right: 7.665px;
}
.content_image{
  width: 100%;
  height: 212px;
  border-radius: 5%;
}
.content_title{
  width: 100%;
  height: 49px;
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 17px;
  color: #000000;
  font-family: NanumBarunGothicOTF;
}
.content_desc{
  width: 100%;
  height: 20px;
  color: #C6C6C6;
  font-family: NanumBarunGothicOTF;
}

</style>

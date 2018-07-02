<template>
<div>


  <div class="component_title">
    관련 콘텐츠
  </div>

  <v-layout row wrap justify-space-around>
    <v-flex xs6 sm3 class="content_card" v-for="item in items" :key="item.id" >
      <img :src="item.image" class="content_image">
      <div>
        <div>
          <div class="content_title"> {{ item.title }}</div>
        </div>
      </div>
      <div class="content_desc">
        {{ item.desc }}
      </div>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  name: 'Contents',
  data() {
    return {
      items: [{
          id: 1,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트1'
        },
        {
          id: 2,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트2'
        },
        {
          id: 3,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트3'
        },
        {
          id: 4,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 5,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 6,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 7,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        },
        {
          id: 8,
          image: '/static/card_image1.jpeg',
          title: '문재인 대통령의 살아온 일대기와 운명',
          desc: '테스트4'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media (min-width: 1264px)  {
  .component_title
  {
    font-size: 27px;
    padding-left: 1.7vw;
    padding-right: 1.7vw;
    margin-bottom: 31px;
    margin-top: 31px;
  }
  .component_desc
  {
    font-size: 15px;
    line-height: 20px;
    padding-top: 17px;
  }
  .content_card
  {
    width: 23.2vw;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    margin-bottom: 4.3vw;
  }
}

@media (max-width: 1264px) and (min-width: 600px) {

  .component_title
  {
    font-size: 17px;
    padding-left: 1.9vw;
    padding-right: 1.9vw;
    margin-bottom: 22.54px;
    margin-top: 22.54px;
  }
  .component_desc
  {
    font-size: 10px;
    line-height: 14px;
    padding-top: 8px;
  }
  .content_card
  {
    width: 21.7vw;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    margin-bottom: 5.42vw;
  }

}

@media (max-width: 600px) {
  .component_title {
    font-size: 16px;
    padding-left: 7vw;
    padding-right: 7vw;
    margin-bottom: 13.86px;
    margin-top: 13.86px;
  }
  .component_desc
  {
    font-size: 8px;
    line-height: 11px;
    padding-top: 1.95px;
  }
  .content_card {
    width: 180px;
    padding-left: 13.3px;
    padding-right: 13.3px;
    margin-bottom: 20.25px;
  }
}



.component_title {
  font-weight: bold;
}


.content_image {
  width: 100%;
  border-radius: 5%;
}

.content_title {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #000000;
  font-family: NanumBarunGothicOTF;
}

.content_desc {
  width: 100%;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #C6C6C6;
  font-family: NanumBarunGothicOTF;
}

</style>

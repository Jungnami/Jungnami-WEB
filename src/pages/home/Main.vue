<template>
<div class="main">
  <v-layout row wrap>
    <v-flex xs10 md7 offset-xs1 offset-md1>
      <img src="../../../static/home_imagebanner_bigbox.png" alt="image_banner_bigbox" class="img_bigbox">
    </v-flex>
    <v-flex xs0 md3 offset-xs1 offset-md0>
      <v-carousel hide-delimiters id="carousel">
        <v-carousel-item 
        v-for="(item,i) in small_items" 
        :key="i"
        :style="{backgroundImage: item.src}"
        reverse-transition="fade" 
        transition="fade"
        class="carousel_item">
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex xs10 offset-xs1 offset-md0 class="hidden-md-and-up">
      <v-carousel hide-delimiters id="carousel_small">
        <v-carousel-item 
        v-for="(item,i) in small_tablet_items" 
        :key="i"
        :style="{backgroundImage: item.src}"
        reverse-transition="fade" 
        transition="fade"
        class="carousel_item">
        </v-carousel-item>
      </v-carousel>
    </v-flex>   
  </v-layout>
  <v-layout row wrap class="link_list">
    <v-flex xs0 sm1></v-flex>
    <v-layout row wrap justify-space-between>
      <div class="link_item" v-for="(item, i) in button_items" :key="i">
        <router-link :to="item.path">
          <img :src="item.src" alt="item_link" class="item_link">
        </router-link>
      </div>
    </v-layout>
    <v-flex xs0 sm1></v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      small_items: [
        {src: 'url("../../../static/home_imagebanner_smallbox_01.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_02.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_03.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_04.png")'}
      ],
      button_items: [
        {src: '../../../static/home_button_legislatorranking.png', path: '/rank'},
        {src: '../../../static/home_button_legislatorlist.png', path: '/list'},
        {src: '../../../static/home_button_contents.png', path: '/contents'}
      ],
      small_tablet_items: [
        {src: 'url("../../../static/home_imagebanner_smallbox_tablet_01.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_tablet_02.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_tablet_03.png")'},
        {src: 'url("../../../static/home_imagebanner_smallbox_tablet_04.png")'},
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  div.link_item {
    width: 60vw;
    margin-left: 20vw;
    margin-bottom: 5vh;  
  }
}
@media (max-width: 960px) {
  div#carousel_small {
    height: 30vw;
  }
}
.main
{
  margin-top: 11.8vh;
}
.img_bigbox, .img_smallbox, .item_link, img
{
  width: 100%;
}
#carousel
{
  height: 33.8vw;
  box-shadow: 0px 10px 10px rgba(153, 153, 153, 0.3);
}
.carousel_item
{
  background-size: 100%;
}
.link_list
{
  margin-top: 7vh;
}
.link_item
{
  width: 20vw;  
}
</style>

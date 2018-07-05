<template>
<div class="vote">
  <!--리스팅될 화면 pc: 1117.88, tablet: 648.71-->

  <v-list class="vote_list">
    <template v-for="index in 10">
    <div class="vote_container" :key="index" :style="{backgroundColor: bg_color[index%2]}">
      <div class="vote_content">
        <div class="rank_box">
          <div class="rank_border">
            <div class="img">
              <div class="content">
                1
              </div>
            </div>
          </div>
        </div>
        <div class="thumbnail_box">
          <div class="thumbnail_border">
            <img src="../../static/img_avatar.png" alt="Avatar" class="thumbnail_content" style="display: block;">
          </div>
        </div>

        <div class="progress_box">
          <div class="progress_border">
            <div class="progress_percent">
              <div class="name"> 김병관 </div>
              <div class="count"> 270,000표 </div>

            </div>

          </div>
        </div>

        <div class="emotion">

        </div>
      </div>

    </div>
    </template>
  </v-list>



</div>
</template>
<script>
export default {
  name: 'Vote',
  data() {
    return {
      bg_color: ['background-color: rgba(0, 0, 0, 0.05)', 'white']
    }
  }
}
</script>


<style scoped>
/*root : 549px*/

@media (max-width: 960px) {
  .content {
    left: -5%;
    top: 20%;
    position: relative;
    text-align: center;
    font-size: 1.2vw;
    font-family: NanumBarunGothic;
    color: white;
    z-index: 2;
  }

}

@media (min-width: 960px) {
  .content {
    /* Centered text */
    left: -5%;
    top: 10%;
    position: relative;
    text-align: center;
    font-size: 1.2vw;
    font-family: NanumBarunGothic;
    color: white;
    z-index: 2;
    /*border: 1px solid #1783DC;*/
  }
}

.name {
  z-index: 4;
  color: white;
  font-size: 1vw;
  font-family: NanumBarunGothic;
  position: absolute;
  top: 15%;
  left: 12%;
  /*top: 38%;*/
}

.count {
  text-align: right;
  font-size: 1vw;
  font-family: NanumBarunGothicLight;
  color: white;
  position: absolute;
  top: 15%;
  right: 10%;
  /*position: relative;*/
}

.vote_list {
  align-items: center;

  width: 100%;
}


.vote_container {
  width: 100%;
  /*height:90%;*/
  /*height: 4%;*/
  /*height: auto;*/
  /*position: relative;*/
  background-color: rgba(0, 0, 0, 0.05);
}

.vote_content {
  height: 80%;
  display: table;
}

.rank_box {
  width: 17%;
  display: table-cell;
  position: relative;
  vertical-align: top;
  z-index: 1;
  /*border: 1px solid #1783DC;*/
}

.rank_border {
  position: relative;
  height: 100%;
  padding-top: 5%;
  padding-bottom: 5%;
  /*align-items:center;*/
}

.img {
  /*top: 50%;*/
  /*top: 200px;*/
  position: relative;
  top: 10%;
  height: 80%;
  width: 50%;
  margin: 0 auto;
  background-image: url('../../static/gold_medal.png');
  background-size: contain;
  /*border: 2px solid #1783DC;*/
}

/* .rank를 기준으로 가운데에 텍스트가필요한 부분*/




.thumbnail_box {
  width: 14%;
  height: 100%;
  display: table-cell;
  vertical-align: top;

}

.thumbnail_border {
  padding-top: 10%;
  padding-bottom: 10%;
  position: relative;

}

.thumbnail_content {
  width: 80%;
  height: auto;
  border: 1px solid #000;

  /*height: 10px*/
  border-radius: 50%;
  vertical-align: baseline;
  /*border: 0.35vw solid #1783DC;*/
  border: 2px solid #1783DC;
  position: relative;
  z-index: 1;
}


.progress_box {
  display: table-cell;
  width: 58%;
  /*position: relative;*/
  /*right: +13px;*/
  z-index: 0;
}

.progress_border {
  position: relative;
  height: 75%;
  width: 100%;
  padding-top: 7.5%;
  left: -10%;

  /*padding-top: 10%;
  padding-bottom: 10%;*/
}

.progress_percent {
  position: relative;
  height: 100%;
  background-color: #1783DC;
  width: 130;
  padding-botton: 7.5%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;



}

.emotion {
  width: 11%;
  display: table-cell;
}









/*.vote_container {
  width: 324.29px;
  height: 60.13px;
  display: inline-block;
  background-color: '#000';
}

.vote_box {
  width: 300px;
  background: #000;
}

.vote_progress {
  width: 80%;
}*/
</style>

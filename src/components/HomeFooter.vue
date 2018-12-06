<template>
<footer class="footer">
  <div class="call_center">고객센터 : <span class="call_number">010-9431-6327</span></div>

  <small   class="time">평일 10:00~18:00 (점심시간 12:00~13:00 / 주말&공휴일 제외)</small  >
  <div class="introduce">
    <!-- 서비스 소개 &nbsp; -->
    <!-- 회사소개 &nbsp; -->
    <!-- 채용정보 &nbsp; -->
    <router-link to="/terms/use" class="logo">이용약관</router-link> &nbsp;
    <router-link to="/terms/privacy" class="logo">개인정보취급방침</router-link> &nbsp;
    <!-- 전문가 &nbsp; -->
    <!-- 등록 사업자 &nbsp; -->
    <!-- 구매회원 제휴/광고 문의 &nbsp; -->
  </div>
  <div class="company">
    <strong>상호명</strong> : TEAM정나미 &nbsp;
    <strong>이메일</strong> : jungnami630@gmail.com &nbsp;
    <strong>주소</strong> : 서울특별시 용산구 원효로1가 &nbsp;
  </div>
  <div class="copyright">Copyright &copy; 2018 by Politics is my future.</div>
</footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer
{
  background: #EBEBEB;
  margin-top: 4vh;
  padding-left: 8.33vw;
  padding-right: 8.33vw;
}
.call_center
{
  font-size: 0.94vw;
  font-family: NanumBarunGothicBold;
  padding-top: 1.53vh;
}
.call_number
{
  font-size: 1.46vw;
  font-family: NanumBarunGothicBold;
  margin-top: 1.53vh;
}
.time
{
  font-size: 0.89vw;
  font-family: NanumBarunGothic;
  margin-top: 0.4vh;
}
.introduce
{
  font-size: 0.78vw;
  font-family: NanumBarunGothicBold;
  margin-top: 1.69vh;
}
.company
{
  font-size: 0.63vw;
  font-family: NanumBarunGothic;
  margin-top: 2.28vh;
}
.copyright
{
  font-size: 0.63vw;
  font-family: NanumBarunGothicBold;
  margin-top: 1.32vh;
  padding-bottom: 3.7vh;
}
</style>

# jungnami-web

> AppJam Project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


---
## 페이지/컴포넌트 트리

A. App.vue 전역페이지
  a. 네비게이션 컴포넌트
  b. 상단 바 컴포넌트

B. 로그인 페이지
  a. 로그인 컴포넌트 ( 이벤트 리스너 포함, 해당 이벤트는 데이터 통신이 포함될 것 , state를 통해 상태저장,  로그인 컴포넌트의 경우 로그인이 필요한 컨텐츠 클릭시 state에 해당 값이 존재하는지 아닌지를 통해 확인(즉 해당 페이지에는 로그인 컴포넌트가 v-if로 생성될지 말지를 결정) )

C. 순위 페이지
  a. 카드뷰형식의 데이터 통신이들어간 2개의 이미지 컴포넌트
  b. 호감/비호감 리스트 하나 li(한사람)에 대한 컴포넌트
  c. 호감/비호감 리스트 전체에 대한 컴포넌트

D. 정당/지역별 페이지
  a. 정당별 리스트 한 사람에 대한 컴포넌트 ( C-b 와 동일 컴포넌트 사용)
  b. 정당별 리스트 전체에 대한 컴포넌트 ( C-c 와 동일 컴포넌트 사용)

E. 커뮤니티 페이지

F. 컨텐츠 페이지

G. 검색 결과 페이지

H. 마이 페이지

K. 국회의원 페이지
  a. 상단 배너 이미지 포함된 컴포넌트 ( 데이터 통신 필요 )
  b. 스크랩, 작성글, 팔로워, 팔로잉( 데이터 통신 필요 ) 값 리스팅 컴포넌트
  c. 해당 국회의원 관련 description 컴포넌트 ( 데이터 통신 필요 )
  d. 카드뉴스 컴포넌트 ( for each 사용하여 리스팅됨, 데이터 통신 필요 )
  e. 후원하기 팝업상자 컴포넌트 (edited)

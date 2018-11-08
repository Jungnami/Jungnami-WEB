# 정나미 웹서비스(Jungnami Web)
> SOPT 22nd Appjam 정치가 나의 미래다 프로젝트 웹 개발 repository (우수상 수상)

정나미는 국회의원 인기투표 서비스이다. 사용자는 호감/비호감을 느끼는 국회의원에게 투표를 하여 민심을 표출할 수 있고, 국회의원들은 이를 보고 민심을 즉각적으로 확인할 수 있다.
<http://jungnami.com>
![정나미 아이콘](./static/tab_image_title.png)


## 페이지 구성
### main
* 정나미가 무엇인지 간단한 카드설명을 볼 수 있고 제공하는 서비스에는 무엇이 있는지 확인할 수 있다.

### chart
* 국회의원 전체에 대한 순위를 보여주고 호감/비호감 투표를 할 수 있다.
* 국회의원 상세 페이지에 들어가서 관련 컨텐츠들을 확인할 수 있다.

### party/region
* 국회의원을 정당/지역별로 볼 수 있, 호감/비호감 순위를 확인하고 투표할 수 있다.

### contents
* 국회의원과 관련한 컨텐츠를 제공하며 추천/TMI/스토리 3가지 탭 메뉴를 제공한다.
* 컨텐츠 상세 페이지에서는 카드뉴스 형식으로 컨텐츠를 제공하며 컨텐츠에 대하여 댓글을 달고 확인할 수 있다.

### my page
* 개인 사용자 페이지로서 개인 활동 내역에 대해 구체적으로 확인할 수 있다.
* 코인을 충전하고 코인으로 투표권을 교환할 수 있다.


## Development Environment
* npm - **v 6.4.1**
* vue - **v 2.5.17**

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


## Tech/framework
- [vuex](https://vuex.vuejs.org/kr/) : 컴포넌트 간의 통신을 쉽게 하기 위해 활용
- [axios](https://www.npmjs.com/package/vue-axios) : 서버와의 원활한 통신을 위해 활용
- [vuetify](https://vuetifyjs.com/ko/) : 반응형 웹사이트 제작을 위해 활용
- [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate) : cookie를 통해 기본 정보를 저장하기 위해 활용
- [js-cookie](https://github.com/js-cookie/js-cookie) : cookie를 통해 기본 정보를 저장하기 위해 활용

##Web WorkFlow
![정나미 워크플로우](./static/jungnami_workflow.jpg)
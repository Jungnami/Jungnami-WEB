<template>
  <v-app>
    <v-toolbar
      color="white"
    >

      <v-flex xs1>
        <v-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up">menu</v-icon>
      </v-flex>

        <v-toolbar-title style="width: 300px" >
          <span class="display-2 primary--text title" >정나미</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="clickMenu" :color="textColor" class="hidden-xs-only menu" flat depressed v-for="item in items" :key="item.text" :to="item.path">
            {{ item.text }}
        </v-btn>
        <v-flex xs1>
        </v-flex>


    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" temporary absolute>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.path">

          <v-list-title-content>
            {{ item.text }}
          </v-list-title-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    </v-app>
</template>


<script>
export default {
  data() {
    return {
      sideNav: false,
      textColor: 'text',
      items: [
        {icon: 'supervisor_account',text: '순위',path: '/'},
        {icon: 'room',text: '정당/지역별',path: '/produce'},
        {icon: 'room',text: '커뮤니티',path: '/comunity'},
        {icon: 'room',text: '컨텐츠',path: '/contents'},
      ]

    }
  }
}
</script>

<style scoped lang="css">
.menu
{
  height: 28px;
  font-family: NanumBarunGothic
},
.title
{
  font-family: NanumBarunGothic
}

</style>

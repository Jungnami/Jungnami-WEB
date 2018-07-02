<template>
  <div>
    <v-toolbar
      color="white"
    >
      <v-flex xs1>
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      </v-flex>
        <v-toolbar-title style="width: 300px" >
          <span class="display-2 primary--text nav_title" color="primary" >정나미</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="text" class="hidden-xs-only nav_menu" flat depressed v-for="item in items" :key="item.text" :to="item.path">
            {{ item.text }}
        </v-btn>
        <v-flex xs1>
        </v-flex>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav" temporary absolute>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.text" :to="item.path">
            {{ item.text }}
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      sideNav: false,
      textColor: 'text',
      items: [
        {icon: 'supervisor_account', text: '순위', path: '/'},
        {icon: 'room', text: '정당/지역별', path: '/produce'},
        {icon: 'room', text: '커뮤니티', path: '/comunity'},
        {icon: 'room', text: '컨텐츠', path: '/legislator'}
      ]

    }
  }
}
</script>

<style scoped lang="css">

.nav_menu
{
  height: 28px;
  font-family: NanumBarunGothic
}
.nav_title
{
  font-family: NanumBarunGothic;
}

</style>

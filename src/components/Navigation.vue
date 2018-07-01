<template>
<v-app>
  <v-toolbar dark class="primary">
    <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-layout row wrap>

    <v-flex offset-lg1 offset-md1 offset-sm1 >
      <v-toolbar-title class="display-2">정나미</v-toolbar-title>
    </v-flex>

    <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" offset-lg1 offset-md1 offset-sm1 offset-xs1>
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">

          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-layout>

  </v-toolbar>
  <!-- <router-view></router-view> -->
</v-layout>
</v-app>
</template>


<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [{
          icon: 'supervisor_account',
          title: '순위',
          path: '/'
        },
        {
          icon: 'room',
          title: '정당/지역별',
          path: '/produce'
        },
        {
          icon: 'room',
          title: '커뮤니티',
          path: '/comunity'
        },
        {
          icon: 'room',
          title: '컨텐츠',
          path: '/contents'
        },

      ]

    }
  }
}
</script>

<style lang="css">
</style>

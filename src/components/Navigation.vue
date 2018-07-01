<template>
  <v-app id="inspire">


      <v-toolbar
        color="white"
        style="padding-left: 60px; padding-right: 60px;"
      >
        <v-toolbar-title style="width: 300px" >
          <span class="display-2 primary--text" >정나미</span>
        </v-toolbar-title>

        <!-- <v-text-field
          flat
          solo-inverted
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field> -->

        <v-spacer></v-spacer>

        <v-btn @click="$emit('textColor', 'primary')" :color="textColor" class="hidden-sm-and-down menu" flat depressed v-for="item in items" :key="item.text" :to="item.path">
            {{ item.text }}
        </v-btn>
      </v-toolbar>


    </v-app>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      drawer: null,
      textColor: 'text',
      items: [
        {icon: 'supervisor_account',text: '순위',path: '/'},
        {icon: 'room',text: '정당/지역별',path: '/produce'},
        {icon: 'room',text: '커뮤니티',path: '/comunity'},
        {icon: 'room',text: '컨텐츠',path: '/contents'},
      ],
      methods: {
        clickMenu: function (event) {
          console.log(event);
        }
      }

    }
  }
}
</script>

<style lang="css">
.menu
{
  height: 28px;

}

</style>

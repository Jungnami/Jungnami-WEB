<template>
<v-container style="height:500px;">


  <v-layout column justify-end>
    <v-flex xs12 sm6 offset-sm3>


      <ul class="items">
        <li v-for="(item, index) in items">
          <input type="checkbox" id="line1" /> {{index}}
        </li>
        <li v-for="(item, index) in items">
          <input type="checkbox" id="line2" /> {{index}}
        </li>
        <li v-for="(item, index) in items">
          <input type="checkbox" id="line3" /> {{index}}
        </li>
      </ul>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
export default {
  name: 'Vote',
  data() {
    return {
      items: [{
          header: 'Today'
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        {
          divider: true,
          inset: true
        },
        {
          avatar: 'https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }
  }
}
</script>


<style scoped>

ul.items
{
  text-align: center;
  list-style-type: none;
  width: 400px;
}

ul.items li
{
    float: left;
    display: inline;
}

.clear { clear: both; }
</style>

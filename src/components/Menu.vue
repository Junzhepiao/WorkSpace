<template>
<div id="Menu">
          <v-toolbar color='elevation-0' >
          <v-spacer></v-spacer>
            <v-btn flat to="">Github</v-btn>
         <v-btn flat to="" >Linkedin</v-btn>
          <v-btn icon >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </v-toolbar>

  <v-navigation-drawer
    id="app-drawer"
    app
    dark
    mobile-break-point="991"
    width="300"
    class="blue-grey darken-2"
    permanent
  >
    <v-img
      height="100%"
    >
      <v-layout
        class="fill-height"
        tag="v-list"
        column
      >
        <v-list-tile avatar>
          <v-list-tile-avatar
          >
            <v-img
              :src="user.img_url"
              height="35"
              contain
            />
          </v-list-tile-avatar>
          <v-list-tile-title class="title">
            WorkSpace
          </v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile
          v-if="responsive"
        >
          <v-text-field
            class="purple-input search-input"
            label="Search..."
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          active-class="cyan darken-3"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            v-text="link.text"
          />
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
    <router-view/>
  </div>
</template>

<script> 
// Utilities
import {
mapMutations,
mapState
} from 'vuex'
import Dashboard from './Dashboard.vue'
import UserProfile from './UserProfile.vue'
import Todos from './Todos.vue'
import Events from './Events.vue'
import Chats from './Chats.vue'


export default {
  name: 'Menu',
  data () {
  return {
    logo: '',
    id: this.$route.params.id,  // id for the logined user
    links: [
          {
            to: `/user/${this.$route.params.id}/dashboard`,
            icon: 'mdi-view-dashboard',
            text: 'Dashboard'
          },
          {
            to: `/user/${this.$route.params.id}/user-profile`,
            icon: 'mdi-account',
            text: 'User Profile'
          },
          {
            to: `/user/${this.$route.params.id}/todos`,
            icon: 'mdi-alarm-check',
            text: 'Task List'
          },
          {
            to: `/user/${this.$route.params.id}/events`,
            icon: 'mdi-calendar-edit',
            text: 'Events'
          },
          {
            to: `/user/${this.$route.params.id}/chats`,
            icon: 'mdi-chat-processing',
            text: 'Chats'
          },
          {
            to: `/`,
            icon: 'logout',
            text: 'Logout'
          },

        ],
    responsive: false,
  }
  },
  computed: mapState([
    'user'
  ]),
  components:{ 
    Dashboard,
    UserProfile,
    Todos,
    Events,
    Chats
          }
}
</script>
<style scoped>

</style>

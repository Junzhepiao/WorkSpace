<template>
<div class="container">
<div class="container">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-10">
<v-card class="rounded-card">
          <v-toolbar color="teal accent-4" dark>
              <v-toolbar-title>Team</v-toolbar-title>
          </v-toolbar>

  <v-layout row wrap justify-center id="scroll-target" style="max-height: 1000px" class="scroll-y">
    <v-flex xs12 sm3 md4 ma-4 v-for="(item, index) in allUsers" :key="index" @mouseover="showByIndex = index" @mouseout="showByIndex = null">
      <v-card class="rounded-card">
        <v-img :src="item.img_url" height="300px" :gradient="gradient">
          <v-layout column fill-height>
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">{{item.first_name}} {{item.last_name}}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list one-line class="text-md-center">
          <div v-if="item.active == 1">
            <v-btn round color="teal accent-4" dark>Active
              <v-icon dark right>check_circle</v-icon>
            </v-btn>
          </div>
          <div v-else>
            <v-btn round color="red accent-" dark>Away
              <v-icon dark right>remove_circle</v-icon>
            </v-btn>
            
          </div>
        </v-list>

<transition name="slide-fade" mode="out-in">

        <v-list one-line v-show="showByIndex === index">
        <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">title</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{item.role}}</v-list-tile-title>
              <v-list-tile-sub-title>Title</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.phone}}</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="indigo">email</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.email}}</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
</transition>

        

        
      </v-card>
 </v-flex>
</v-layout>
</v-card>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Menu from './Menu.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Dashboard',
  data () {
   return{
        gradient: 'to top right, rgba(100,100,100,.50), rgba(50,50,50,.00)',
        showByIndex: null,
        id: this.$route.params.id  // id for the logined user
      } 
  },
  mounted(){
    this.$store.dispatch('getAllUser')
  },
  components:{
    Menu
      },
  computed: mapState([
      'user',
      'allUsers' 
      ])
}
</script>

<style scoped>
.rounded-card{
    border-radius:25px;
}
</style>
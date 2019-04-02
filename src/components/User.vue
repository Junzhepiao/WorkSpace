<template>
<div class="container">
  <div class="row">
    <div class="col-2">
      <Menu></Menu>
      <router-view/>
    </div>
    <div class="col-10">
      <Dashboard></Dashboard>
      {{user}}
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Menu from './Menu.vue'
import Dashboard from './Dashboard.vue'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'User',
components:{
    Menu, 
    Dashboard
  },
  data () {
      return{
    responsive: false,
    id: this.$route.params.id  // id for the logined user
      } 
  },
  computed: mapState([
      'user' 
      ])
}
</script>

<style>
</style>

<template>
<div class="container">
<div class="container">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-10">      

    <v-layout row>
      <v-flex xs12 sm12 offset-sm>
        <v-card class="rounded-card">
          <v-toolbar color="amber darken-2" dark>
              <!-- <v-icon>mdi-pencil</v-icon> -->
              <v-toolbar-title>My Tasks</v-toolbar-title>
          </v-toolbar>
          <v-list two-line subheader>
              <v-flex xs12 sm12 offset-sm>
                <v-container fluid>
                    <v-form @submit.prevent="handleSubmit">
                <v-layout row>
                    <v-flex grow pa-1>
                        <v-card-text>
                            <v-text-field regular prepend-icon="mdi-pencil" name="todo" label="Create new task.." type="text" v-model="todo"></v-text-field>
                        </v-card-text>
                    </v-flex>
                    <v-flex shrink pa-1>
                        <v-card-actions>
                            <v-btn type="submit" color="amber darken-2" round small dark>Add</v-btn>                        
                        </v-card-actions>
                    </v-flex>
                </v-layout>
                    </v-form>
                </v-container>
              </v-flex>
          </v-list>

          <v-list subheader two-line>
            <v-list-tile v-for="(item, index) in todos" :key="index" >
              <v-list-tile-action>
                <v-checkbox ></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content @click.prevent="complete = !complete">
                <v-list-tile-title>{{item.content}}</v-list-tile-title>
              </v-list-tile-content>
                <v-list-tile-action>
                <v-icon large color="red lighten-1" v-on:click="handleDelete(item.id)">cancel</v-icon>
                </v-list-tile-action>
            </v-list-tile>
          </v-list>



        </v-card>
      </v-flex>
    </v-layout>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Todos',
  data () {
      return{
          todo: null,
          id: this.$route.params.id,  // id for the logined user.
          complete: true,
          sound: false,
          video: false,
          invites: false
      } 
  },
  computed: {
      ...mapState([
      'user',
      'todos'
      ])
  },
  mounted(){
    this.$store.dispatch('getUserTodos', this.$route.params.id)
  },
  methods: {
       handleSubmit(){
          this.$store.dispatch('postTodo',{
              user_id:this.$route.params.id,
              todo: this.todo
            });
          this.todo = null      //empty input box after submit
      },
      handleDelete(tid){
          this.$store.dispatch('deleteTodo', tid );          
      }
  },
}
</script>

<style scoped>
.rounded-card{
    border-radius:25px;
}
</style>
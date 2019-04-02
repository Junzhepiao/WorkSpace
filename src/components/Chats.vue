<template>
<div class="container">
<div class="container">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-10">

            <v-card class="rounded-card" >
                <v-toolbar color="red lighten-1" dark>
                    <v-toolbar-title>Group Chat</v-toolbar-title>
                </v-toolbar>

                    <v-container id="scroll-target" style="max-height: 300px" class="scroll-y">
                        <v-layout
                            v-scroll:#scroll-target="onScroll"
                            column
                            align-center
                            justify-center
                            style="height: 300px">
                        

                            <v-flex ma-2 v-for="(item, index) in chats" :key="index">
                                <v-card class="rounded-card"  color='yellow accent-1' >
                                    <v-card-text><strong v-for="(user, j) in allUsers" :key="j" v-if="user.id == item.user_id">{{user.first_name}}:</strong>
                                        {{item.content}}
                                    </v-card-text>
                                </v-card>
                                <span class="grey--text">{{ item.created_at | moment("calendar") }}</span>
                            </v-flex>

                    
                            </v-layout>
                        </v-container>
                </v-card>


    <v-form @submit.prevent="handleSubmit" >
        <v-layout row>
            <v-flex grow pa-1>
                <v-card-text>
                    <v-text-field regular prepend-icon="mdi-chat" name="chat" label="type your message.." type="text" v-model="chat"></v-text-field>
                </v-card-text>
            </v-flex>
            <v-flex shrink pa-1>
                <v-card-actions>
                    <v-btn type="submit" dark color="red lighten-1" >Send</v-btn>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-form>



    </div>
  </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Chats',
  data () {
      return{
          chat: null,
          id: this.$route.params.id  // id for the logined user
      } 
  },
  computed: mapState([
      'allUsers',
      'chats' 
      ]),
  mounted(){
    this.$store.dispatch('getChats', this.$route.params.id),
    this.$store.dispatch('getAllUser')
  },
  methods: {
       handleSubmit(){
          this.$store.dispatch('postChat',{
              user_id:this.$route.params.id,
              chat: this.chat
          });
          this.chat = null     
      }
  }
    
}
</script>

<style scoped>
.rounded-card{
    border-radius:25px;
}
</style>
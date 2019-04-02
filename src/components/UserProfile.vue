<template>
<div class="container">
<div class="container">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-10">
      <v-card class="rounded-card">
          <v-toolbar color="cyan" dark>
              <v-toolbar-title>Edit Profile</v-toolbar-title>
          </v-toolbar>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
              <v-container>
                <div class='row'>
                  <div class='col-6'>
                  <v-text-field label="Company " value="WorkSpace" disabled/>
                </div>
                <div class='col-6'>
                <v-form >
                  <v-text-field regular type="text" class="purple-input" :label="user.email"  v-model="email"
                    :append-icon="email ? 'mdi-send' : null" @click:append="updateUserName">
                  </v-text-field>    
                </v-form>
                </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <v-form >
                      <v-text-field regular type="text" class="purple-input" :label="user.first_name" v-model="first_name"
                      :append-icon="first_name ? 'mdi-send' : null" @click:append="updateFirstName">
                      </v-text-field>
                    </v-form>
                  </div>
                  <div class='col-6'>
                    <v-form >
                      <v-text-field regular type="text" class="purple-input" :label="user.last_name" v-model="last_name"
                      :append-icon="last_name ? 'mdi-send' : null" @click:append="updateLastName">
                      </v-text-field>
                    </v-form>
                  </div>
                </div>

                <div class='row'>
                  <div class='col-6'>
                    <v-form >
                      <v-text-field regular type="text" class="purple-input" :label="user.role" v-model="role"
                      :append-icon="role ? 'mdi-send' : null" @click:append="updateRole">
                      </v-text-field>
                    </v-form>
                  </div>
                  <div class='col-6'>
                    <v-form >
                      <v-text-field regular type="text" class="purple-input" :label="user.phone" v-model="phone"
                      :append-icon="phone ? 'mdi-send' : null" @click:append="updatePhone">
                      </v-text-field>
                    </v-form>
                  </div>
                </div>
                <div class='row'>
                    <div class='col'>
                        <v-text-field regular type="text" class="purple-input" label="Profile Photo URL" v-model="img_url"
                        :append-icon="img_url ? 'mdi-send' : null" @click:append="updatePicture">
                        </v-text-field>
                    </div>
                </div>
            </v-container>
    </v-flex>

      <v-flex xs12 md4 >
          <v-avatar
            class="mx-auto d-block"
            size="130"
          >
            <img
              :src="user.img_url"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h4 class="card-title font-weight-light">{{user.first_name}} {{user.last_name}}</h4>
            <h6 class="category text-gray font-weight-thin mb-3">{{user.role}}</h6>
            <h6 class="card-title font-weight-light">Sick Hours: {{user.sick_hours}}</h6>
            <h6 class="card-title font-weight-light">Vacation Hours: {{user.vacation_hours}}</h6>

          
            <v-btn dark color="cyan" round class="font-weight-light" @click="activeStatus">Active</v-btn>
            <v-btn dark color="red" round class="font-weight-light" @click="awayStatus">Away</v-btn>

          </v-card-text>
      </v-flex>

    </v-layout>
  </v-container>
  </v-card>

        
    </div>
  </div>
</div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'UserProfile',
  data () {
      return{
          email: null,
          first_name: null,
          last_name: null,
          role: null,
          phone: null,
          img_url: null,
          id: this.$route.params.id  // id for the logined user
      } 
  },
  computed: mapState([
      'user' 
      ]),
  methods: {
       updateUserName(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            email: this.email
          });
          this.email = null      //empty input box after submit
      },
      updateFirstName(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            first_name: this.first_name
          });
          this.first_name = null     
      },
      updateLastName(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            last_name: this.last_name
          });
          this.last_name = null      
      },
      updateRole(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            role: this.role
          });
          this.role = null      
      },
      updatePhone(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            phone: this.phone
          });
          this.phone = null      //empty input box after submit
      },
      updatePicture(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            img_url: this.img_url
          });
          this.img_url = null      
      },
      activeStatus(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            active: true
          });   
      },
      awayStatus(){
          this.$store.dispatch('profileUpdate',{
            id:this.$route.params.id,
            active: false
          });   
      }
  },
}
</script>

<style scoped>
.rounded-card{
    border-radius:25px;
}
</style>
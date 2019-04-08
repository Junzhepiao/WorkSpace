 <template>
<v-container ma-5 fluid fill-height>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="rounded-card">
              <v-toolbar dark color="blue-grey darken-2 ">
                <v-toolbar-title> WorkSpace</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
                  >
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
                <v-form @submit.prevent="handleSubmit">
                <v-card-text>
                  <v-text-field solo prepend-icon="person" name="login" label="Login" type="text" v-model="email"></v-text-field>
                  <v-text-field solo prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn round dark color="blue-grey darken-2" :to="{name: 'Register'}">Register</v-btn>
                  <v-btn round type="submit" dark color="blue-grey darken-2" >Login</v-btn>
              </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>



</v-container>
  </template>

<script>
import 'vuetify/dist/vuetify.min.css'
import {mapState} from 'vuex'


export default {
  name: 'Login',
  data () {
    return {
      drawer: null,
      email:null,
      password:null,
    }
  },
  methods: {
      handleSubmit(){
          this.$store.dispatch('login',{
              email: this.email, 
              password: this.password,
              rtr: this.$router
          })
      }
  },
  computed: mapState([
      'loginUser'
  ]),
  props:{
    source: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rounded-card{
    border-radius:25px;
}
</style>

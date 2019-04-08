 <template>
 <v-container ma-5 fluid fill-height>
    <v-content >
      <v-container fluid fill-height >
        <v-layout align-center justify-center>
          <v-flex xs12 md4>
            <v-card class="rounded-card">
              <v-toolbar dark color="blue-grey darken-2">
                <v-toolbar-title>Register</v-toolbar-title>
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

              <v-container>
                <v-form @submit.prevent="handleSubmit">
                    <v-card-text>
                  <v-text-field solo prepend-icon="email" name="email" label="Email"  type="email" v-model="email"></v-text-field>
                  <v-text-field solo prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                  <v-text-field solo prepend-icon="person" name="first_name" label="First Name" type="text" v-model="first_name"></v-text-field>
                  <v-text-field solo prepend-icon="person" name="last_name" label="Last Name" type="text" v-model="last_name"></v-text-field>
                  <v-text-field solo prepend-icon="phone" name="phone" label="Cell Phone"  type="integer" v-model="phone"></v-text-field>
                  <v-text-field solo prepend-icon="title" name="role" label="Role"  type="text" v-model="role"></v-text-field>
                  <v-text-field solo prepend-icon="photo" name="img_url" label="Profile Photo"  type="text" v-model="img_url"></v-text-field>
                  </v-card-text>
              <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn round type="submit" dark color="blue-grey darken-2" >Submit</v-btn>
                  <v-btn round dark color="blue-grey darken-2" :to="{name:'Login'}">Go Back</v-btn>
              </v-card-actions>
                </v-form>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
 </v-container>
  </template>

<script>
import 'vuetify/dist/vuetify.min.css'


export default {
  name: 'Register',
  data () {
    return {
      image:"https://cdn.vuetifyjs.com/images/parallax/material.jpg",
      roles:['Intern','Software Engineer','Senior Software Engineer','Principal Software Engineer'],
      drawer: null,
      email: null,
      password: null,
      first_name: null,
      last_name: null,
      phone: null,
      role: null,
      img_url: null
    }
  },
  methods: {
      handleSubmit(){
          this.$store.dispatch('registNewUser',{
              email: this.email, 
              password: this.password, 
              first_name: this.first_name,
              last_name: this.last_name,
              phone: this.phone,
              role: this.role,
              img_url: this.img_url
          });
        this.email = null,
        this.password = null,
        this.first_name = null,
        this.last_name = null,
        this.phone = null,
        this.role = null,
        this.img_url = null
      }
  },
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

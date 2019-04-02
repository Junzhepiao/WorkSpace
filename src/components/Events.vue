<template>
<div class="container">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-10">


        <v-card class="rounded-card">
                <v-toolbar color="blue darken-3" dark>
                    <v-toolbar-title> Events Board</v-toolbar-title>
                </v-toolbar>

    <v-container>
  <v-layout>
    <v-flex>
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.title"
                v-model="event.open"
                full-width
                offset-x
              >
            <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    color="primary"
                    dark
                  >
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event.details"></span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="secondary"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
  </v-container>
</v-card>

<v-form @submit.prevent="handleSubmit">
<div class="container">
    <v-layout row wrap >
        <v-flex xs12 sm2 md4 offset-sm3 justify-center>
        <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            lazy
            full-width
            width="290px"
        >
            <template v-slot:activator="{ on }">
            <v-text-field
                v-model="date"
                label="select date"
                prepend-icon="event"
                readonly
                v-on="on"
            ></v-text-field>
            <v-text-field
                v-model="time"
                label="select time"
                prepend-icon="alarm"
            ></v-text-field>
            <v-text-field
                v-model="title"
                label="event subject"
                prepend-icon="book"
            ></v-text-field>
            <v-btn type="submit" dark color="blue darken-3" >create</v-btn>
            </template>
            <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
        </v-dialog>
        </v-flex>
        <v-spacer></v-spacer>
    </v-layout>
</div>
</v-form>

    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'

  export default {
    data: () => ({
      today: '2019-01-07',
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      time: null,
      title: null,
      events: [
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-30',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2018-12-31',
          open: false
        },
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Meeting',
          details: 'Spending time on how we do not have enough time',
          date: '2019-01-07',
          open: false
        },
        {
          title: '30th Birthday',
          details: 'Celebrate responsibly',
          date: '2019-01-03',
          open: false
        },
        {
          title: 'New Year',
          details: 'Eat chocolate until you pass out',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'Conference',
          details: 'Mute myself the whole time and wonder why I am on this call',
          date: '2019-01-21',
          open: false
        },
        {
          title: 'Hackathon',
          details: 'Code like there is no tommorrow',
          date: '2019-02-01',
          open: false
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    methods: {
      handleSubmit(){
          this.$store.dispatch('postEvent',{
              user_id:this.$route.params.id,
              date: this.date,
              time: this.time,
              title: this.title
          });
          this.time = null,      //empty input box after submit
          this.title= null
      },
      open (event) {
        alert(event.title)
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
  .rounded-card{
    border-radius:25px;
}
  
</style>

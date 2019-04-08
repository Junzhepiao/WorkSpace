<template>
<div class="container">
  <div class="row">
    <div class="col-2"></div>
    <div class="col-10">

        <v-card class="rounded-card" >
                <v-toolbar color="blue darken-3" dark>
                    <v-toolbar-title>Weekly Events</v-toolbar-title>
                </v-toolbar>
    <v-container>
<v-layout>
    <v-flex>
      <v-sheet height="400">
        <!-- now is normally calculated by itself, but to keep the calendar in this date range to view events -->
        <v-calendar
          ref="calendar"
          :now="today"
          :value="today"
          color="red"
          type="week"
        >
          <!-- the events at the top (all-day) -->
          <template v-slot:dayHeadere="{ date }">
            <template v-for="event in eventsMap[date]">
              <!-- all day events don't have time -->
              <div
                v-if="!event.time"
                :key="event.title"
                class="my-event"
                @click="open(event)"
                v-html="event.title"
              ></div>
            </template>
          </template>
          <!-- the events at the bottom (timed) -->
          <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
            <template v-for="event in eventsMap[date]">
              <!-- timed events -->
              <div
                v-if="event.time"
                :key="event.title"
                :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                class="my-event with-time"
                @click="open(event)"
                v-html="event.title"
              ></div>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
  </v-container>
</v-card>


<v-divider inset ma-5></v-divider>

 <v-card class="rounded-card" >
                <v-toolbar color="blue darken-3" dark>
                    <v-toolbar-title>Post Events</v-toolbar-title>
                </v-toolbar>

<v-container>
<v-form @submit.prevent="handleSubmit">
<div class="container">
    <v-layout row wrap >
        <v-flex xs12 sm8 md8 offset-sm2 justify-center>
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
                label="Select date"
                prepend-icon="event"
                readonly
                v-on="on"
            ></v-text-field>
            <v-text-field
                v-model="time"
                label="Event time - ex: 13:00"
                prepend-icon="alarm"
            ></v-text-field>
            <v-text-field
                v-model="title"
                label="Event subject"
                prepend-icon="book"
            ></v-text-field>
            <v-text-field
                v-model="duration"
                label="Duration(min) - ex: 60"
                prepend-icon="watch"
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
</v-container>
</v-card>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'

  export default {
    data: () => ({
      today: new Date().toISOString().substring(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      title: null,
      duration: null
    }),
    computed: {
      ...mapState([
      'user',
      'allEvents'
      ]),
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.$store.state.allEvents.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    
    methods: {
      handleSubmit(){
          this.$store.dispatch('postEvent',{
              user_id:this.$route.params.id,
              date: this.date,
              time: this.time,
              title: this.title,
              duration: this.duration
          });
          this.time = null,      //empty input box after submit
          this.title= null,
          this.duration = null
      },
      open (event) {
        alert(event.title)
      }
    },
  mounted(){
    this.$store.dispatch('getEvents'),
    this.$refs.calendar.scrollToTime('08:00')
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
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;

    &.with-time {
      position: absolute;
      right: 4px;
      margin-right: 0px;
    }
  }
  .rounded-card{
    border-radius:25px;
}
  
</style>

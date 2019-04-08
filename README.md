* Fork this repo and update this README file with your proposal.
* Make sure to preview your proposal in a markdown preview and [use valid markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
  * Unformatted/unreadable proposals will be rejected

## Project Description
> Employee Portal. 
* An attendance status. let your teammate know your current state. Use sick time, vacation hours, went business trips, attend an events or lunch hours. And also able to see how many sick hours and vacation hours I have. 
* Event calendar. Able to create, and post an event on the calendar.
* My todo lists. Able to create, edit and delete my todo lists.

## What problem does your project solve?
* Bring a  Convenience and Practicality online environment for the employee. Improve working efficiency and Satisfaction.

## Who has this problem?
* Usually in a big team or department has lots of employees. Team director, leader, and teammates cannot know the availabilities of each other during the work.

## How will your project solve this problem?
* Show each worker's status and availabilities to the entire group, team or department. Build a better connection with each other in the workplace.
* A personal TODO lists that helps employee record their tasks.
* An event calendar that allows employees to create and post events.

# Inputs and Outputs
* Input: create user/ update status / absence requires / TODO list / event posts
* Output: efficient communication within group, team, and department

# Technologies
* Vue.js , Vuex
* JavaScript
* Node.js
* HTML&CSS

# Prioritized Feature list
* Users login/logout
* Sort worker by title, search by name
* Update my status
* Show how many sick time and vacation hours left
* Send sickness absence excuse notice, the vocation notice to the director or manager.
* Director or manager can approve the absence requests. 
* Status will only change after request approved, otherwise, the status will remain in "a request under review".
* Personal TODO list. create, post, edit, delete.
* create and post a meeting or event, co-workers able to attend.
* events calendar
* 1on 1 Chat - (STRETCH)




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
        
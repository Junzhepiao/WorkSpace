# workspace

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

 check box
<v-list subheader two-line>
            <v-list-tile v-for="(item, index) in todos" :key="index" >
              <v-list-tile-action>
                <v-checkbox v-model="complete"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content @click="complete = !complete">
                <v-list-tile-title>{{item.content}}</v-list-tile-title>
              </v-list-tile-content>
                <v-list-tile-action>
                <v-icon large color="red lighten-1" v-on:click="handleDelete(item.id)">cancel</v-icon>
                </v-list-tile-action>
            </v-list-tile>
          </v-list>


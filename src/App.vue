<template>
  <div id="app">
    <router-view/>
    <!-- <Menu /> -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './components/Menu'

export default {
  name: 'App',
  components: { Menu }
}
</script>

<style>

</style>

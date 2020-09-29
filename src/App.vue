<template>
  <div id="app">
    <Navbar/>
    <TransitionRoute/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import TransitionRoute from '@/components/TransitionRoute.vue';

export default {
  components: {
    Navbar,
    TransitionRoute
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

html
{
  overflow-y: auto;
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: 'Jost', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body
{
  background-color: #000000;
  height: 100vh;
  overflow: hidden;
  padding-top: 65px;
}

.bounce-enter-active {
  animation: slideInRight .5s;
}
.bounce-leave-active {
  animation: slideOutLeft .5s;
}
</style>

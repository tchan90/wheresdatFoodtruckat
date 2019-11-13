<!--Navbar, logo and Footer components imported in App.js-->
<!--Router-view used to enable user navigation-->
<template>
  <div id="app">
     <navbar :logo="logo"> </navbar>
      <div class="content">
  <router-view> </router-view>
    </div>
<app-footer> </app-footer>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
import AppFooter from './components/layout/AppFooter'
import logo from './assets/logo.png'
export default {
  name: "app",
  components: {Navbar, AppFooter},
    data: function(){
        return{
            logo: logo,
        }
    },
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}


a:hover {
  text-decoration: none !important;
}


</style>

<template>
  <b-navbar toggleable="lg" type="light" class="bg-nav">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <router-link to="/"> <b-navbar-brand  class="brand-title mt-2">
        Where's dat Foodtruck at?
      </b-navbar-brand> </router-link>
      <img :src="logo" class="logo-size">
       <b-navbar-nav class="pt-2 mx-auto">
      <b-nav-item><router-link class="nav-item nav-link text-black" to="/directory" >Directory</router-link> 
 </b-nav-item>
        <b-nav-item><router-link class="nav-item nav-link text-black" to="/events">Events</router-link>  </b-nav-item>
         <b-nav-item> <router-link class="nav-item nav-link text-black" to="/favourites">Favourites  
  </router-link> </b-nav-item>
      </b-navbar-nav>
      <!--Right align-->
    <b-navbar-nav class="ml-auto pt-2">
       <b-nav-item><router-link v-if="$store.state.isUserLoggedIn" class="nav-item nav-link text-black" to="/admin">Admin</router-link> </b-nav-item>
       <b-button v-if="!$store.state.isUserLoggedIn" variant="secondary" size="sm"><router-link class="nav-item nav-link text-white" to="/login">Login</router-link></b-button>
       <!--logout-->
        <b-button v-if="$store.state.isUserLoggedIn" variant="warning" size="sm" @click="logout">LogOut</b-button>
    </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name:"navbar",
    props:['logo'],
    methods:{
      //logout user
      logout(){
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        //re-route to home page
        this.$router.push({name:'root'})
      }
    }
}
</script>

<style>
.bg-nav{
    background-color:none;
}

.nav-link:hover{
    color: grey !important;
}

.nav-link{
  padding-left: 10px;
  padding-right: 10px;
}

.nav-item{
  font-size:18px;
  line-height:1.2rem;
}

.brand-title{
  font-family: 'Ultra', serif;
font-size: 24px;
color:black;
text-align:left;
padding-left:15px;
line-height: 1.2rem;
}

.logo-size{
  width: 50px;;
  height: auto;
  
}

</style>

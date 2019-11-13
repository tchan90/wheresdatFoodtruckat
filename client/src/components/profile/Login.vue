<!--Login form-->
<template>
     <div>
        <header>
            <b-container fluid class="px-3 py-3">
                <b-row no-gutters>
          <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5"> Login </h1></b-col>
      </b-row>
                </b-container>  
             </header>
             <b-container class="py-4">
                 <b-row>
                     <b-col md="6" class="mx-auto py-3 px-3 form-bg" >
                 <b-form class="my-2">
  <b-form-group label="Email Address">
    <b-form-input v-model="email" type="email" placeholder="Enter email"/>
  </b-form-group>
  <b-form-group label="Password">
    <b-form-input v-model="password" type="password" placeholder="Password"/>
  </b-form-group>
  <div class="d-flex align-content-end">
  <b-button  @click="login" variant="secondary">Submit</b-button>
  </div>
</b-form>
<b-alert v-if="error"  v-html="error" show variant="danger">
    </b-alert>
             </b-col>
             </b-row>
             <div class="text-center mt-4">
            No account? <router-link to="/register">Register here!</router-link>
             </div>
             </b-container >
             </div>
</template>

<script>
  import AuthenticationServices from '../../services/AuthenticationServices'

export default {
  name:'Login',
  data(){
    return{
      error:null,
      email: '',
      password:''
    }
  },
  methods:{
    //post email and password to database via AuthenticationServices
    async login(){
      try {
         const response = await AuthenticationServices.login({
        email:this.email,
        password:this.password
      })
      //Send token and set User state
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      //Re-route to Profile page after login
      this.$router.push({name:'profile'})
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
.form-bg{
    background-color: rgb(223, 223, 223);
}
    
</style>
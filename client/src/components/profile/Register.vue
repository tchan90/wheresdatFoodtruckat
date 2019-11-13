<!--Register form-->
<template>
  <div>
       <header>
            <b-container fluid class="px-3 py-3">
                <b-row no-gutters>
          <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5"> Register </h1></b-col>
      </b-row>
                </b-container>  
             </header>
      <b-container class="register-box"> 
              <b-form> 
    <b-form-input placeholder="Enter your email" v-model="email" type="text"></b-form-input>
    <b-form-input class="mt-3" placeholder="Enter your password" v-model="password" type="password"></b-form-input>
     <div class="my-4 d-flex justify-content-center"> 
      <b-button @click="register" variant="danger">Submit</b-button>
      </div>
        <!--Error pop up-->
    <b-alert v-if="error"  v-html="error" show variant="danger">
    </b-alert>
        </b-form>
      </b-container>
  </div>
</template>

<script>
  import AuthenticationServices from '../../services/AuthenticationServices'

export default {
  name:'Register',
  data(){
    return{
      error:null,
      email: '',
      password:''
    }
  },
  methods:{
    //post email and password to database via AuthenticationServices
    async register(){
      try {
         const response = await AuthenticationServices.register({
        email:this.email,
        password:this.password
      })
      //send token and set user state after registration
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      //send user to profile page after registration
       this.$router.push({
            name:'profile'
          })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
.register-box{
    margin-top: 80px;
    margin-bottom: 80px;
}
</style>
<!--Error page-->
<template>
    <div>
        <b-container>
            <h1 class="display-2 py-5 text-center">404 ERROR</h1>
             <div class="pt-1">
            <h2 class="display-4 text-center"> Uh oh, this page doesn't exist! </h2>
        </div>
    <b-container class="pt-4">
        <b-row align-v="center">
            <b-col md="12">
                <div class="d-flex justify-content-center py-2"> 
               <span v-if="imgErrorToggle"><img :src="error1" class="img-size"/> </span>
               <span v-if="!imgErrorToggle"> <img :src="error2" class="img-size"/> </span>
               </div>
               <b-button v-on:click="imgErrorToggle = !imgErrorToggle" type="button" variant="primary" class="d-block mx-auto my-3">
                   <span v-if="imgErrorToggle">Flip the table</span>
                   <span v-if="!imgErrorToggle">Put the table down</span>
                   </b-button>
            </b-col>
        </b-row>
       <div>
  <router-link to="/"><b-button block variant="secondary">Return Home</b-button></router-link>
</div>
        </b-container>
        </b-container>
    
    </div>
</template>

<script>
import error1 from '../assets/error-1.png'
import error2 from '../assets/error-2.png'

export default {
    name: 'error',
    data: function(){
        return{
            error1:error1,
            error2:error2,
            imgErrorToggle: true
        }
    },    
}
</script>

<style scoped>
.img-size{
    width: 100%;
    height:auto;
}
</style>


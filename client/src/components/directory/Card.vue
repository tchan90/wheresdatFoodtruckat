<!--Child component of Directory.vue-->
<template>
    <div class="food-cards">
        <b-spinner v-if="!loadSpinner" label="Spinning"></b-spinner>
      <b-row>
        <b-col lg="4" md="6" sm="12" v-for="foodTruck in foodTrucks" :key="foodTruck.id">
      <b-card class="shadow sm-card mx-auto" :title="foodTruck.name" :sub-title="foodTruck.cuisine" :img-src="foodTruck.cardImg == null ? DefaultCardImg : foodTruck.cardImg" :img-alt="foodTruck.name" img-top> 
  <b-card-text>
     <router-link :to="'/trucker/' + foodTruck.id"> <b-button>View</b-button></router-link> 
  </b-card-text>
</b-card> 
        </b-col>
      </b-row>
    </div>
</template>

<script>
import DirectoryService from '../../services/DirectoryService';
import DefaultCardImg from '../../assets/card-placeholder.png';
export default {
    name:"card",
    data(){
      return{
        foodTrucks: null,
        DefaultCardImg:DefaultCardImg,
        loadSpinner:false
      }
    },
    methods:{
      //loading method
      loading(){
        this.loadSpinner=true
      }
    },
    //watch input and run search when query entered
     watch:{
      '$route.query.search':{
        immediate:true,
        async handler(value){
          this.loading();
          this.foodTrucks=(await DirectoryService.getFoodTrucks(value)).data;
        }
      }
    },
    
}
</script>

<style >
    .food-cards a{
      color: black;
    }
    .food-cards a:hover{
      color: black;
      text-decoration: none;
    }
    .sm-card{
     max-width: 30rem;
     margin-right:10px;
     margin-left:10px;
     margin-top: 10px;
     margin-bottom: 10px;
    }
    .card-img-top{
      width:100%;
      height: 350px;
    }
</style> 
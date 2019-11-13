<!--Profile/Admin Page-->
<template>
    <div>
        <header>
            <b-container fluid class="px-3 py-3">
                <b-row no-gutters>
          <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5 heading"> Admin </h1></b-col>
      </b-row>
      <div>
</div>
                </b-container>  
             </header>
             <b-container fluid>
                 <div class="py-3 px-4"> 
                 <b-card>
                     <h4 slot="header" class="text-secondary m-0 border-0 rounded-0 ">Your Foodtrucks</h4>
                     <b-row>
                     <b-col lg="4" md="6" sm="12" v-for="foodTruck in foodTrucks" :key="foodTruck.id">
                      <b-card class="mt-3" :title="foodTruck.name" :img-src="foodTruck.cardImg == null ? DefaultCardImg : foodTruck.cardImg" :img-alt="foodTruck.name" img-top>
                          <b-card-text>
                           <router-link :to="'/editTrucker/' + foodTruck.id"><p class="text-secondary">Edit Foodtruck Information</p></router-link>
                             <router-link :to="'/editTrucker/workingHours/' + foodTruck.id"><p class="text-secondary">Edit Work Hours</p></router-link>
                            <b-button @click="deleteFoodTruck(foodTruck.id)" variant="danger">Delete FoodTruck</b-button>
                          </b-card-text>
                        </b-card> 
                     </b-col>
                     </b-row>
                        </b-card>
                        </div>
                 <div class="pt-3">
                 
                        <div class="text-center py-3"> 
                 <router-link to="/addTruck"><b-button variant="outline-dark"><h4> Add Foodtruck </h4></b-button> </router-link>
                 </div>
                 </div>
             </b-container>
    </div>
</template>

<script>
import DirectoryService from '../../services/DirectoryService'
import DefaultCardImg from '../../assets/card-placeholder.png';

export default {
    name: "profile",
      data: function(){
        return{
            foodTrucks:null,
            DefaultCardImg:DefaultCardImg,
        }
    },
    //mount all foodtrucks
    async mounted(){
        this.foodTrucks = (await DirectoryService.getAllFoodTrucks()).data
    },
    methods:{
        //reload all foodtrucks after deletion 
    async reload(){
        this.foodTrucks = (await DirectoryService.getAllFoodTrucks()).data
        console.log("delete test");
    },
    //delete foodtruck
    async deleteFoodTruck(id){
        if(confirm('Are you sure you want to delete this Truck?')){
             try{
            await DirectoryService.deleteFoodTruck(id)
            this.reload();
            return
            // eslint-disable-next-line
            console.log('remove FT')
        } catch(err){
            // eslint-disable-next-line
            console.log(err)
        }
        }
    }
    }
}
</script>

<style scoped>
.text-secondary:hover{
    color:black !important;
}

.text-danger:hover{
    color:darkred !important;
}

.heading{
    font-family: 'Raleway', sans-serif;
}

.card-img-top{
      width:100%;
      height: auto;
    }
</style>
<!--Favourites Page-->
<template>
   <div>
        <header>
            <b-container fluid class="px-3 py-3">
                <b-row no-gutters>
          <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5 heading"> Favourites </h1></b-col>
      </b-row>
                </b-container>  
             </header>
              <div v-if="favourites == ''">
            <b-container>
              <div class="no-fav"> 
              <p>Looks like you don't have any favourites.<p> 
                <font-awesome-icon  icon="shopping-basket" size="3x"></font-awesome-icon>
                <p> Go start adding some by looking through the Food Trucks and clicking the <span class="text-secondary">'Add Favourite'</span> button on the top!</p>
              </div>
            </b-container>
          </div> 
          <b-container v-else class="table">
           <table >
               <b-spinner v-if="!load" label="Spinning"></b-spinner>
  <tbody v-for="favourite in favourites" :key="favourite.id">
    <tr>
      <td scope="row"><router-link :to='"/trucker/" + favourite.FoodTruckId'><img :src='favourite.FoodTruckBannerImg' :alt='favourite.FoodTruckName' class="fav-img"></router-link></td>
      <td class="align-middle"><router-link :to='"/trucker/" + favourite.FoodTruckId' class="foodTrucktitle"> {{favourite.FoodTruckName}}</router-link></td>
    </tr>
  </tbody>
</table>
          </b-container>
             </div>
</template>

<script>
import DefaultCardImg from '../assets/card-placeholder.png'
import FavouriteService from '../services/FavouriteService'
export default {
    name:"favourites",
    data(){
      return{
        DefaultCardImg:DefaultCardImg,
        favourites:null,
        load:false
      }
    },
    //Mount all Favourites from db 
   async mounted(){
      this.loading();
     this.favourites = (await FavouriteService.retrieveAllFavourites()).data
   },
   methods:{
     //Loading method
      loading(){
        this.load=true;
      }
   }
}
</script>

<style>
.heading{
    font-family: 'Raleway', sans-serif;
}
.sm-card{
     max-width: 20rem;
     margin-right:10px;
     margin-left:10px;
     margin-top: 10px;
     margin-bottom: 10px;
}
.card-img-top{
  height:15rem;
}

.no-fav{
  font-family: 'Raleway', sans-serif;
  font-size:20px;
  text-align: center
}

.foodTrucktitle{
  color:black;
}

.fav-img{
  width:25%;
  height:auto;
}
</style>
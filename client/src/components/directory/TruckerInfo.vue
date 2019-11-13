<!--Food Truck card-->
<template>
    <div>
       <transition enter-active-class = "animated fadeIn" appear>
         <div v-if="foodTruck == null">
            No data found
          </div> 
        <div v-else class="container wrapper">
      <b-spinner v-if="!load" label="Spinning"></b-spinner>
            <!--bookmark-->
            <span>
                <div class="pl-2 pt-3 align-items-stretch d-flex">  
                  <b-button v-if="isUserLoggedIn && !favourite"  @click="setFavourite" class= "mr-2 top-text" variant="dark"> <font-awesome-icon :icon="emptyBookmark" /> Add to Favourite </b-button>
                  <b-button v-if="isUserLoggedIn && favourite" @click="removeFavourite" class= "mr-2 top-text" variant="dark"> <font-awesome-icon :icon="fillBookmark" /> Remove Favourite </b-button>
            
             <!--menu-->
            <div class="dropdown"> <a :href="foodTruck.menu == null? '#' : foodTruck.menu" target="_target"><b-button class="top-text pl-2 mr-4 dropbbtn" variant="success"> <font-awesome-icon icon="book-open"></font-awesome-icon> Menu</b-button> </a>
              <div v-if="foodTruck.menu == null" class="dropdown-content">
    <p class="text-center pt-2"> No menu provided</p>
            </div>
             </div>
            
              <!--opening hours-->        
 <div class="dropdown"><h4><b-badge variant="warning" class="top-text pl-2 dropbbtn"> <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon> Opening hours</b-badge></h4>
  <div class="dropdown-content">
    <li id="1"><strong>Monday:</strong>
    {{foodTruck.MondayOpen}} - {{foodTruck.MondayClose}}
     </li>
    <li id="2"><strong>Tuesday:</strong> {{foodTruck.TuesdayOpen}} - {{foodTruck.TuesdayClose}}</li>
    <li id="3"><strong>Wednesday:</strong> {{foodTruck.WednesdayOpen}} - {{foodTruck.WednesdayClose}}</li>
    <li id="4"><strong>Thursday:</strong> {{foodTruck.ThursdayOpen}} - {{foodTruck.ThursdayClose}}</li>
    <li id="5"><strong>Friday:</strong> {{foodTruck.FridayOpen}} - {{foodTruck.FridayClose}}</li>
    <li id="6"><strong>Saturday:</strong>{{foodTruck.SaturdayOpen}} - {{foodTruck.SaturdayClose}}</li>
    <li id="0"><strong>Sunday:</strong> {{foodTruck.SundayOpen}} - {{foodTruck.SundayClose}}</li>
 </div>
</div>
              </div>
             </span>
              <!--title-->
            <span> 
                <div class="row" id="header"> 
                    <div class="col-md-6" id="trucker">
                    <h6 class="display-3 text-left py-3"> {{foodTruck.name}}
                      </h6></div>
                 </div>
            </span>
            <!--banner-->
            <div class="container-fluid">
              <img :src="foodTruck.bannerImg == null ? defaultBanner : foodTruck.bannerImg" :alt="foodTruck.name +  'banner image'" class="bannerImg-size"/>
          </div>
    <!--text-->
<b-container class="card-body-text">
   <b-row class="bottom-line">
        <b-col lg="4" sm="12">
        <p class="text-head"><font-awesome-icon icon="utensils"></font-awesome-icon> <strong> Cuisine </strong> </p>
        </b-col>
        <b-col lg="8" sm="12">
          <p class="text-body"> {{foodTruck.cuisine}}  </p>
        </b-col>
      </b-row> 
      <b-row class="bottom-line">
        <b-col lg="4" sm="12">
        <p class="text-head"><font-awesome-icon icon="question"></font-awesome-icon><strong> About </strong> </p>
        </b-col>
        <b-col lg="8" sm="12">
          <p class="text-body"> {{foodTruck.about}}  </p>
        </b-col>
      </b-row>
       <b-row class="bottom-line">
        <b-col lg="4" sm="12">
        <p class="text-head"><font-awesome-icon  icon="map-marker-alt"></font-awesome-icon> <strong> Location </strong> </p>
        </b-col>
        <b-col lg="8" sm="12">
         <p class="text-body"><a :href=" 'https://www.google.com/maps/place/' + foodTruck.address" target="_blank">{{foodTruck.address}} <span><font-awesome-icon icon="external-link-alt" size="sm"></font-awesome-icon></span></a></p>
        </b-col>
      </b-row>
       <b-row class="bottom-line">
        <b-col lg="4" sm="12">
        <p class="text-head"><font-awesome-icon icon="desktop"></font-awesome-icon><strong> Website </strong> </p>
        </b-col>
        <b-col lg="8" sm="12">
        <p class="text-body">   <a :href="foodTruck.website">{{foodTruck.website}} <span><font-awesome-icon icon="external-link-alt" size="sm"></font-awesome-icon></span></a></p>
        </b-col>
      </b-row>
    </b-container>
            </div>
            </transition>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import defaultBanner from '../../assets/banner-placeholder.png';
import DirectoryService from '../../services/DirectoryService';
import FavouriteService from '../../services/FavouriteService'

export default {
    name:"truckerInfo",
    data(){
        return{
            emptyBookmark: ['far', 'bookmark'],
            fillBookmark: ['fas', 'bookmark'],
            defaultBanner: defaultBanner,
            foodTruck:null,
            favourite:null,
            load:false
         }
    },
    computed: {
    // This Grab a value from the store and stores it as a computed property
    ...mapState([
      'isUserLoggedIn'
    ])
  },
    methods:{
      //set Favourite FoodTruck
        async setFavourite(){
          try {
            this.favourite = (await FavouriteService.postFavourite(
              this.$store.state.route.params.foodTruckId,
              this.$store.state.user.id,
              this.foodTruck.name,
              this.foodTruck.bannerImg
            )).data
            // eslint-disable-next-line
            console.log('favourite')
          } catch (error) {
            // eslint-disable-next-line
            console.log(err)
          }
        },
        //remove FoodTruck
      async removeFavourite(){
        try {
          this.favourite = await FavouriteService.deleteFavourite(this.favourite.id)
          this.favourite = null
        } catch (error) {
          // eslint-disable-next-line
          console.log(err)
        }
      },
      //loading method
      loading(){
        this.load=true;
      }
    },
     
    //loading FoodTruck data according to ID
    async mounted(){
      try {
        this.loading();
          const foodTruckId = this.$store.state.route.params.foodTruckId
      this.foodTruck = (await DirectoryService.getFoodTruckById(foodTruckId)).data

       if (!this.$store.state.isUserLoggedIn) {
        return
        }
        //pass userId and FoodTruckId to Favourite Service and return null or the favourites
        const favourite = (await FavouriteService.getFavourite({
          foodTruckId: this.$store.state.route.params.foodTruckId,
          userId: this.$store.state.user.id,
          foodTruckName:this.foodTruck.name,
          foodTruckBannerImg:this.foodTruck.bannerImg
        })).data
        this.favourite = favourite
      } catch (error) {
        // eslint-disable-next-line
        console.log(err)
      }
    },
}
           
         
</script>

<style>
    .wrapper{
        height: auto;
        box-shadow: 2px 3px 5px 2px black;
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .bannerImg-size{
      max-width:100%;
      height:auto;
      display:block;
      margin-left:auto;
      margin-right:auto;
    }

    .top-text{
        line-height: 14px;
    }

    .card-body-text{
        padding-top: 10px;
        padding-bottom: 50px;
        margin-top:50px;
    }

    .icon-colors{
        color: black;
    }

    .label-small {
  vertical-align: super;
  font-size: small;
}

  .text-head{
    font-family: 'Didact Gothic', sans-serif;
    font-size:38px;
  }
  .text-body{
    font-family: 'Didact Gothic', sans-serif;
    font-size:30px;
    margin-top:6px;
  }

  .bottom-line{
    position:relative;
    padding-bottom:40px;
    padding-top: 40px;
  }

  .bottom-line:after{
    content:"";
    border-bottom:solid rgb(231, 230, 230);
    width:100%;
    position:absolute;
    top:95%;
    
  }

.text-body a {
  color: black;
}

.text-body a:hover {
  color: grey;
}


/* Dropdown Button */
.dropbtn {
  background-color: rgb(168, 168, 168);
  color: rgb(10, 10, 10);
  padding: 10px;
  font-size: 12px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Dropdown Content */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 220px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  cursor: default; 
}

/* Hours */
.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

.dropdown a{
  color: black;
}

/*map*/
.googleMap{
  width:100%;
  height:400px;
  margin: 0 auto;
  background:gray;
}


@media (max-width:690px){
    #trucker{
    order:2;
  }
  #location{
    order:1;
  }
}


</style>
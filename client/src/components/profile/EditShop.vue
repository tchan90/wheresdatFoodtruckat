<!--Edit shop form-->
<template>
<b-container class="pt-3">
    <b-form>
        <h1 class="display-4 border-bottom pb-2">Edit Foodtruck </h1>
    <!--name-->
    <p class="text-danger">* = required fields</p>
  <b-form-group label="Name *" class="pt-3">
    <b-form-input type="text" :state="$v.foodTruckInfo.name.$dirty ? !$v.foodTruckInfo.name.$error : null" id="name" v-model="$v.foodTruckInfo.name.$model" />
  </b-form-group>
  <!--cuisine-->
  <b-form-group label="Cuisine *">
    <b-form-input type="text"  :state="$v.foodTruckInfo.cuisine.$dirty ? !$v.foodTruckInfo.cuisine.$error : null" id="cuisine" v-model="$v.foodTruckInfo.cuisine.$model"/>
  </b-form-group>
  <!--about-->
  <b-form-group label="About your Foodtruck: *">
     <b-form-textarea rows="3" max-rows="8" :state="$v.foodTruckInfo.about.$dirty ? !$v.foodTruckInfo.about.$error : null" id="about" v-model="$v.foodTruckInfo.about.$model"></b-form-textarea>
  </b-form-group>

  <!--website-->
     <b-form-group label="Website: ">
       <b-form-input type="text" placeholder="Enter website address"  :state="$v.foodTruckInfo.website.$dirty ? !$v.foodTruckInfo.website.$error : null" id="website" v-model="$v.foodTruckInfo.website.$model"/> 
  </b-form-group>
  <!--location-->
   <b-form-group label="Current Location">
   <vue-google-autocomplete
       types=""
   ref="address"
    id="address"
    classname="form-control"
    placeholder="Change your address here"
    v-on:placechanged="getAddressData"
     country="aus"  
>
</vue-google-autocomplete>
    <br/>
  </b-form-group>
  <!--assets-->
  <!--menu-->
  <b-form-group row class="pt-3" label="Menu Link">
     <b-form-input type="text" 
     :state="$v.foodTruckInfo.menu.$dirty ? !$v.foodTruckInfo.menu.$error : null" id="menu" v-model="$v.foodTruckInfo.menu.$model"
    />
  </b-form-group>
   <!--card img-->
   <b-form-group label="Card Image URL">
    <b-form-input type="text" 
     :state="$v.foodTruckInfo.cardImg.$dirty ? !$v.foodTruckInfo.cardImg.$error : null" id="cardImg" v-model="$v.foodTruckInfo.cardImg.$model"
    placeholder="This goes to your Foodtruck's card in the search directory" />
  </b-form-group>
   <!--banner img-->
   <b-form-group label="Banner Img URL">
    <b-form-input type="text" 
     :state="$v.foodTruckInfo.bannerImg.$dirty ? !$v.foodTruckInfo.bannerImg.$error : null" id="bannerImg" v-model="$v.foodTruckInfo.bannerImg.$model"
    placeholder="This goes to your Foodtruck's profile banner." />
  </b-form-group>
  <div class="my-4 d-flex justify-content-center"> 
  <b-button v-if="!submitting" @click="save" type="submit" variant="primary">Submit</b-button >
    <b-spinner v-if="submitting" label="Spinning"></b-spinner>
  <router-link to="/admin"><b-button variant="primary" class="ml-2">Cancel</b-button ></router-link>
  </div>
</b-form>
    </b-container>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
//Directory Service
import DirectoryService from '../../services/DirectoryService';
//Validation 
import {validationMixin} from 'vuelidate';
import {required, minLength} from 'vuelidate/lib/validators'

export default {
    components:{VueGoogleAutocomplete
    },
    data(){
      return{
        submitting:false,
        foodTruckInfo:{
        name: null,
        cuisine: null,
        cardImg:null,
        about:null,
        website: null,
        menu:null,
        bannerImg: null,  
        address:'',
        }

      }
    },
    mixins: [validationMixin],
    validations:{
      foodTruckInfo:{
         name: {
           required, minLength:minLength(1)
         },
        cuisine: {required, minLength:minLength(3)},
        cardImg:{minLength:minLength(3)},
        about:{required, minLength:minLength(3)},
        website: {minLength:minLength(3)},
        menu:{minLength:minLength(3)},
        bannerImg: {minLength:minLength(3)}
      }
    },
    methods:{
       submitForm(){
        this.submitting=true;
        setTimeout(()=> this.submitting=false, 2000)
       },
      async save(){
            //validation check
            this.$v.foodTruckInfo.$touch()
            if(this.$v.foodTruckInfo.$anyError){
                return
            }
            //update data
            try {
              this.submitForm();
                await DirectoryService.putFoodTruckById(this.$store.state.route.params.foodTruckId, this.foodTruckInfo)
                this.$router.push({
                    name:'truckerInfo',
                    params:{
                        foodTruckId:this.$store.state.route.params.foodTruckId
                    }
                })
            } catch (error) {
                //eslint-disable-next-line
                console.log(error)
            }
        },
        /**Google Autocomplete
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            getAddressData: function (addressData, placeResultData, id) {
                this.foodTruckInfo.address =(addressData.street_number + ' ' + addressData.route + ', ' + addressData.locality + ', ' + addressData.administrative_area_level_1 + ' ' + addressData.country + ' ' + addressData.postal_code );
                console.log(this.foodTruckInfo.address)
            }
          },
        //mount the original data
        async mounted(){
            try {
                const foodTruckId = this.$store.state.route.params.foodTruckId
                this.foodTruckInfo = (await DirectoryService.getFoodTruckById(foodTruckId)).data
            } catch (error) {
                //eslint-disable-next-line
                console.log(error)
            }
        },
     
    }
</script>
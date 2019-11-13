<!--Add food truck form-->
<template>
<b-container class="pt-3">
    <b-form>
        <h1 class="display-4 border-bottom pb-2">Add Foodtruck </h1>
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

  <!--Opening hours-->
  <b-form-group class="my-4" label="Opening Hours: "> 
     <p class="text-muted">*Times below are preset - change if necessary</p>
                          <!--Monday-->
    <div class="mt-2">
       <label>Monday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.MondayOpen" id="MondayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.MondayClose" id="MondayClose"></b-form-input>
  </b-col>
    </b-row>
    </div>
                          <!--Tuesday-->
      <div class="mt-2">
    <label>Tuesday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.TuesdayOpen"  id="TuesdayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time"  v-model="foodTruckInfo.TuesdayClose"  id="TuesdayClose" ></b-form-input>
  </b-col>
    </b-row>
     </div>
                      <!--Wednesday-->
    <div class="mt-2">
    <label>Wednesday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.WednesdayOpen"  id="WednesdayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.WednesdayClose"  id="WednesdayClose" ></b-form-input>
  </b-col>
    </b-row>
    </div>
                     <!--Thursday-->
    <div class="mt-2">
    <label>Thursday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.ThursdayOpen"  id="ThursdayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.ThursdayClose"  id="ThursdayClose" ></b-form-input>
  </b-col>
    </b-row>
    </div>
                    <!--Friday-->
    <div class="mt-2">
    <label>Friday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.FridayOpen"  id="FridayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.FridayClose"  id="FridayClose" ></b-form-input>
  </b-col>
    </b-row>
    </div>
                        <!--Saturday-->
    <div class="mt-2">
    <label>Saturday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.SaturdayOpen"  id="SaturdayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.SaturdayClose"  id="SaturdayClose" ></b-form-input>
  </b-col>
    </b-row>
    </div>
                  <!--Sunday-->
    <div class="mt-2">
    <label>Sunday</label>
    <b-row>
         <!--opening-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.SundayOpen"  id="SundayOpen"></b-form-input>
  </b-col>
    <b-col md="4" class="text-center">
      to
      </b-col>
         <!--closing-->
      <b-col md="2">
   <b-form-input type="time" v-model="foodTruckInfo.SundayClose"  id="SundayClose" ></b-form-input>
  </b-col>
      </b-row>
    </div>
  </b-form-group>
      
  <!--website-->
     <b-form-group class="mt-2" label="Website: ">
       <b-form-input type="text" placeholder="Enter website address"  :state="$v.foodTruckInfo.website.$dirty ? !$v.foodTruckInfo.website.$error : null" id="website" v-model="$v.foodTruckInfo.website.$model"/> 
  </b-form-group>

  <!--location-->
   <b-form-group label="Current Location *">
   <vue-google-autocomplete
   required
       types=""
   ref="address"
    id="address"
    classname="form-control"
    placeholder="Enter your Address"
    v-on:placechanged="getAddressData"
     country="aus"  
>
</vue-google-autocomplete>
    <br/>
  </b-form-group>
  <!--assets-->
  <!--menu-->
  <b-form-group row class="pt-3" label="Menu URL">
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
  <b-button v-if="!submitting" @click="create" type="submit" variant="primary">Submit</b-button >
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
       MondayOpen:'09:00',
      MondayClose:'17:00',
        TuesdayOpen:'09:00',
        TuesdayClose:'17:00',
        WednesdayOpen:'09:00',
        WednesdayClose:'17:00',
        ThursdayOpen: '09:00',
        ThursdayClose:'17:00',
        FridayOpen:'09:00',
        FridayClose:'17:00',
        SaturdayOpen:'09:00',
        SaturdayClose:'17:00',
        SundayOpen:'09:00',
        SundayClose:'17:00',
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
        bannerImg: {minLength:minLength(3)},
        address:{required}},
    },
    methods:{
      //submit loading method
      submitForm(){
        this.submitting=true;
      },
      //when user submits form
      async create() {
        //Validation
        this.$v.foodTruckInfo.$touch()
        if(this.$v.foodTruckInfo.$anyError){
          return
        }     
        //Posts data from foodTruckInfo
        try{
          setTimeout(()=>{
          this.submitForm();
          },1000)
          await DirectoryService.postFoodTruck(this.foodTruckInfo)
          this.$router.push({
            name:'profile'
          }) 
        } catch(error){
          // eslint-disable-next-line
          console.log(error)
        }
      },
      /**Google Autocomplete 
            * When the location found
            * @param {Object} addressData Data of the found location
            * @param {Object} placeResultData PlaceResult object
            * @param {String} id Input container ID
            */
            getAddressData: function (addressData) {
                this.foodTruckInfo.address = (addressData.street_number + ' ' + addressData.route + ', ' + addressData.locality + ', ' + addressData.administrative_area_level_1 + ' ' + addressData.country + ' ' + addressData.postal_code );
                // eslint-disable-next-line
                console.log(this.foodTruckInfo.address)
            },
    },
   
}
</script>




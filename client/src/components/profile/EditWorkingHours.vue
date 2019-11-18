<!--Edit working hours-->
<template>
<b-container class="pt-3">
   <b-form class="pt-2">
              <h1 class="display-4 border-bottom pb-2">Edit Hours </h1>
     <p>*Times below are preset - change if necessary</p>
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
   <b-form-input type="time" v-model="foodTruckInfo.TuesdayClose"  id="TuesdayClose" ></b-form-input>
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
   <b-form-input type="time"  v-model="foodTruckInfo.FridayClose"  id="FridayClose" ></b-form-input>
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
    <div class="my-4 d-flex justify-content-center"> 
  <b-button v-if="!submitting" @click="save" type="submit" variant="primary">Submit</b-button >
      <b-spinner v-if="submitting" label="Spinning"></b-spinner>
  <router-link to="/admin"><b-button variant="primary" class="ml-2">Cancel</b-button ></router-link>
  </div>
  </b-form>
</b-container>
</template>
 
<script>
import DirectoryService from '../../services/DirectoryService';
export default {
    name:'workingHours',
    data: function() {
      return{
      submitting:false,
        foodTruckInfo:{
        MondayOpen:'',
        MondayClose:'',
        TuesdayOpen:'',
        TuesdayClose:'',
        WednesdayOpen:'',
        WednesdayClose:'',
        ThursdayOpen: '',
        ThursdayClose:'',
        FridayOpen:'',
        FridayClose:'',
        SaturdayOpen:'',
        SaturdayClose:'',
        SundayOpen:'',
        SundayClose:'',
        }
      }
    },
      methods:{
            submitForm(){
        this.submitting=true;
        setTimeout(()=> this.submitting=false, 2000)
       },
        async save(){
            //update data
            try {
               this.submitForm();
                await DirectoryService.putFoodTruckById(this.$store.state.route.params.foodTruckId, this.foodTruckInfo)
                this.$router.push({
                    name:'profile',
                })
            } catch (error) {
                //eslint-disable-next-line
                console.log(error)
            }
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
        }
}
</script>
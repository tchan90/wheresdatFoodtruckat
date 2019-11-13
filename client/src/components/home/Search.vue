<!--Search component-->
<template>
    <div>
        <b-input-group>
             <b-input-group-text> <font-awesome-icon icon="search"></font-awesome-icon></b-input-group-text>
  <b-form-input v-model="search" type="text" placeholder="Foodtruck name"/>
     
   </b-input-group>
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
      return{
        search:''
      }
    },
    watch:{
      search(){
        const route={
          name:'directory'
        }
        if(this.search!==''){
          route.query={
            search:this.search
          }
        }
        this.$router.push(route);
      },
      '$route.query.search':{
        immediate:true,
        handler(value){
          this.search=value;
        }
      }
    }
}
</script>
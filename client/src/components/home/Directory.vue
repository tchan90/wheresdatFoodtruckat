<!--Directory Component-->
<template>
<div> 
   <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5"> Directory </h1></b-col>
  <b-card
    class="mt-5 shadow-lg border-0 rounded-0"
  >
    <h4 slot="header" class="text-secondary m-0 border-0 rounded-0">{{title}}</h4>
      <b-form-group class="mx-auto w-50">
  <search></search>
  </b-form-group>
        <card></card>
  </b-card>
</div>
</template>

<script>
import Card from '../directory/Card'
import Search from '../home/Search'
export default {
    name:"directory",
    components:{
      Card, Search
    },
    props: ["title"]
}
</script>

<style>

</style>



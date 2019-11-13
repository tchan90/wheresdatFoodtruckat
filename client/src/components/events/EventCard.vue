<!--Child component of Event.vue-->
<template>
  <transition enter-active-class = "animated fadeInLeft" appear>
    <b-container fluid class="py-3">
        <b-card-group deck>
        <b-card no-body class="overflow-hidden mb-3 shadow mx-auto" style="max-width: 1400px;">
  <b-row no-butters>
    <b-col lg="8">
      <b-card-img :src="fkevent" class="card-img" alt="Finders Keepers"/>
    </b-col>
    <b-col lg="4">
      <b-card-body>
        <a href="https://www.thefinderskeepers.com/" target="_blank"><h5 class="card-title">Finders Keepers</h5></a>
        <p class="text-muted"> When: 18-20th October </p>
        <p class="card-text">Location: 9 Nicholson St, Carlton VIC 3053</p>
        <p class="card-text">Price: $2 entry</p>
        <p class="card-text">About: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies sollicitudin justo, eget fringilla lectus efficitur sed. Fusce a mauris lectus. </p>
        <p class="card-subtitle text-muted">Food Trucks involved: Mexican Fiesta, Panda Noodles, Dessert Box, Sausage Fest</p>
      </b-card-body>
    </b-col>
  </b-row>
</b-card>
</b-card-group>
    </b-container>
    </transition>
</template>

<script>
import fkevent from '../../assets/finderskeepersbanner.png'

export default {
    name:"event-card",
     data: function(){
        return{
            fkevent:fkevent
        }
    }
    
}
</script>

<style>
    .card-deck{
        display:inline-flex;
        flex-wrap:nowrap;
    }
    .card-body a{
        color: black;
    }
    .card-body a:hover{
        color: grey;
        text-decoration: none;
    }
    .card-img{
      object-fit: cover
    }

    @media(max-width: 1000px){
      .card-text{
        font-size:12px;
      } 
    }

</style>
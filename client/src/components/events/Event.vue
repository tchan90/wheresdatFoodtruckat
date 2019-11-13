<!--Event component-->
<template>
    <div>
        <header>
            <b-container fluid class="px-3 py-3">
                <b-row no-gutters>
          <b-col lg="8" sm="12"><h1 class="border-bottom border-dark pb-3 mr-5 heading"> Events </h1></b-col>
      </b-row>
                </b-container>  
             </header>
             <main>
                 <event-card> </event-card>
                  </main>
    </div>
</template>

<script>
import EventCard from './EventCard'

export default {
    name:"event",
    components:{EventCard}

}
</script>

<style >
.heading{
    font-family: 'Raleway', sans-serif;
}
</style>
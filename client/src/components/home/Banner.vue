<!--Banner component-->
<template>
  <b-container fluid class="landing-wrapper">
      <img :src="landingBg" class="landing-bg">
      <div class="bannerSpan">
        <p>Where's dat Foodtruck at?</p>
      </div>
  </b-container>
</template>

<script>
import landingBg from '../../assets/landing-bg.png';

export default {
    name:"banner",
    data: function(){
      return{
        landingBg : landingBg,
      }
    }
}
</script>

<style>

.landing-wrapper {
  padding-right:100px !important;
  padding-left:100px !important;
}

.landing-bg{
  display:block;
  margin-right:auto;
  margin-left:auto;
  width:100%;
  height:auto;
  border-radius:20px;
}

.bannerSpan{
  background-color:#F96161;
  height:100%;
  width:100%;
  margin: 10px 10px 10px 10px;
  background-position: 0 70%;
  display:none;
  padding:0;
}

.bannerSpan>p{
  text-align:center;
  font-size:20px;
  line-height:2rem;
  padding: 10px 0 10px 0;
    font-family: 'Ultra', serif;
    color:rgb(7, 7, 7);
    margin:0;

}

@media only screen and (max-width:768px){
  .landing-bg{
    display:none;
  }
  .bannerSpan{
    display:flex;
    justify-content: center;
  }
}


@media only screen and (max-width:375px){
 .bannerSpan>p{
  font-size:12px;
}
}

</style>

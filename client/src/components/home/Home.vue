<template>
    <div>
    <banner></banner>
    <!--Search banner-->
    <div class="searchBannerwrapper">
    <div class="searchBanner">
      <div class="overlay"> 
      <router-link to="/directory"><div class="search-btn">Start searching...</div></router-link>
      </div>
    </div>
    </div>
    <!--Top Articles-->
  <TopArticles></TopArticles>
    </div>
</template>

<script>
import Banner from './Banner'
import TopArticles from './topCards/TopArticles'
export default {
    name:"home",
     components:{
    Banner, TopArticles:TopArticles
  },
}
</script>

<style>
    .content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
}

.searchBannerwrapper{
  overflow:hidden;
  height:270px;
  margin-top:20px;
}

.searchBanner{
  background-color:grey;
  height:100%;
  width:100%;
  margin: 10px 10px 10px 10px;
  background:url('https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9') no-repeat bottom center/cover;
  background-position: 0 70%;
  position:relative;
  transition: 0.5s ease;
}

.searchBanner:hover{
  transform: scale(1.1)
}

.search-btn{
  position:absolute;
  color:white;
  border: 2px solid white;
  padding: 10px 20px 10px 20px;
  top:40%;
  left:40%;
  font-size:30px;
  border-radius:5px;
}

@media only screen and (max-width:1024px){
  .search-btn{
     left:35%;
  }
}

@media only screen and (max-width:768px){
  .search-btn{
     left:33%;
  }
}

@media only screen and (max-width:414px){
  .search-btn{
    font-size:20px;
    left:28%;
  }
}

@media only screen and (max-width:360px){
  .search-btn{
     left:25%;
    font-size:18px;
  }
}

.search-btn:hover{
  color:rgb(245, 91, 91);
  border: 2px rgb(245, 91, 91) solid;

}

.overlay{
  position:absolute;
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,0.5);
}

</style>


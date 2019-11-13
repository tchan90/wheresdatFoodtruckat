<!--Child component of TopArticle.vue-->
<template>
    <div>
        <div>
          <a href="">
  <b-card no-body class="overflow-hidden my-3">
    <b-row>
      <b-col md="6">
        <b-card-img :src='image' class="rounded-0 fit-img"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title='title'>
          <b-card-text>
            {{text}}
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card> </a>
</div>
    </div>
</template>

<script>
import TopArticles from './TopArticles'
export default {
    name:'frontCard',
    props:['title', 'image', 'text'],
    components: {TopArticles}
}
</script>

<style>
a{
  color:black !important;
}

.fit-img{
  width:100%;
  height:auto;
}
</style>
<template>   
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class='second'>
      <div>
        这是第二页
      </div>
  </v-touch>
</template>
<script>
export default {
    name:'diary',
    data(){
          return{}
        },
     methods: {
    swiperleft: function () {
       this.$router.push({'path':'/admin'});
    },
    swiperright: function () {
     this.$router.push({'path':'/nav'});
    }
  }
}
</script>
<style scoped>
  .second{
       height: 100%;
      background-color: antiquewhite;
  }
</style>

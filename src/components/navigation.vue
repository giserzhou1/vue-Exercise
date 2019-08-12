<template>
  <v-touch v-on:swipeleft="swiperleft" class="thrid">
    <div>这是第一页</div>
   </v-touch>
</template>
<script>
export default {
  name: "navigation",
  data(){
          return{}
        },
  methods: {
    swiperleft: function () {
      this.$router.push({'path':'/diary'});
    }
  }
}


</script>
<style scoped>
.thrid {
  height: 100%;
  background-color: blue;
}
</style>

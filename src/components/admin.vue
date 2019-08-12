<template>
 <div class="demo-avatar">
    <Avatar size="small" shape='circle' src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
</div>

</template>
<script>
export default {
    name:'admin',
    data(){
          return{
              switchValue: true
          }
        },
     methods: {
    swiperright: function () {
      this.$router.push({'path':'/diary'});
    }
    }
  }
</script>
<style scoped>

 
</style>

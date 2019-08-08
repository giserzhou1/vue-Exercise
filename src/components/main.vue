<template>

<div style="height: 100%;">
    <div class='main'>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    </div>
    <div class='footer'>
        <router-link to='/map' class="item">map</router-link>
        <router-link to='/diary' class="item">diary</router-link>
        <router-link to='/admin' class="item">admin</router-link>
    </div>
</div>

</template>
<script>
    export default {
        name:'manager'
    }
</script>

<style scoped>
      
  .main{
      background-color:#19be6b;
      height: 90%;
      /* width: 50% */
  }
  .footer{
        display: flex;
        background-color:#f8f8f9;
        height: 10%;       
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:center;
        position: fixed;
        bottom: 0;
        width:100%;
  }
  .item{
      width: 33.333%;
      background-color: aqua;
      text-align:center;
      line-height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
  }
  /* .footer{

  } */
</style>

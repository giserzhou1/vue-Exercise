<template>

<div style="height: 100%;width: 100%;">
    <div class='main'>
        <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    </div>
    <div class='footer demo-avatar'>
        <router-link to='/nav' class="item" @click.native="changeColor()"  >
         <div class='iconfont bottom'>&#xe613;
              <div class='bottomfont'>地图</div>
         </div>     
        </router-link>
        <router-link to='/diary' class="item" @click.native="changeColor()">
         <div class='iconfont bottom'>&#xe678; 
             <div class='bottomfont special'>记录</div></div>
        </router-link>
        <router-link to='/admin' class="item demo-avatar" @click.native="changeColor()">
         <div class='iconfont bottom'>&#xe7ab;<div class='bottomfont'>我</div></div>  
        </router-link>
    </div>
</div>

</template>
<script>
     
    export default {
        name:'manager',
        data(){
          return{}
        },
        methods:{
            changeColor(){
                let changelist =  document.getElementsByClassName("item");
                for (let i = 0; i < changelist.length; i++) {
                changelist[i].addEventListener('click', function() {
                for (let i = 0; i < changelist.length; i++) {
                   changelist[i].classList.remove("changecolor");
                }
                changelist[i].classList.add("changecolor");
             })
          }
            }
        }
    }
</script>

<style scoped>
      
  .main{
      background-color:#19be6b;
      height: 90%;
      width: 100%;
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
      width: 33.3333%;
      text-align:center;
      display:flex;
      justify-content:center;
      align-items:center;     
  }
  
  .bottom{
      font-size: 25px;
  }
  .bottomfont{
      font-size: 10px;
      text-align:center;
  }
  .special{
      margin-left: -25%
  }
  .changecolor{
      color:#19be6b;
  }
    </style>

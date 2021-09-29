<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
     
  <tabbar>
    <tabbaritem path="/mainhome">
      <img slot="item-icon" src="~assets/img/tabbar/b00.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/b01.png" alt="">
      <div slot="item-text">首页</div>
    </tabbaritem>
    <tabbaritem path="/maincategory">
      <img slot="item-icon" src="~assets/img/tabbar/b00.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/b01.png" alt="">
      <div slot="item-text">分类</div>
    </tabbaritem>
    <tabbaritem path="/maincart">
      <img slot="item-icon" src="~assets/img/tabbar/b00.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/b01.png" alt="">
      <div slot="item-text">购物车</div>
    </tabbaritem>
    <tabbaritem path="/mainprofile">
      <img slot="item-icon" src="~assets/img/tabbar/b00.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/b01.png" alt="">
      <div slot="item-text">我的</div>
    </tabbaritem>
  </tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar/tabbar.vue'
import Tabbaritem from './components/common/tabbar/tabbaritem.vue'
export default {
  name: 'App',
  components:{
    Tabbar,
    Tabbaritem
  },
}
</script>

<style>
html,body,#app{
 
 height: 100%;
 
}
@import "assets/css/base.css"

</style>

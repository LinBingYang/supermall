<!--  -->
<template>
  <div class='myclass'>
    <nav-bar class="my-nav"><div slot="center">我的</div></nav-bar>
    <div class="title">
      <img src="~assets/img/profile/avatar.svg" alt="">
      <p>登录/注册</p>
    </div>
    <div class="center" contenteditable="true">
      <div class="center-item" >
      <span>0.0</span>
        元
        <p>我的余额</p>
      </div>
      <div class="center-item1">
        <span>0</span>
        个
        <p>我的优惠</p>
      </div>
      <div class="center-item2">
        <!-- <p>0分</p> -->
        <span>0</span>
        分
        <p>我的积分</p>
      </div>
    </div>
<div class="t-li" >
  <profield-item>
    <img slot="p-icon" src="~assets/img/profile/message.svg" alt="">
    <div slot="p-text">我的消息</div>
  </profield-item>
  <profield-item>
    <img slot="p-icon" src="~assets/img/profile/pointer.svg" alt="">
    <div slot="p-text">积分商城</div>
  </profield-item>
  <profield-item>
    <img slot="p-icon" src="~assets/img/profile/vip.svg" alt="">
    <div slot="p-text">会员卡</div>
  </profield-item>
</div>
  
  <div class="t-li1" >
  <profield-item>
    <img slot="p-icon" src="~assets/img/profile/cart.svg" alt="">
    <div slot="p-text">我的购物车</div>
  </profield-item>
  <profield-item>
    <img slot="p-icon" src="~assets/img/profile/shopping.svg" alt="">
    <div slot="p-text">下载商城app</div>
  </profield-item>
  
</div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue';
import profieldItem from './profieldCompends/profieldItem.vue';
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      NavBar,
      profieldItem
    },
    data() {
      //这里存放数据
      return {
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
.my-nav{
  background-color:var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 9;
}
.title{
  display: flex;
  position: absolute;
  top: 44px;
  background-color: var(--color-tint);
  width: 100%;
  height: 100px;
}
.title img{
 
  margin-top: 25px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
}
.title p{
  margin-left: 25px;
  line-height: 100px;
  color: white;
}
.center{
  background-color: white;
  display: flex;
  height: 70px;
  margin-top: 144px;
  border-bottom: 10px solid rgba(224, 220, 220, 0.4);
}
.center-item{
  flex: 1;
  /* margin-top: 15px; */
  text-align: center;
  line-height: 30px;
  border-right: 1px solid rgba(167, 164, 164, 0.2);
}
.center-item span{
   color: red;
   font-size: 25px;
}
.center-item1{
  flex: 1;
  /* margin-top: 15px; */
  text-align: center;
  line-height: 30px;
  border-right: 1px solid rgba(167, 164, 164, 0.2);
}
.center-item1 span{
   color: red;
   font-size: 25px;
}
.center-item2{
  flex: 1;
  /* margin-top: 15px; */
  text-align: center;
  line-height: 30px;
}
.center-item2 span{
   color: red;
   font-size: 25px;
}
.t-li{
   border-bottom: 10px solid rgba(224, 220, 220, 0.4);
}
</style>
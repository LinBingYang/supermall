<!--  -->
<template>
  <div class='cart'>
    <nav-bar class="cart-nav"><div slot="center">购物车({{$store.state.cartList.length}})</div></nav-bar>
    <scroll class="content">
      <cartinfo class="car-list" :list="$store.state.cartList"></cartinfo>
     </scroll>
    <cart-bottom-bar class="bottom" :cartList="$store.state.cartList">123</cart-bottom-bar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue';
import cartinfo from './childComps/CartInfo.vue';
import carbottom from './childComps/CartBottomBar';
import Scroll from 'components/common/scroll/Scroll';
import CartBottomBar from './childComps/CartBottomBar.vue';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      NavBar,
      cartinfo,
      Scroll,
      carbottom,
        CartBottomBar
    },
    data() {
      //这里存放数据
      return {
        titlestr:'购物车'
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
.cart-nav{
  background-color:var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 9;
}
.cart{
  height: 100vh;
}
.content{
    /* height: calc(100%-44px-49px); */
    position: absolute;
  /*相对于整个的绝对定位*/
  top: 44px;
  bottom: 89px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.bottom{
  position: relative;
  height: 50px;
  width: 100%;
  bottom: 40px;
}
</style>
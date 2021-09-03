<!--  -->
<template>
  <div id='home'>
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <TabControl class="tab-control" :titles="titles" @tabclick="tabclick" ref="tabcontrol1" v-show="istabFiex"></TabControl>
      <Scroll class="scroll-content" ref="scroll" 
      :probe_type="0" 
      @scroll="contentscroll" 
      :pullUpLoad="true"
      @pullingUp="loadmore">
        <!-- ref监听组件对象 -->
        <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="swiperimageload"/>
        </a>
      </SwiperItem>
    </Swiper>
  <HomeRecomendViews :recommends="recommends"></HomeRecomendViews>
 <TabControl class="tab-control1" :titles="titles" @tabclick="tabclick" ref="tabcontrol2"></TabControl>
 <GoodsList :goods="goods[type].list"></GoodsList>
 <!-- <GoodsList :goods="goods[type].list"></GoodsList>
  <GoodsList :goods="goods[type].list"></GoodsList> -->

      </Scroll>
      <back-top @click.native="backtopclick" v-show="isshowtop"></back-top>  
      <!--组件监听点击@click.native -->

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue';
import Swiper  from "components/common/swiper/Swiper";
import SwiperItem  from "components/common/swiper/SwiperItem";
import TabControl from 'components/common/tabcontrol/TabControl';
import Scroll from 'components/common/scroll/Scroll';

import GoodsList from 'components/content/goods/GoodsList';
import BackTop from 'components/content/backtop/BackTop';

import Rcommends from "./childCompends/HomeRecomendViews";
import HomeRecomendViews from './childCompends/HomeRecomendViews.vue';


import {getHomeMultidata} from "network/home";
import {getHomeGoods} from "network/home";
import {debounce} from "common/untils";
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
        NavBar,
        Swiper,
        SwiperItem,
        Rcommends,
        HomeRecomendViews,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data() {
      //这里存放数据
      return {
        banners:[],
        recommends:[26],
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[{image: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/196993935/O1CN01WAhIFK1ewHDkNoNwY_!!0-item_pic.jpg_250x250.jpg_.webp"}
          ,{image: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3004857469/O1CN01MyggUe252quHzQbpF_!!3004857469.jpg_250x250.jpg_.webp"},
          {image: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/641725918/O1CN01iCusiU1taUcI15yi8_!!0-item_pic.jpg_250x250.jpg_.webp"},
          {image: "https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2448721589/O1CN01z2Kxpj1Nbo2gHEiZ6_!!2448721589.jpg_250x250.jpg_.webp"},
          {image: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3699339440/O1CN01eadgUG2JbZX8rCwxg_!!3699339440-0-lubanu-s.jpg_250x250.jpg_.webp"},
          {image: "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3310310137/O1CN01efdrHQ1CsmxHlrUgH_!!0-item_pic.jpg_250x250.jpg_.webp"}]},
          'new':{page:0,list:[{image:"https://gw.alicdn.com/bao/upload/O1CN01CBQtDn21spNFMUYu0_!!6000000007041-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01CBQtDn21spNFMUYu0_!!6000000007041-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01qCre101QT3J6XW1Sn_!!6000000001976-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01HNlYiT211F2clTw6H_!!6000000006924-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN018SqpYp1oXg5PaEnT9_!!6000000005235-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01slJ3q31hEiNcUNe6i_!!6000000004246-0-yinhe.jpg_Q75.jpg_.webp"}]},
          'sell':{page:0,list:[{image:"https://gw.alicdn.com/bao/upload/O1CN01tSZ99L1D7Rby2PxYY_!!6000000000169-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01RkMsv61kLzWITi1ft_!!6000000004668-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01qCre101QT3J6XW1Sn_!!6000000001976-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01P5mbFW1bJOjPUvp0q_!!6000000003444-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01IvqSXT1ycqi5jDnsG_!!6000000006600-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01LOID8T29J7QhS5V8j_!!6000000008046-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01LOID8T29J7QhS5V8j_!!6000000008046-0-yinhe.jpg_Q75.jpg_.webp"}]},
        },
        type:'pop',
        isshowtop:false,
        tabOffsetTop:0,
        istabFiex:false,
        saveScrollY:0
        // goods:{
        //   'pop':{page:0,list:[]},
        //   'new':{page:0,list:[]},
        //   'sell':{page:0,list:[]},
        // }
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

//防抖debounce代码：
// debounce(func,delay){
//   let timer=null

//   return function(...args){
//     if(timer)clearTimeout(timer)
//     timer=setTimeout(() => {
//       func.apply(this,args)
//     }, delay);
//   }
// },


      //事件监听相关的方法
  tabclick(index){
    if(index==0){
      this.type='pop'
    }
    if(index==1){
      this.type='new'
    }
    if(index==2){
      this.type='sell'
    }
    this.$refs.tabcontrol2.currentindex=index;
    this.$refs.tabcontrol1.currentindex=index;
  },
//返回顶部
backtopclick(){
  console.log('dianji');
  this.$refs.scroll.scroll&&this.$refs.scroll.scroll.scrollTo(0,0,1000);//x/y,1000ms后执行完成  先判断有没有scroll
},
contentscroll(position){
  // console.log(position)
  if(position.y<-300){
    this.isshowtop=true;
  }else{
    this.isshowtop=false;
  }
  //2.tabcontrol是否固定悬浮
  this.istabFiex=(-position.y)>this.tabOffsetTop
},
swiperimageload(){
  console.log(this.$refs.tabcontrol2.$el.offsetTop);
  //获取tabcontrol的offsettop的高度 $el:用于获取组件中的元素
  this.tabOffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
},
loadmore(){
  console.log('123')
  const list=[{image:"https://gw.alicdn.com/bao/upload/O1CN01tSZ99L1D7Rby2PxYY_!!6000000000169-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01RkMsv61kLzWITi1ft_!!6000000004668-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01qCre101QT3J6XW1Sn_!!6000000001976-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01P5mbFW1bJOjPUvp0q_!!6000000003444-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01IvqSXT1ycqi5jDnsG_!!6000000006600-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01LOID8T29J7QhS5V8j_!!6000000008046-0-yinhe.jpg_Q75.jpg_.webp"},
          {image:"https://gw.alicdn.com/bao/upload/O1CN01LOID8T29J7QhS5V8j_!!6000000008046-0-yinhe.jpg_Q75.jpg_.webp"}];
  this.goods[this.type].list=[...this.goods[this.type].list, ...list];
  this.$refs.scroll.scroll&&this.$refs.scroll.scroll.finishPullUp();//上拉加载结束，才能继续下次
  //this.$refs.scroll.scroll.refresh();//刷新scroll重新计算高度
},
      //网络请求
      getHomeMultidata(){
          getHomeMultidata().then(res=>{
           console.log(res);
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        //请求商品数据
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list);//加入数组跟for循环一样
          this.goods[type].page+=1;
          
        })
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      this.getHomeMultidata();
      // this.getHomeGoods('pop');
      // this.getHomeGoods('new');
      // this.getHomeGoods('sell');
      // getHomeMultidata().then(res=>{
      //   // console.log(res);
      //   this.banners=res.data.banner.list;
      //   this.recommends=res.data.recommend.list;
      // })
      //请求商品数据
      // getHomeGoods('pop',1).then(res=>{
      //   console.log(res);
      // })

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
     const brefresh=debounce(this.$refs.scroll.refresh,20);
     console.log(brefresh)
      //3.监听item中图片加载完成
      this.$bus.$on('itemimageload',()=>{
        console.log('---');  
        brefresh()
        //  this.$refs.scroll.scroll&&this.$refs.scroll.refresh();//刷新scroll重新计算高度
        })
      //2、获取tabcontrol的offsettop的高度 $el:用于获取组件中的元素
      


    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前  "better-scroll": "^1.13.2",
    destroyed() {

    }, //生命周期 - 销毁完成
    activated() {
      this.$refs.scroll.scroll.scrollTo(0,this.saveScrollY,0)
      this.$refs.scroll.refresh()
    }, //进来如果页面有keep-alive缓存功能，这个函数会触发
    deactivated() {
      this.saveScrollY=this.$refs.scroll.getscrollY()
;
    }, //离开如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
  /*可视高度  100vw可视宽度*/
  /* position: relative; */
}
.home-nav{
  background-color:var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 9;
}
/* .tab-control{
  position: sticky; */
  /*悬浮属性*/
  /* top: 44px;
  background-color: white;
  z-index: 9;
} */
.tab-control{
  background-color: white;
  position: relative;
  /* position: fixed;
  width: 100%; */
  z-index: 9;
}
.scroll-content{
  /* height: 300px;
  background-color: red; */
  overflow:hidden;/*超过部分隐藏*/
  position: absolute;
  /*相对于整个的绝对定位*/
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/*
.content{
  height: calc(100%-93px);/*calc是 css3提供的一个在css文件中计算值的函数：*/
  /*overflow: hidden;*/
  /* margin-top: 44px; */
/*}*/

</style>
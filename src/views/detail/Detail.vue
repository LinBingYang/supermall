<!--  -->
<template>
  <div id="detail">
      <DetailNavBar class="detail-nav" @titleclick="titleclick" ref="nav"></DetailNavBar>
      <!-- 详情页{{iid}} -->
      <Scroll class="content" ref="scroll" 
      :probe_type="3"
      @scroll="contentscroll">
      
     
         <Swiper class="detail-swiper">
      <SwiperItem v-for="(item, index) in topimage" :key="index" >
        <a href="">
          <img :src="item" alt="">
        </a>
          
      </SwiperItem>
    </Swiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <detailshop-info :shop="shop"></detailshop-info>
    <detail-info :detailInfo="detailinfo" @loadImgEvent="detailimageload"></detail-info>
    <DetailParamInfo :paramInfo="paramsinfo" ref="param"></DetailParamInfo>
    <DetailCommentInfo :info="commentInfo" ref="comment"></DetailCommentInfo>
    <GoodsList :goods="recomlist" ref="recom"></GoodsList>
      </Scroll>
     <detail-bottom-bar @addToCart="cartclick"/>
      </div>
      
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import DetailNavBar from './childComps/DetailNavBar';
import Swiper  from "components/common/swiper/Swiper";
import SwiperItem  from "components/common/swiper/SwiperItem";
import DetailBaseInfo  from "./childComps/DetailBaseInfo";
import DetailshopInfo  from "./childComps/DetailshopInfo";
import DetailInfo from "./childComps/DetailInfo";
import DetailParamInfo from "./childComps/DetailParamInfo"
import DetailCommentInfo from "./childComps/DetailCommentInfo"
import GoodsList from 'components/content/goods/GoodsList';
import DetailBottomBar from './childComps/DetailBottomBar'
import Scroll from 'components/common/scroll/Scroll';
import {debounce} from "common/untils";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop
} from "network/detail";
  export default {
    name:'detail',
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
  },
    components: {
        DetailNavBar,
        Swiper,
        SwiperItem,
        DetailBaseInfo,
        DetailshopInfo,
        Scroll,
        DetailInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar
    },
    data() {
      //这里存放数据
      return {
          iid:null,
          topimage:[],
          goods:{},
          shop:{},
          detailinfo:{},
          paramsinfo:{},
          commentInfo:{},
          recomlist:[],
          detailitemlistenner:null,
          themeTopYs:[],
          getthemeTopY:null,
          currentindex:0
      }
    },
    //监听属性 类似于data概念
    computed: {

    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getDetail(iid){
            getDetail(iid).then(res=>{
                console.log(res);
                const data=res.result;
                this.topimage=data.itemInfo.topImages;
                this.goods = new Goods(
                  data.itemInfo,
                  data.columns,
                  data.shopInfo.services
      );
      this.shop=new Shop(data.shopInfo);
      //取出详情数据
      this.detailinfo=data.detailInfo;
      //取出参数数据
      this.paramsinfo=data.itemParams;
      //取出评论数据.
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0];
      }
      // this.$nextTick(()=>{//数据加载渲染完成执行
        
      // })
            });
        },
        getRecommend(){
          getRecommend().then(res=>{
            console.log(res);
            this.recomlist=res.data.list;
       })
        },
//导航栏头部点击
        titleclick(index){
          console.log(index)
          this.$refs.scroll.scroll.scrollTo(0,this.themeTopYs[index],100)
        },
        detailimageload(){
          this.getthemeTopY();
        },
        contentscroll(position){
          
          // console.log(this.themeTopYs);
          const positionY=position.y;
          // console.log(positionY);
        
          if(positionY<=this.themeTopYs[0]&&positionY>this.themeTopYs[1]){
            this.currentindex=0;
            this.$refs.nav.currentindex=0;
          }else if(positionY<=this.themeTopYs[1]&&positionY>this.themeTopYs[2]){
              this.currentindex=1;
              this.$refs.nav.currentindex=1;
          }else if(positionY<=this.themeTopYs[2]&&positionY>this.themeTopYs[3]){
              this.currentindex=2;
              this.$refs.nav.currentindex=2;
          }else{
            this.$refs.nav.currentindex=3;
          }
          // this.$refs.nav.currentindex=this.currentindex;
        },
        cartclick(){
          console.log('加入购物车')
          const product={}
          product.image=this.topimage[0];
          product.title=this.goods.title;
          product.desc=this.goods.desc;
          product.price=this.goods.lowNowPrice;
          product.iid=this.iid;
          product.checked=true;
          // console.log(product);
          // this.$store.commit('addCart',product)
          this.$store.dispatch('addCart',product).then(res =>{
            console.log(res)
            this.$toast.show(res,1500)
          })
        }
       
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.iid=this.$route.params.id;
        this.getDetail(this.iid);
        this.getRecommend();//获取推荐列表
        this.getthemeTopY=debounce(()=>{//防抖
            this.themeTopYs=[]
            this.themeTopYs.push(0);
            this.themeTopYs.push(-this.$refs.param.$el.offsetTop);
            this.themeTopYs.push(-this.$refs.comment.$el.offsetTop);
             this.themeTopYs.push(-this.$refs.recom.$el.offsetTop);
            // console.log(this.themeTopYs)
        })
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      const brefresh=debounce(this.$refs.scroll.refresh,20);
     console.log(brefresh)
      //3.监听item中图片加载完成
      this.detailitemlistenner=()=>{
        console.log('---');  
        brefresh();
        }
    this.$bus.$on('itemimageload',this.detailitemlistenner)

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {
      this.$bus.$off('itemimageload',this.detailitemlistenner)
      }, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发

  }
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  /* overflow: hidden; */
}
/* 隐藏tabbar */
#detail{
  background-color: white;
  position: relative;
  z-index: 9;
  height: 100vh;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: white;
}
.content{
  /* height: calc(100%-44px); */
 
  position: absolute;
  /*相对于整个的绝对定位*/
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
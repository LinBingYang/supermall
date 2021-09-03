<!--  -->
<template>
  <div class='goodlist-item' @click="itemclick">
      <img :src="goodsitem.image" alt="" @load="imageload">
      <div class="goods-info">
          <p>春季下载小甲鱼</p>
          <span class="price">396.5</span>
          <span class="collect">1000</span>
        </div>
      </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
    goodsitem:{
        type:Object,
        default(){
            return{}
        }
    }
  },
    components: {},
    data() {
      //这里存放数据
      return {}
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      imageload(){
        // console.log('图片加载完');
        this.$bus.$emit('itemimageload');
      },
      itemclick(){
        console.log('xiangqing');
        this.$router.push('/detail/'+123321)
      }
    },
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
.goodlist-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
}
.goodlist-item img{
   width: 100%;
   border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}
.goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}
.goods-info .price{
    color: pink;
    margin-right: 20px;
}
.goods-info .collect{
    position: relative;
}
.goods-info .collect::before{
    position: absolute;
    content: '';
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/tabbar/b00.png") 0 0/14px 14px;
}
</style>
<!--ref 明确拿到对应的组件名称  -->
<template>
  <div class='wrapper' ref="wrapper">  
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BetterScroll from 'better-scroll'
  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
    probe_type:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
    components: {},
    data() {
      //这里存放数据
      return {
          scroll:null
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      refresh(){
        return this.scroll.refresh();
      },
      getscrollY(){
        return this.scroll?this.scroll.y:0;
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.scroll=new BetterScroll(this.$refs.wrapper,{
        probeType:this.probe_type,//0和1不检测实时位置 2手指在上面的时候监测，离开就没有  3只要是滚动都监测
        pullUpLoad:this.pullUpLoad,
        click:true
      })//传入一个标签
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
        this.$emit('scroll',position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
        this.$emit('pullingUp')
        //数据加载完成重新加载上拉功能
        //  setTimeout(() => {
        //   this.scroll.finishPullUp()
        //   }, 2000);
        
      })
    },
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
</style>
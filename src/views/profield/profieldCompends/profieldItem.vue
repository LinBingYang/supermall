<!--  -->
<template>
  <div class='profield-item'>
      <slot  name="p-icon"></slot>
   <div class="text"><slot  name="p-text"></slot></div>  
    
   

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
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
.profield-item{
    display: flex;
    height: 50px;
    border-bottom: 1px solid rgba(224, 220, 220, 0.4);
}
/* .profield-item i{
    display: inline-block;
    margin-top: 15px;
    margin-left: 15px;
    width: 20px;
    height: 1ex;
     background: url("~assets/img/profile/vip.svg") no-repeat center;


} */
.profield-item img{
    margin-top: 15px;
    margin-left: 15px;
    width: 20px;
    height: 20px;

}
.text{
    margin-left: 12px;
    line-height:50px;

    /* vertical-align:middle; */
}
</style>
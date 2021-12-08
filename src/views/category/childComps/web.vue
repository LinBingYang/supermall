<!--  -->
<template>
  <div class='web'>
      <NavBar class="nav">
          <div slot="left" @click="back" class="left">
             <img src="~assets/img/home/back.png" alt="">
          </div>
          <div slot="center" class="navtitile">
              <div 
              class="titleitem" 
              >{{title}}</div>
          </div>

          </NavBar>
          <iframe :src="url" frameborder="0" class="iframe"></iframe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
  },
    components: {
        NavBar
    },
    data() {
      //这里存放数据
      return {
          title:'',
          url:''
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {
        '$route' (to, from) {   //监听路由是否变化
            this.title=this.$route.query.title;
        this.url=this.$route.query.path;
        console.log('321'+this.$route.query)
        }
    },
    //方法集合
    methods: {
        back(){
            console.log('fanhui')
            this.$router.back()
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.title=this.$route.query.title;
        this.url=this.$route.query.path;
        console.log('321'+this.$route.query)
        
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
.web{
     background-color: white;
    position: absolute;
     z-index: 99;
     height: 100vh;
     width: 100%;
}
.nav{
    background-color: royalblue;
}
.titleitem{
    flex: 1;
}
.navtitile{
    display: flex;
    font-size: 13px;
    color: white;
}
.titleActive{
    color: pink;
}
.left img{
    height: 25px;
    width: 25px;
    margin-left: 10px;
    margin-top: 10px;
    opacity: 0.8;
}
.iframe{
        width: 100%;
        height: calc(100% - 44px);
        transform-origin:0  0;
    }
</style>
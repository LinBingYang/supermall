<!--  -->
<template>
  <div class='detail-comment'>
      <!-- {{info}} -->
      <div class="title" >
          <div class="title-left">
          用户评价
      </div>
      <div class="more" >
          更多
      </div></div>
      
      <div class="user">
          <img :src="info.user.avatar" alt="" >
          <span >{{info.user.uname}}</span>

      </div>
      <div class="content">
          {{info.content}}
          <p class="content_info">
          {{ info.created | dateShow}} {{ info.style }}
        </p>
      </div>
      <div class="image" v-for="(item,index) in info.images" :key="index">
          <img :src="item" alt="">

      </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {formatDate} from "common/untils";
  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
    info:{
        type:Object,
        default(){
            return {}
        }
    }
    
  },
  filters: {
    dateShow(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
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
.detail-comment{
 position: relative;
    font-size: 11px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
}
.title-left{

  position: absolute;
  left: 10px;
  font-size: 15px;
}
.more{
 position: absolute;
    right: 10px;
font-size: 15px;
}
.user {
  padding: 30px 0;
  line-height: 1.8rem;
  display: flex;
}
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.04rem solid rgba(128, 128, 128, 0.3);
}
.user span {
  margin-left: 15px;
  height: 50px;
  margin-top: 5px;
}
.content{
    margin-top: -30px;
    line-height: 1rem;
  color: #666;
}
.content_info {
  color: #999;
  padding: 0.3rem 0;
}
.image{

    display:inline-block; 
    /* float: left; */
}
.image img{
    width:110px;
    height: 100px;
    margin-left: 3px;
}
</style>
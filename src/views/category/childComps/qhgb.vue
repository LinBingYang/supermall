<!--  -->
<template>
  <div class='qhgb'>
      <NavBar class="nav">
          <div slot="left" @click="back" class="left">
             <img src="~assets/img/home/back.png" alt="">
          </div>
          <div slot="center" class="navtitile">
              <div 
              class="titleitem" 
              >气候公报</div>
          </div>
          </NavBar>
<div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="getHYlist"
      infinite-scroll-disabled="disabled">
      <li v-for="(item, index) in list" :key="index" class="list-item" @click="itemclick(item)">
          <img :src="item.icon" alt="">
          
          <div class="content">
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
              </div>
          </li>
    </ul>
    <el-row style="height: 50px" v-if="loading"
             v-loading="loading"
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.3)"></el-row>
    <p v-if="noMore">没有更多了</p>
  </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import pcs from  "common/common";
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
          page:0,
          count:15,
          list:[],
          currentlist:[],
          loading: false
      }
    },
    //监听属性 类似于data概念
    computed: {
         noMore () {
           console.log(this.currentlist.length);
            return this.currentlist.length==0;
        },
        disabled () {
            return this.loading || this.noMore
        }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        getHYlist(page){
            this.loading = true;
    this.page=this.page+1;
      var data = {
        p: JSON.stringify({
          h: {
            p: ""
          },
          b: {
            ycgb_list: {
              count: this.count.toString(),
              page: this.page.toString()
             
            }
          }
        })
      };
      console.log(data);
      pcs.post("/api/ztq_sh_jc/service.do", data, res => {
        // console.log(res);
        this.loading = false;
        var infolist=res.b.ycgb_list.info_list;
        this.currentlist=infolist;
        this.list=this.list.concat(infolist);
        console.log(this.list);
      });
    },
    back(){
            console.log('fanhui')
            this.$router.back()
        },
        itemclick(item){
            
            console.log(item)
            console.log(item.title)
            this.$router.push({
          path: '/web',
          query: {
            title:item.title,
            path:item.path
          }
        })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.page=0;
        this.getHYlist(this.page)
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
.qhgb{
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


.infinite-list-wrapper {
      width: 100%;
      /* height:100px; */
  }
  .infinite-list-wrapper p {
      text-align: center;
  }
  
.list-item{
    display: flex;
    border-bottom: 2px solid rgba(224, 220, 220, 0.8);
}
.list-item img{
    margin: 10px;
    width: 35px;
    height: 35px;
}
.content{
    display: block;
}
.title{
    margin-top: 5px;
    font-size: 15px;
}
.time{
    margin-top: 5px;
    font-size: 13px;
}
</style>
<!--  -->
<template>
<div class="amap-page-container">
    <div :style="{width:'100%',height:'400px'}">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zooms="[3,5]">
        <el-amap-marker v-for="(marker,index) in markers" 
        :position="marker.position" 
        :key="index" 
        :content="marker.icon" 
        :icon="marker.icon" class="marker">

        </el-amap-marker>
      </el-amap>
    </div>


    <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
      <span v-else>正在定位</span>
    </div>
    <div
      v-on:click="location()"
    >
      查询周边
    </div>
     <div
      v-on:click="newbeasier()"
    >曲线
    </div>
    <div
      v-on:click="newamap()"
    >地图
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BetterScroll from 'better-scroll'
import blue from "@/assets/img/tabbar/b00.png"


  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      let self = this
      return {
        
        scroll:null,
        data: [],
        markers: [],
         center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            loaded: false,
            plugin: [{
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 100,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
              extensions:'all',
              pName: 'Geolocation',
              doubleClickZoom:true,
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    console.log(result)
                    if (result && result.position) {
                      self.lng = result.position.lng;
                      self.lat = result.position.lat;
                      self.center = [self.lng, self.lat];
                      self.loaded = true;
                      self.$nextTick();
                    }
                  });
                }
              }
            }]
          
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      location(){
         var citySearch = new AMap.PlaceSearch();
                     citySearch.getLocalCity(function (status, result) {
                         if (status === 'complete' && result.info === 'OK') {
                             // 查询成功，result即为当前所在城市信息
                             let province = result.province;
                             let city = result.city;
                             console.log('123'+province)
                         }
                     })
                
      },
      newbeasier(){
        this.$router.push('/newbeasier');
      },
      newamap(){
        this.$router.push('/newamap');
      }
      
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      let self = this;
        let markers = [];
        let index = 0;
 
        let basePosition = [119.59996, 26.037646];
        let num = 10;
 
        // content添加相应的内容**********
        for (let i = 0 ; i < num ; i++) {
          markers.push({
            position: [basePosition[0], basePosition[1] + i * 1],
            content: `content ${i}`,
            icon:require('./b00.png')
          });
        }
        this.markers = markers;
      
     //  在created 里面 直接调用   this.drawLine();    回报这个错误   因为这里时候echarts还没有加载出来   created hook: "TypeError: Cannot read property 'getAttribute' of null"
     
      /*   axios.post('*********', ).then(res => { */
          var arr = []  // 在这里把数据过滤成Ehcarts 需要的格式 
          for (var i = 0; i < 10; i++) {
            var json = {
              name: '视频广告' + i,
              type: 'line',
              stack: '广告',
              data: [150 + i, 2 - i, 20 * i, 154 - 100, 19 - 8, 30, 40]
            }
            arr.push(json)
          }
          this.data = arr
          // 主要 echarts不能v-if 也会报错
         // this.drawLine();      axios 里面必须在调用一次 不然回报错   created hook: "TypeError: Cannot read property 'getAttribute' of null" 
      /*    }) */
    
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
      // this.scroll=new BetterScroll('.wrapper1',{
      //   movable: true,
      //   zoom: true,
      //   probeType:3,//0和1不检测实时位置 2手指在上面的时候监测，离开就没有  3只要是滚动都监测
      //   pullUpLoad:true,
      //   click:true
      // })//传入一个标签
      // this.scroll.on('scroll',(position)=>{
      //   // console.log(position);
      // })
      // this.scroll.on('pullingUp',()=>{
      //   console.log('上拉加载更多');
      //   //数据加载完成重新加载上拉功能
      //    setTimeout(() => {
      //     this.scroll.finishPullUp()
      //     }, 2000);
        
      // })
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
.wrapper1{
  height: 200px;
  background-color: red;

  /* overflow-y: scroll; */
}
.amap-demo {
    height: 400px;
  }
  .amap-icon img{
    width: 10px;
    height: 10px;
  }
</style>
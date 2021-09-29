<!--  -->
<template>
  <div id="container">
      <button class="btn1" @click="addpoline">添加折线</button>
       <button class="btn2" @click="addmark">添加标注</button>
       <button class="btn3" @click="addimagelayer">添加图片layer</button>
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
      return {
          map:null,
		polyline:null,
		infoWindow:null,
		mapContent:'',
		zoom:'',
		markers:[],
		cluster:null,
        isshowoverlay:true,
        isshowmarker:true
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        addpoline(){
            
            if(this.isshowoverlay){
                var lineArr = [
        [119.368904, 26.043423],
        [119.382122, 26.031176],
        [119.387271, 26.022501],
        [119.398258, 26.014600]
    ];
    this.polyline = new AMap.Polyline({
        path: lineArr,          //设置线覆盖物路径
        strokeColor: "#3366FF", //线颜色
        strokeWeight: 5,        //线宽
        strokeStyle: "solid",   //线样式
    });
    this.map.add(this.polyline);
            }else{
                // 获取已经添加的覆盖物
                this.map.remove(this.map.getAllOverlays());
            }
            
    this.isshowoverlay=!this.isshowoverlay;
    console.log(this.isshowoverlay);
        },
        addmark(){
            if(this.isshowmarker){
                var marker = new AMap.Marker({
                        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                         position: [119.305467, 26.087761]
            });
            marker.name='112'
            this.map.add(marker);
             var clickHandle = AMap.event.addListener(marker, 'click', function(e) {
             var cur =JSON.parse(JSON.stringify(e.target.getExtData()));
                //得到的数据
                console.log(e.target.name);
            });
            }else{
                // 获取已经添加的marker
                ;
                this.map.remove(this.map.getAllOverlays('marker'));

            }
            this.isshowmarker=!this.isshowmarker;
        },
        addimagelayer(){
            console.log('321');
            // 创建图片图层
        var imageLayer = new AMap.ImageLayer({
            
         bounds: new AMap.Bounds([73.502502,3.837097],   //左下角
                [135.083679,  53.563721]    //右上角
            ),
         url: 'http://ztq.soweather.com:8099/ztq_sh/sh_ht/HtImgNew/2021/9-28/0975edd7b3974087918a3a13c3c271bc.png', // 图片 Url
        zIndex:2,
        zooms: [3, 18],// 设置可见级别，[最小级别，最大级别]
       
        });

// 将图层添加至地图实例
this.map.add(imageLayer);
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.map = new AMap.Map('container', {
 	resizeEnable: true,    //是否监控地图容器尺寸变化
    zoom:5,               //初始化地图层级
    center: [119.3,26.08] //初始化地图中心点
    });
    this.zoom = this.map.getZoom();  //获取当前地图级别
    // this.map.setMapStyle('amap://styles/whitesmoke');  //自定义地图的样式
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
#container {
    background-color: white;
  position: relative;
  z-index: 99;
  height: 100vh;
    /* width:100%; 
    height:100%; */
    /* overflow: hidden;
    margin-bottom: 49px; */
    }
    .btn1{
        position: absolute;
        z-index: 100;
        height: 30px;
        width: 70px;
        background-color: pink;
        left: 0;
        top: 50px;
    }
    .btn2{
        position: absolute;
        z-index: 100;
        background-color: pink;
        left: 0;
        top: 90px;
        height: 30px;
        width: 70px;
    }
    .btn3{
        position: absolute;
        z-index: 100;
        background-color: pink;
        left: 0;
        top: 130px;
        height: 30px;
        width: 70px;
    }
</style>
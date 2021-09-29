<!--  -->
<template>
  <div class=''>
       <div id="myChart" style="width: 100%;height:400px;">123</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
// 以下的组件按需引入
require("echarts/lib/component/tooltip"); // tooltip组件
require("echarts/lib/component/title"); //  title组件
require("echarts/lib/component/legend"); // legend组件
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
    methods: {
        initChart(){
            // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            backgroundColor:'#2c3e50',
            title:{//标题组件
                top:20,
                text:'曲线视图',
                subtext:'初始',
                textStyle:{
                    fontSize:16,
                    color:'#F1F1F3'
                },
                left:'1%'
            },
            //提示框组件
            tooltip: {
            show:false,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              lineStyle:{
                  color:'#57617B'
              }
            }
          },
        //   legend: {
        //     top:20,
        //     icon:'circle',
        //     itemWidth:14,
        //     itemHeight:5,
        //     itemGap:13,
        //     data: ['直接访问', '邮件营销', '联盟广告'],
        //     right:'4%',
        //     textStyle:{
        //             fontSize:12,
        //             color:'#F1F1F3'
        //         }
        //   },
          grid:{
              top:100,
              left:'2%',
              right:'2%',
              bottom:'2%',
              containLabel:true
          },
          
          xAxis: [{
            type: 'category',
            boundaryGap:true,//boundaryGap属性，设置为false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
            axisLine:{
                lineStyle:{
                    color:'#57617B',
                    
                }
            },
            axisTick: {
                show: false//去掉坐标轴刻度线
                },
            data: ['13:00', '13:05','13:10','13:10','13:20','13:00','13:30','13:00','13:00','13:00','13:00','13:00'],
            // splitLine:{//坐标轴在grid区域的分割线
            //     show:true,
            //     lineStyle:{
            //         color:'#57617B',
            //         width: 1
            //     }
            // }
            
          }],
          yAxis: [{
            //  offset:20, // 偏移距离
            start: 10,
            type: 'value',
            name:'(%)',
            min: 0, // 刻度最小值
            max: 105, // 刻度最大值（需要动态获取最大值,并且能被3整除（向下取整再乘回来））
            splitNumber: 7, // 横线数
            interval: 15, // 刻度间隔
            
            axisTick:{
                show:false//是否显示Y轴
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#57617B'
                }
            },
            axisLabel:{
                margin:10,
                textStyle:{
                    fontSize:14
                }
            },
            splitLine:{//坐标轴在grid区域的分割线
                show:true,
                lineStyle:{
                    color:'#57617B',
                    type:'dashed',
                    width: 1
                }
            },
         
        

          }],
           dataZoom: [
          {
            // start: 0, //默认为0
            // end: 100 - 1500 / 31, //默认为100
            endValue: 6, // 一次性展示7个。
            type: "slider",
            
            show: false,
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: 10, //组件高度
            left: "10%", //左边的距离
            right: "10%", //右边的距离
            bottom: 26, //右边的距离
            borderColor: "#000",
            fillerColor: "#269cdb",
            borderRadius: 5,
            backgroundColor: "#33384b", //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            filterMode: "filter",
          },
          //下面这个属性是里面拖到
          {
            type: "inside",
            show: true,
            xAxisIndex: [0],
            start: 0, //默认为1
            end: 100 - 1500 / 31, //默认为100
          },
        ],
          series: [{
              name:'1123',
              type:'line',
              smooth:true,
              symbol:'circle',
            //   showSymbol: false, // 让圆点默认不显示,移入显示
            symbolSize: 7, // 设置折线上圆点大小
              data: [76, 60, 70, 80, 90, 100,77, 60, 55, 80, 90, 100],
              lineStyle:{
                  normal:{
                      width:2
                  },
             
              },
              areaStyle:{
                  normal:{
                      color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                          offset:0,
                          color:'rgba(137,189,27,0.3)'
                      },
                      {
                          offset:0.8,
                          color:'rgba(137,189,27,0)'
                      }],false),
                      shadowColor:'rgba(0,0,0,0.1)',
                      shadowBlur:10
                  }
              }
          },
          {
              name:'1123',
              type:'bar',
            //   symbol:'circle',
              barWidth : 10,
            //   showSymbol: false, // 让圆点默认不显示,移入显示
            symbolSize: 7, // 设置折线上圆点大小
              data: [76, 60, 70, 80, 90, 100,77, 60, 55, 80, 90, 100],
              lineStyle:{
                  normal:{
                      width:1
                  },
             
              },
              itemStyle: {         //图形样式
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{    //颜色渐变
                    offset: 0,
                    color: '#fccb05'
                }, {
                    offset: 1,
                    color: '#f5804d'
                }]),
                // barBorderRadius: 12,
            }},
          }]
        })
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.initChart();
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
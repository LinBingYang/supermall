import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import store from './store'
import toast from './components/common/toast'
import VueLazyload from 'vue-lazyload'//图片懒加载插件

import  * as echarts from "echarts"
Vue.prototype.$echarts = echarts

import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '1a98a4001286b8e9ebc007acdcffe9e6',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.Geolocation','AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

Vue.config.productionTip = false

Vue.use(toast)

// 配置项
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: require('./assets/img/common/placeholder.png')
 
})
Vue.use(ElementUI)

Vue.prototype.$bus=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

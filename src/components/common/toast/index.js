import Vue from 'vue'
import Toast from './Toast'
const obj={}

obj.install = function(vue){
  // document.body.appendChild(Toast.$el)
  //1创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  
  //2使用new的方式，根据组件构造器，可以创建出来一个组件对象
  const toast = new toastContrustor()

  //3将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  //4 toast.$el对应的就是div
  document.body.appendChild(toast.$el)
  
  Vue.prototype.$toast = toast;

}
export default obj
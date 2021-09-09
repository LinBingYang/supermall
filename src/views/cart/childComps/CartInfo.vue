<!--  -->
<template>
  <div class='car-info'>
      <div class="cart_list_item" v-for="(item,index) in list" :key="index">
    <div class="item-selector">
      <check-button :is-checked="item.checked" @click.native="checkClick(item)"></check-button>
    </div>
    <div class="item_img">
      <img :src="item.image" alt="" />
    </div>
    <div class="item_info">
      <p class="item_title">{{ item.title }}</p>
      <p class="item_desc">{{ item.desc }}</p>
      <span class="item_price">￥{{ item.price }}</span>
      <span class="item_count">x{{ item.count }}</span>
    </div>
  </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckButton from 'components/content/checkButton/CheckButton.vue';
  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
    list:{
        type:Array,
        default(){
            return [];
        }
    }
  },
    components: {
        CheckButton
    },
    data() {
      //这里存放数据
      return {
          cartlist:[]
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        checkClick(item) {
            console.log(item)
      item.checked =! item.checked;
    },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        // this.cartlist=$store.state.cartList;
    },
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
.cart_list_item {
  width: 100%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 5px;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
}
.item_img {
  width: 20%;
  height: 100%;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
}

.item_info {
  position: relative;
  width: calc(100% - 30%);
  margin-left: 0.4rem;
}
.item_info p {
  /* display: inline-block; */
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  /* padding-bottom: 0.5rem; */
  padding-top: 5px;
}
.item_desc {
  font-size:0.8rem;
  padding-top:6px;
  color: gray;
}
.item_price {
  position: absolute;
  left: -5px;
  bottom: 5px;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: 0.75rem;
}
</style>
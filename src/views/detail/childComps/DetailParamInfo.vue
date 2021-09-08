<!--  -->
<template>
  <div id="detail_params">
      <table  class="params_rule" >
          <tr v-for="(item,index) in paramInfo.rule.tables[0]" :key="index">
              <td v-for="(tritem,trindex) in item" :key="trindex">
            {{ tritem }}
        </td>
          </tr>
        
    </table>

    <table  class="params_set">
        <tr v-for="(tritem,trindex) in paramInfo.info.set" :key="trindex">
          <th >
            {{ tritem.key}}
          </th>
          <td >
            {{ tritem.value}}
          </td>
        </tr>
    </table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
  props:{
    //取数据传值
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
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
#detail_params {
  font-size: 0.65rem;
  padding: 0.42rem 0rem;
  border-bottom: 0.3rem solid rgba(128, 128, 128, 0.2);
}
.params_rule,
.params_set {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
  margin: 0 auto;
  margin-bottom: 0.42rem;
  width: 90%;
}
.params_rule tr,
.params_set tr {
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.5);
}

.params_rule th {
  text-align: left;
  padding-right: 1rem;
  white-space: nowrap;
}
.params_rule td {
  padding: 0.5rem;
}

.params_set th {
  text-align: left;
  padding: 0.5rem 3.5rem 0.5rem 0rem;
  white-space: nowrap;
}
.params_set td {
  color: var(--color-high-text);
}

.info_img img {
  width: 100%;
}

</style>
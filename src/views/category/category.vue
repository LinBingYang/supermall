<!--  -->
<template>
  <div class="wrapper1">
  <ul class="content">
    <li>商品类别1</li>
    <li>商品类别2</li>
    <li>商品类别3</li>
    <li>商品类别4</li>
    <li>商品类别5</li>
    <li>商品类别6</li>
    <li>商品类别7</li>
    <li>商品类别8</li>
    <li>商品类别9</li>
    <li>商品类别10</li>
    <li>商品类别11</li>
    <li>商品类别12</li>
    <li>商品类别13</li>
    <li>商品类别14</li>
    <li>商品类别15</li>
    <li>商品类别16</li>
    <li>商品类别17</li>
    <li>商品类别18</li>
    <li>商品类别19</li>
    <li>商品类别20</li>
    <li>商品类别21</li>
    <li>商品类别22</li>
    <li>商品类别23</li>
    <li>商品类别24</li>
    <li>商品类别25</li>
    <li>商品类别26</li>
    <li>商品类别27</li>
    <li>商品类别28</li>
    <li>商品类别29</li>
    <li>商品类别30</li>
    <li>商品类别31</li>
    <li>商品类别32</li>
    <li>商品类别33</li>
    <li>商品类别34</li>
    <li>商品类别35</li>
    <li>商品类别36</li>
    <li>商品类别37</li>
    <li>商品类别38</li>
    <li>商品类别39</li>
    <li>商品类别40</li>
    <li>商品类别41</li>
    <li>商品类别42</li>
    <li>商品类别43</li>
    <li>商品类别44</li>
    <li>商品类别45</li>
    <li>商品类别46</li>
    <li>商品类别47</li>
    <li>商品类别48</li>
    <li>商品类别49</li>
    <li>商品类别50</li>
    <li>商品类别51</li>
    <li>商品类别52</li>
    <li>商品类别53</li>
    <li>商品类别54</li>
    <li>商品类别55</li>
    <li>商品类别56</li>
    <li>商品类别57</li>
    <li>商品类别58</li>
    <li>商品类别59</li>
    <li>商品类别60</li>
    <li>商品类别61</li>
    <li>商品类别62</li>
    <li>商品类别63</li>
    <li>商品类别64</li>
    <li>商品类别65</li>
    <li>商品类别66</li>
    <li>商品类别67</li>
    <li>商品类别68</li>
    <li>商品类别69</li>
    <li>商品类别70</li>
    <li>商品类别71</li>
    <li>商品类别72</li>
    <li>商品类别73</li>
    <li>商品类别74</li>
    <li>商品类别75</li>
    <li>商品类别76</li>
    <li>商品类别77</li>
    <li>商品类别78</li>
    <li>商品类别79</li>
    <li>商品类别80</li>
    <li>商品类别81</li>
    <li>商品类别82</li>
    <li>商品类别83</li>
    <li>商品类别84</li>
    <li>商品类别85</li>
    <li>商品类别86</li>
    <li>商品类别87</li>
    <li>商品类别88</li>
    <li>商品类别89</li>
    <li>商品类别90</li>
    <li>商品类别91</li>
    <li>商品类别92</li>
    <li>商品类别93</li>
    <li>商品类别94</li>
    <li>商品类别95</li>
    <li>商品类别96</li>
    <li>商品类别97</li>
    <li>商品类别98</li>
    <li>商品类别99</li>
    <li>商品类别100</li>
  </ul>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BetterScroll from 'better-scroll'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        scroll:null
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
     
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.scroll=new BetterScroll('.wrapper1',{
        movable: true,
        zoom: true,
        probeType:3,//0和1不检测实时位置 2手指在上面的时候监测，离开就没有  3只要是滚动都监测
        pullUpLoad:true,
        click:true
      })//传入一个标签
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
        //数据加载完成重新加载上拉功能
         setTimeout(() => {
          this.scroll.finishPullUp()
          }, 2000);
        
      })
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
</style>
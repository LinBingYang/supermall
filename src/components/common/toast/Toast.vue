<template>
  <div id="toast" v-show="isshow">
    <div >{{message}}</div>
  </div>
</template>

<script>
export default {
  props:{

  },
  data(){
    return {
      message:'',
      isshow:false
    }
  },
  methods:{
    show(message,duration=1500){
      this.isshow = true;
      this.message=message

      setTimeout(()=>{
        this.isshow = false
        this.message=''
      },duration)      
    }
  }
}
</script>

<style scoped>
  #toast{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,0.6);
    padding:8px 12px;
    color: #fff;
    border-radius: 10px;
    z-index: 9999999;
  }
</style>
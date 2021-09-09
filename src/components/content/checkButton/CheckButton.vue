<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style>
  .check-button{

    border-radius: 50%;
    height: 20px;
    border:2px solid #aaa
  }
  .check{
    background: red;
    border-color:red;
  }
  .check-button img{
    align-items: center;
    margin-top:2px;
  }
</style>
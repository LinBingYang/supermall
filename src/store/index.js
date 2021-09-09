import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2、创建store对象
const store=new Vuex.Store({
    state:{
        cartList:[]

    },
    mutations:{
        // addCart(state,payload){
        //     return new Promise((resolve) =>{
        //         let oldProduct=null;
        //         for(let item of state.cartList){
        //             if(item.iid==payload.iid){
        //                 oldProduct=item;
        //             }
        //         }
        //         console.log(oldProduct)
        //         if(oldProduct){
        //             oldProduct.count+=1
        //             resolve('当前商品数量加1')
        //         }else{
        //             payload.count=1   
        //         state.cartList.push(payload)
        //             resolve('加入购物车成功')
        //         }
        //     })
            
                
        // }
    },
    actions:{
        addCart(context,payload){
            return new Promise((resolve,reject)=>{
              let oldProduct=context.state.cartList.find(item=>item.iid===payload.iid)
              if(oldProduct){
                oldProduct.count+=1
                resolve('当前的商品数量加1')
              }else{
                payload.count=1   
                context.state.cartList.push(payload)
                resolve('添加购物车成功')
              }
            })
          }
    }
})
//3、挂载vue实例上
export default store
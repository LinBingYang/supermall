import axios from 'axios'

export function request(config){
 //1、创建axios实例
    const instance=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000    
    })

    //2.axios拦截器
    instance.interceptors.request.use(config=>{
        console.log('拦截成功'+config);
        return config;
    },err=>{
        return err;
    })
    //3响应拦截
    //返回状态判断
    instance.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return error;
    }
  )
    return instance(config)
}

// export function request(config){
//     return new Promise(
//         (resolve,reject)=>{
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000    
//     })
//     instance(config).then(res=>{
//         console.log(res);
//         resolve(res);
//     }).catch(err=>{
//         console.log(err);
//         reject(err);
//     })
//         }
//     )
// }
// export function request(config,success,failure){
//     const instance=axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000    
//     })
//     instance(config).then(res=>{
//         console.log(res);
//         success(res);
//     }).catch(err=>{
//         console.log(err);
//         failure(err);
//     })
// }
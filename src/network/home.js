
import {request} from './request'
let baseURL="http://152.136.185.210:7878/api/m5";
export function getHomeMultidata(){
    return request({
        url:baseURL+'/home/multidata'
    })
};
export function getHomeGoods(type,page){
    return request({
        url:baseURL+'/home/data',
        params:{
            type,
            page
        }
    })
}
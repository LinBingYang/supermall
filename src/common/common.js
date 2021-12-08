export default {
    path: window.location.protocol + '//' + window.location.host,
    loadJs,
    getUserSession,
    toChar,
    timetoChar,
    alert,
    alertwarning,
    alerterror,
    checkEmail,
    checkPhone,
    post,
    postJson,
    getjson,
    logoutAction,
    get,
    getFtpUrl,
    all,
    upload,
    down,
    page,
    postAction,
    getAction,
    postJsonAction,
    getJsonAction,
    uploadAction,
    ellipsis,
    trim,
    toFixed,
    getpath,
    isNumber,
    resetParams,
    hasPermission,
    pagepost,
    checkFileSuffix,
    timestampToTime,
    ToDegrees,
    numberToDate,
    information,
    information1,
    datedifference
}
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
// axios.defaults.baseURL = 'http://localhost:8088';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 响应拦截器
// axios.interceptors.response.use(function (response) {
//     console.log(response)
//     if (!response.data.success && response.data.errors.errorcode == 'LOGIN_TIME_OUT') {
//         // sessionStorage.removeItem("userName"
//         // that.$router.push({ path: "/login" });
//         router.push({ path: '/login' })
//         // next({
//         //   path: '/login',
//         //   // query: { redirect: to.fullPath }
//         // })
//     }
//     return response;
// }, function (error) {
//     // 后续增加全局处理，增加弹出窗等
//     return Promise.reject(error);
// }
// );

/**
 * get请求
 * @param url
 * @param data
 * @param cb
 * @returns
 */
function get(url, data, cb, completFn) {
    //参数处理，删除其中的空数据
    if (data) {
        for (var key in data) {
            if (data[key] == null) {
                delete data[key]
            }
        }
    }
    var p = axios.get(url, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        params: data,
        paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    })
    p.then(
        function (result) {
            proRes(result, cb)
        })
        .then(function (response) {
            typeof completFn == 'function' && completFn(response)
        })
    return p
}

function getjson(url, data, cb, completFn) {
    //参数处理，删除其中的空数据
    if (data) {
        for (var key in data) {
            if (data[key] == null) {
                delete data[key]
            }
        }
    }
    var p = axios.get(url, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        params: data,
        paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    })
    p.then(
        function (result) {
            proRes(result, cb)
        })
        .then(function (response) {
            typeof completFn == 'function' && completFn(response)
        })
    return p
}

// post请求
function post(url, data, cb, completFn) {
    var p = axios.post(url, qs.stringify(data, { arrayFormat: 'repeat', allowDots: true }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;',
            
        }
    })
    p.then(function (response) {
        proRes(response, cb)
       
    })
        .catch(function (error) {
            console.log(error)
        })
        .then(function (response) {
            
            typeof completFn == 'function' && completFn(response)
        })
      
    return p
}
/**
 all([pcs.post("/api/one",{str:"参数"},function (res) {
        console.debug(dd)
      }), pcs.get("/api/two",{str:"参数"},function (res) {

      })],function (oneRes, twoRes) {
        console.debug(oneRes)
        console.debug(twoRes)
      })
 */
function all(iterable, fn) {
    axios.all(iterable)
        .then(axios.spread(function (...args) {
            var nargs = []
            args.forEach(item => {
                nargs.push(item.data)
            })
            fn(...nargs)
        }))
}

/**
 * 文件上传
 * @param url
 * @param data
 * @param cb
 * @param completFn
 * @return
 */
function upload(url, data, cb, completFn) {
    var p = axios.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    p.then(function (response) {
        proRes(response, cb)
    })
        .catch(function (error) {
            //console.log(error)
        })
        .then(function (response) {
            typeof completFn == 'function' && completFn(response)
        })
    return p
}

/**
 * 文件上传
 */
function uploadAction(mapping, param, fn, completFn) {
    return upload(mapping, param, function (data) {
        if (data.success) {
            fn(data.rs)
        } else {
            alerterror(data.errors.errmsg)
        }
    }, completFn)
}


/**
 * 文件下载
 * @param filePath
 * @param fileName，可为空
 */
function down(filePath, fileName) {
    var url = '/api/down?filePath=' + filePath;
    if (fileName != null) {
        url += '&fileName=' + fileName;
    }
    window.open(url);
}

/**
 * post json请求
 * @param url
 * @param data
 * @param cb
 * @param completFn
 */
function postJson(url, data, cb, completFn) {
    var p = axios.post(url, data)
    p.then(function (response) {
        proRes(response, cb)
    })
        .catch(function (error) {
            //console.log(error)
        })
        .then(function (response) {
            typeof completFn == 'function' && completFn(response)
        })
    return p;
}

//分页默认配置
function _pageSetting({
    queryConKey = 'queryCon', //查询条件的关键字，从pager中读取
    pageSize = 15, //分页大小
    current = 1, //默认当前页
    isEncode = true, //是否编码
    dataKey, //页面展示是数据key，必要参数
    pageContext, //页面对象，必要参数
    dataProcess, //数据处理
    toNextFlag = false,
    pagerName = "pager", //页脚对象
    completFn //完成后调用

}) {
    return {
        queryConKey: queryConKey,
        pageSize: pageSize,
        current: current,
        isEncode: isEncode,
        dataKey: dataKey,
        pageContext: pageContext,
        dataProcess: dataProcess,
        toNextFlag: toNextFlag,
        pagerName: pagerName,
        completFn: completFn,
    }
}

/**
 * 分页请求
 *  pcs.page('/api/page' , {
        dataKey: 'list',
        pageContext: this,
        pageSize: 10,
        dataProcess:function(list){
          list.forEach(item => {
            console.debug(item.ID);
          })
        },
        completFn:function (data) {
        }
      })
 * @param url
 * @param param 可以参考_pageSetting中的说明
 */
function page(url, param) {
    var pageContext = param.pageContext
    //处理默认值
    param = _pageSetting(param)
    // pageContext.loading = true;
    //设置组件（页面）内的分页对象
    if (!pageContext[param.pagerName]) {
        pageContext[param.pagerName] = {}
    }
    var pager = pageContext[param.pagerName]

    //设置页脚信息
    if (pager.pageSize == null) pager.pageSize = param.pageSize
    if (pager.current == null) pager.current = param.current
    if (!pager.toNextFlag) {
        pager.current = 1;
    } else {
        pager.toNextFlag = false;
    }
    //查询条件处理
    var queryCon = pager.queryCon
    var queryStr = ''
    if (queryCon) {
        for (var key in queryCon) {
            if (queryCon[key] != null) {
                queryStr += '&' + key + '=' + queryCon[key]
            }
        }
        if (url.indexOf('?') > -1) {
            url += queryStr
        } else {
            url += '?' + queryStr
        }
    }
    //编码
    if (param.isEncode) {
        url = encodeURI(url)
    }
    get(url, {
        pageSize: pager.pageSize,
        currentPage: pager.current
    }, function (data) {
        if (data.success) {
            if (data.rs != null) {
                // pager.curr = data.rs.pageNum
                pager.total = data.rs.total
                typeof param.dataProcess == 'function' && param.dataProcess(data.rs.list)
                pageContext[param.dataKey] = data.rs.list
            } else {
                pager.total = 0
                pageContext[param.dataKey] = []
            }
        } else {
            alerterror(data.errors.errmsg)
        }
        // // 临时使用
        // pager.curr = data.pageNum
        // pager.total = data.total
        // typeof param.dataProcess == 'function' && param.dataProcess(data.list)
        // pageContext[param.dataKey] = data.list
        // // 临时使用
        // pageContext.loading = false;
        typeof param.completFn == 'function' && param.completFn(data.rs)
    })
}

function pagepost(url, param) {
    var pageContext = param.pageContext
    //处理默认值
    param = _pageSetting(param)
    // pageContext.loading = true;
    //设置组件（页面）内的分页对象
    if (!pageContext[param.pagerName]) {
        pageContext[param.pagerName] = {}
    }
    var pager = pageContext[param.pagerName]

    //设置页脚信息
    if (pager.pageSize == null) pager.pageSize = param.pageSize
    if (pager.current == null) pager.current = param.current
    if (!pager.toNextFlag) {
        pager.current = 1;
    } else {
        pager.toNextFlag = false;
    }
    //查询条件处理
    var queryCon = pager.queryCon
    var queryStr = ''
    if (queryCon) {
        for (var key in queryCon) {
            if (queryCon[key]) {
                queryStr += '&' + key + '=' + queryCon[key]
            }
        }
        if (url.indexOf('?') > -1) {
            url += queryStr
        } else {
            url += '?' + queryStr
        }
    }
    //编码
    if (param.isEncode) {
        url = encodeURI(url)
    }
    post(url, {
        pageSize: pager.pageSize,
        currentPage: pager.current
    }, function (data) {
        if (data.success) {
            if (data.rs != null) {
                pager.total = data.rs.total
                typeof param.dataProcess == 'function' && param.dataProcess(data.rs.list)
                pageContext[param.dataKey] = data.rs.list
            } else {
                pager.total = 0
                pageContext[param.dataKey] = []
            }
        } else {
            alerterror(data.errors.errmsg)
        }
        typeof param.completFn == 'function' && param.completFn(data.rs)
    })
}

/**
 *  页面data区域 配置类似以下参数，然后传入，请求结果会更新show字段
 *    permissions:{
          edit:{
            cfg:'sys:pcakage:edit',
            show:false
          },
          del:{
            cfg:'sys:pcakage:del',
            show:false
          }
        },
 * @param {} permissionNames
 * @param {} fn 可以不传
 */
function hasPermission(permissions, fn) {
    var funs = []
    for (let k in permissions) {
        funs.push(k + '#' + permissions[k].cfg)
    }
    getAction('/api/checkPermission', { 'permissions': funs }, rs => {
        for (let k in rs) {
            permissions[k].show = rs[k];
        }
    }, fn)
}

function proRes(res, cb) {

    if (res.status == 200 || res.status == 304) {
        return typeof cb == 'function' && cb(res.data)
    } else {
        alerterror('请求错误，错误码：' + res.status)
    }
}

/**
 * 取得用户session
 */
function getUserSession(fn, noLoginFn) {
    var url = '/api/GetSessionUserInfo?t=' + Math.random()
    return get(url, {}, function (data) {
        if (data.success) {
            if (data.rs) {
                var userinfo = data.rs
                if (fn != null || fn != undefined) {
                    fn(userinfo)
                }
            } else {

                if (noLoginFn != null || noLoginFn != undefined) {
                    noLoginFn()
                }
            }
        } else {
            // if (isNotToLogin) {
            // } else {
            if (noLoginFn != null || noLoginFn != undefined) {
                noLoginFn()
            } else {
                alerterror(data.errors.errmsg)
            }

            // }

        }
    })
}

/**
 * 发送POST请求Action
 */
function postAction(mapping, param, fn, completFn) {
    return post(mapping, param, function (data) {
        //  fn(data)
        if (data.success) {
            fn(data.rs)
        } else {
            alerterror(data.errors.errmsg)
        }
    }, completFn)
}

/**
 * 发送POST请求Action，提交数据以json格式
 */
function postJsonAction(mapping, param, fn, completFn) {
    return postJson(mapping, param, function (data) {
        if (data.success) {
            fn(data.rs)
        } else {
            alerterror(data.errors.errmsg)
        }
    }, completFn)
}
/**
 * 发送POST请求Action，提交数据以json格式
 */
function getJsonAction(mapping, param, fn, completFn) {
    return getjson(mapping, param, function (data) {
        if (data.success) {
            fn(data.rs)
        } else {
            alerterror(data.errors.errmsg)
        }
    }, completFn)
}
/**
 * 发送get请求Action
 */
function getAction(mapping, param, fn, completFn) {
    return get(mapping, param, function (data) {
        if (data.success) {
            fn(data.rs)
        } else {
            alerterror(data.errors.errmsg)
        }
        //fn(data)
    }, completFn)
}

function getFtpUrl(mapping, param, fn, completFn) {
    return get(mapping, param, function (data) {
        if (data.success) {
            fn(data.rs)
        } else {

        }
    }, completFn)
}

function logoutAction(mapping, param, fn, completFn) {
    return get(mapping, param, function (data) {
        fn(data)
    }, completFn)
}
/**
 * 功能：转换时间格式
 * 描述: datetime 为输入时间，format 为时间格式
 */
function timetoChar(datetime, format) {
    if (datetime == '' || datetime == null || datetime == undefined) {
        return ''
    } else {
        var date = new Date(datetime)
        var yyyy = date.getFullYear()
        var mm = date.getMonth() + 1
        var dd = date.getDate()
        var hh24 = date.getHours()
        var mi = date.getMinutes()
        var ss = date.getSeconds()
        var s1 = format.replace(/yyyy|YYYY/g, yyyy)
        var s2 = s1.replace(/mm|MM/g, mm < 10 ? '0' + mm : mm)
        var s3 = s2.replace(/dd|DD/g, dd < 10 ? '0' + dd : dd)
        var s4 = s3.replace(/hh24|HH24/g, hh24 < 10 ? '0' + hh24 : hh24)
        var s5 = s4.replace(/mi|MI/g, mi < 10 ? '0' + mi : mi)
        var s6 = s5.replace(/ss|SS/g, ss < 10 ? '0' + ss : ss)
        return s6
    }
}

function trim(str) {
    if (str == null || str == '') {
        return str
    }
    return str.replace(/^\s+|\s+$/g, '')
}


function toFixed(data, num) {
    var numbers = ''
    // 保留几位小数后面添加几个0
    for (var i = 0; i < num; i++) {
        numbers += '0'
    }
    var s = 1 + numbers
    // Math.round四舍五入
    //  parseFloat() 函数可解析一个字符串，并返回一个浮点数。
    return Math.round(parseFloat(data) * s) / s
}

/**
 * 功能：判断是否为数字
 * 描述：
 * numstr：需要验证的字符串
 * 用法：
 * isNumber('123');//返回:true;
 */
function isNumber(numstr) {
    if (numstr == null) {
        return false
    }
    var i, j, strTemp
    strTemp = '0123456789'
    if (numstr.length == 0) {
        return false
    }
    for (i = 0; i < numstr.length; i++) {
        j = strTemp.indexOf(numstr.charAt(i))
        if (j == -1) return false
    }
    return true
}

function isMobile(numstr) {
    if (!isNumber(numstr)) {
        return false
    }
    var index = numstr.indexOf('1')
    if (index != 0) {
        return false
    }
    return true
}

/**
 * 功能：转换时间格式
 * 描述: datetime 为输入时间，format 为时间格式
 */
function toChar(datetime, format) {
    if (datetime == "" || datetime == null || datetime == undefined) {
        return "";
    } else {
        format = format.replace(/hh24|HH24/g, 'HH');
        var date = new Date(datetime);
        var yyyy = date.getFullYear();
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
        var hh24 = date.getHours();
        var mi = date.getMinutes();
        var ss = date.getSeconds();
        var s1 = format.replace(/yyyy|YYYY/g, yyyy);
        var s2 = s1.replace(/mm|MM/g, mm < 10 ? "0" + mm : mm);
        var s3 = s2.replace(/dd|DD/g, dd < 10 ? "0" + dd : dd);
        var s4 = s3.replace(/hh|HH/g, hh24 < 10 ? "0" + hh24 : hh24);
        var s5 = s4.replace(/mi|MI/g, mi < 10 ? "0" + mi : mi);
        var s6 = s5.replace(/ss|SS/g, ss < 10 ? "0" + ss : ss);
        return s6;
    }
}

/**
 * 去除多余的字用指定符号代替
 */
function ellipsis(str, maxlength, suffix) {
    if (str.length <= maxlength) {
        return str;
    } else {
        return str.substr(0, maxlength - 0) + suffix
    }
}

/**
 * 动态加载js
 * @param url
 * @param callback
 */
function loadJs(url, param, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (param) {
        script.id = param.id
    }
    if (typeof (callback) != "undefined") {
        //IE
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            }
        } else {
            script.onload = function () {
                callback();
            }
        }
    }
    script.src = url;
    document.body.appendChild(script);
}

/**
 * 重置参数值
 * @param datas
 * @returns
 */
function resetParams(datas) {
    for (var a in datas) {
        if (datas[a] != null && datas[a] instanceof Array) {
            datas[a] = [];
        } else {
            datas[a] = null;
        }
    }
}

function alert(str) {
    ElementUI.Message({
        message: str,
        type: 'success'
    })
}

function alertwarning(str) {
    ElementUI.Message({
        message: str,
        type: 'warning'
    })
}

function alerterror(str) {
    ElementUI.Message.error(str);
}

function getpath(url) {
    if (url != null && url != "") {
        return "http://47.106.96.101:8098/hydropower_img/" + url;
    } else {
        return ""
    }
}

function checkEmail(email) {
    var myReg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (myReg.test(email)) {
        return true;
    } else {
        return false;
    }
}

function checkPhone(phone) {
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
        return false;
    } else {
        return true
    }
}

/**
 * 判断文件类型
 * @param fileName
 * @param format  |分割
 * @returns {boolean}
 */
function checkFileSuffix(fileName, format) {
    let exts = format.split("|");
    let msg = "";
    let flag = false;
    for (let i = 0; i < exts.length; i++) {
        msg += exts[i] + ",";
    }
    if (fileName.length <= 0) {
        return;
    }
    var fileType = (fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length)).toLowerCase();
    msg = msg.substring(0, msg.length - 1);
    for (let i = 0; i < exts.length; i++) {
        if (fileType == exts[i]) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        alertwarning("\u8bf7\u9009\u62e9" + msg + "\u6587\u4ef6!");
        return false;
    }
    return true;
}



/**
 * 时间戳转换成正常时间
 */
function timestampToTime(timestamp, num) {//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
    timestamp = timestamp + '';
    timestamp = timestamp.length == 10 ? timestamp * 1000 : timestamp;
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    if (num == 0) {
        return y + '-' + m + '-' + d;
    } else {
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
}


//度转度°分′秒″
function ToDegrees(val) {
    if (typeof (val) == "undefined" || val == "") {
        return "";
    }
    var i = val.indexOf('.');
    var strDu = i < 0 ? val : val.substring(0, i);//获取度
    var strFen = 0;
    var strMiao = 0;
    if (i > 0) {
        var strFen = "0" + val.substring(i);
        strFen = strFen * 60 + "";
        i = strFen.indexOf('.');
        if (i > 0) {
            strMiao = "0" + strFen.substring(i);
            strFen = strFen.substring(0, i);//获取分
            strMiao = strMiao * 60 + "";
            i = strMiao.indexOf('.');
            strMiao = strMiao.substring(0, i + 4);
            strMiao = parseFloat(strMiao);
        }
    }
    return strDu + "°" + strFen + "'" + strMiao + "°";
}

//度°分′秒″转度
function ToDigital(strDu, strFen, strMiao, len) {
    len = (len > 6 || typeof (len) == "undefined") ? 6 : len;//精确到小数点后最多六位
    strDu = (typeof (strDu) == "undefined" || strDu == "") ? 0 : parseFloat(strDu);
    strFen = (typeof (strFen) == "undefined" || strFen == "") ? 0 : parseFloat(strFen) / 60;
    strMiao = (typeof (strMiao) == "undefined" || strMiao == "") ? 0 : parseFloat(strMiao) / 3600;
    var digital = strDu + strFen + strMiao;
    if (digital == 0) {
        return "";
    } else {
        return digital.toFixed(len);
    }
}

// 数字转换时间戳
function numberToDate(number) {
    if (number != null && number != "") {
        var str = number + "";
        //只到年份，默认填充1月
        if (str.length == 4) {
            str += '01'//
        }
        //只到月份，默认填充1号日期
        if (str.length == 6) {
            str += '01'//
        }
        //补齐12位
        str = (str + "000000000000").substring(0, 12);
        var date = new Date(str.substring(0, 4) + "/" + str.substring(4, 6) + "/" + str.substring(6, 8) + " "
            + str.substring(8, 10) + ':' + str.substring(10, 12));
        return date;
    } else {
        return null;
    }
}


// 查询信息完善提示
function information(object, str) {
    var is_kong = true;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            var element = object[key];
            if (element === 0) {
                element = true;
            }
            if (!element || element == undefined) {
                if (str) {
                    alerterror(str);
                    return
                }
                is_kong = false;
            }
        }
    }
    return is_kong
}

function information1(object, str) {
    var is_kong = true;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            var element = object[key];
            if (element === 0) {
                element = true;
            }
            if (!element || element == undefined) {
                if (str) {
                    alertwarning(str);
                    return
                }
                is_kong = false;
            }
        }
    }
    return is_kong
}

//两个时间相差天数 兼容firefox chrome
function datedifference(sDate1, sDate2) {    //sDate1和sDate2是2006-12-18格式 
    var dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};
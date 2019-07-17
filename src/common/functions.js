import Vue from 'vue'

//日期格式转化
Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};

//维修状态颜色转换
Vue.prototype.repairColor = function(val) {
    let str = "";
    switch(val) {
        case 5:
        case 10:
        case 11:
            str = "success-color";
            break;
        case 99:
            str = "warning-color";
            break;
        case 4:
        case 7:
            str = "danger-color";
            break;
        default:
            str = "primary-color"
    }
    return str;
}

//帖子状态颜色转换
Vue.prototype.postColor = function(val) {
    let str = "";
    switch(val) {
        case 3:
        case 4:
        case 9:
            str = "success-color";
            break;
        case 99:
            str = "warning-color";
            break;
        case 5:
            str = "danger-color";
            break;
        default:
            str = "primary-color"
    }
    return str;
}

//帖子类型颜色转换
Vue.prototype.cateColor = function(val) {
    let str = "";
    switch(val) {
        case 0:
            str = "danger-color";
            break;
        case 1:
        case 2:
            str = "";
            break;
        case 3:
            str = "success-color";
            break;
    }
    return str;
}
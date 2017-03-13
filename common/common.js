/*指通用的*/

// ---------------------------------------------------
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
// ---------------------------------------------------
Date.prototype.format = function(formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9
        ? (this.getYear() % 100).toString()
        : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, this.getMonth() >= 9
        ? (this.getMonth()+1).toString()
        : '0' + (this.getMonth()+1));
    str = str.replace(/M/g, this.getMonth());

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9
        ? this.getDate().toString()
        : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9
        ? this.getHours().toString()
        : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes()
        .toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds()
        .toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
};

/**
 * 存储
 * @type {{get, set, del}}
 */
var Store = (function () {
    /**
     * @param local 是否永久存储,默认是session存储
     */
    var getStore = function (key, local) {
        if (local) return window.localStorage[key];
        else return window.sessionStorage[key];
    };

    /**
     * @param local 是否永久存储,默认是session存储
     */
    var setStore = function (key, value, local) {
        if (local) window.localStorage[key] = value;
        else window.sessionStorage[key] = value;
    };

    var setAllStore = function (key, value) {
        window.localStorage[key] = value;
        window.sessionStorage[key] = value;
    };

    /**
     * @param local 是否永久存储,默认是session存储
     */
    var delStore = function (key, local) {
        if (local) delete window.localStorage[key];
        else delete window.sessionStorage[key];
    };

    var delAllStore = function (key) {
        delete window.localStorage[key];
        delete window.sessionStorage[key];
    };

    return {
        get: getStore,
        set: setStore,
        setAll: setAllStore,
        del: delStore,
        delAll: delAllStore
    };
})();
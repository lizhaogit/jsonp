/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-21 12:11:32
 * @version $Id$
 */

(function(window, document, undefined) {
    'use stript';
    var jsonp = function(url, data, callback) {
        /* body... */
        //挂载回调函数
        var cbFuncName = 'myjson_cb_' + Math.random().toString().replace('.', '');
        window[cbFuncName] = callback;

        //将data装换成字符传的形式
        var querystring = url.indexOf('?') == -1 ? '?' : '&';
        for (var key in data) {
            querystring += key + '=' + data[key] + '&';
        }

        //处理url中的回调
        querystring += 'callback=' + cbFuncName;

        //创建一个script标签
        var scriptElenment = document.createElement('script');
        scriptElenment.src = url + querystring;
        //将script标签放到页面中
        document.body.appendChild(scriptElenment);
    }

    window.$jsonp = jsonp;

})(window, document)

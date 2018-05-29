# paginator 

paginator插件有三种pattern模式：server list detail

### server模式

server指的是分页和页码由后端计算返回, 前端通过传入**页码**和**每页显示条数**来进行获取数据

server的配置项: 
    ```
        server: {
                // 请求报文：页码
                index: 'page',
                // 请求报文：每页数量
                size: 'count',
                // 响应报文：列表数据
                key: 'data',
                // 响应报文：总数
                total: 'total'
            },
        ls: {
            list: lsKey.list,
            lastUpdateTime: lsKey.lastUpdateTime,
            hasData: lsKey.hasData
        },
    ```
    对应在插件源码中的用途是:
    ```
    //server中的配置项的作用是配置好服务端返回接口的字段名, 使用情景:
    me.options.customAjax.get(me.options.url, me.options.data, null, {
            ajaxType: me.options.ajaxType || ''
        }).done(function (result) {
             
            ...

            // 列表数据内容为空 这里用到了server.key的配置项
            if (!result[me.options.server.key] && !$.isArray(me.options.server.key)) {
                callback(true, []);
                return;
            }
            
            ...
            
            //这里用到了server.index; server.size; server.total的配置项
            var total = result[me.options.server.total] || 0;
            me.options.page.count = Math.ceil(total / me.options.data[me.options.server.size]);
            if (me.options.data[me.options.server.index] * me.options.data[me.options.server.size] >= total) {
                ls.set(me.options.ls.hasData, false);
            } else {
                ls.set(me.options.ls.hasData, true);
            }
            
            ...
    ```
    所以以上4个server的配置项一定要确保设置正确, 不然程序可能报错
###  

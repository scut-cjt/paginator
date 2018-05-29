import patternServer from './core'

// 数据处理模块
$.extend(patternServer.prototype, {
    validate: function() {
        if (!this.paginator) {
            throw 'no config paginator'
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options'
        }

        if (!this.paginator.options.customAjax) {
            throw 'no config customAjax'
        }

        if (!this.paginator.options.customAjax.get) {
            throw 'no config customAjax.get'
        }

        if (!this.paginator.options.url) {
            throw 'no config url'
        }

        if (!this.paginator.options.errcode) {
            throw 'no config errcode'
        }

        if (!this.paginator.options.ls) {
            throw 'no config ls'
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime'
        }

        if (!this.paginator.options.ls.hasData) {
            throw 'no config ls.hasData'
        }

        if (!this.paginator.options.server) {
            throw 'no config server'
        }

        if (!this.paginator.options.server.key) {
            throw 'no config server.key'
        }

        if (!this.paginator.options.server.total) {
            throw 'no config server.total'
        }

        if (!this.paginator.options.server.index) {
            throw 'no config server.key'
        }

        if (!this.paginator.options.server.size) {
            throw 'no config server.total'
        }

        this.options = this.paginator.options
    },

    remote: function(callback) {
        let me = this

        me.options.data.pageNum = me.options.data[me.options.server.index]

        me.options.customAjax.get(me.options.url, me.options.data, null, {
            ajaxType: me.options.ajaxType || ''
        }).done(function(result) {
            // 接口请求什么都没返回，回调null
            if (!result) {
                callback(false, null)
                return
            }

            // 接口请求返回errocode报文，回调null
            if (result[me.options.errcode]) {
                callback(false, null)
                return
            }

            // 在检验完接口有正常返回数据后调用
            if (typeof me.options.success === 'function') {
                me.options.success(result)
            }

            // 列表数据内容为空
            if (!result[me.options.server.key] && !$.isArray(me.options.server.key)) {
                callback(true, []);
                return;
            }


            // TODO 列表数据中含有null则去除，会造成列表总数不准
            let list = []

            //保利客服的混合类型数据模式--by zzs wa 
            if ($.isArray(me.options.server.key)) {
                if (me.options.processResult) {
                    list = me.options.processResult(result)
                }
            } else {

                for (var i = 0, len = result[me.options.server.key].length; i < len; i++) {
                    if (result[me.options.server.key][i]) {
                        list.push(result[me.options.server.key][i]);
                    }
                }

            }


            let total = result[me.options.server.total] || 0
            me.options.page.count = Math.ceil(total / me.options.data[me.options.server.size])

            if (me.options.data[me.options.server.index] * me.options.data[me.options.server.size] >= total) {
                ls.set(me.options.ls.hasData, false)
            } else {
                ls.set(me.options.ls.hasData, true)
            }

            callback(true, list)
        }).fail(function() {
            // 接口请求失败，回调null
            callback(false, null)
        })
    },

    getData: function(first, callback) {
        if (typeof first === 'function') {
            first()
        }

        this.remote(function(status, result) {
            callback(status, result)
        })
    },

    load: function(first, callback) {
        let me = this

        let model = me.currentModel = me.model.empty

        me.options.page.index = 1
        me.options.data[me.options.server.index] = 1

        me.getData(first, function(status, result) {
            callback(model, result)
        })
    },

    next: function(callback) {
        let me = this

        let model = me.currentModel = me.model.append

        me.options.page.index += 1
        me.options.data[me.options.server.index] += 1

        me.getData(null, function(status, result) {
            callback(model, result)
        })
    },

    refresh: function(callback) {
        let me = this

        let model = me.currentModel = me.model.prepend

        me.options.page.index = 1
        me.options.data[me.options.server.index] = 1

        me.getData(null, function(status, result) {
            callback(model, result)
        })
    }

})
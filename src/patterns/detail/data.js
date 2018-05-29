import patternDetail from './core'

// 数据处理模块
$.extend(patternDetail.prototype, {
    validate: function() {
        if (!this.paginator) {
            throw 'no config paginator'
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options'
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

        if (!this.paginator.options.ls.detail) {
            throw 'no config ls.detail'
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime'
        }

        if (!this.paginator.options.detail) {
            throw 'no config detail'
        }

        this.options = this.paginator.options
    },

    remote: function(callback) {
        let me = this

        me.options.customAjax.get(me.options.url, me.options.data).done(function(result) {
            // 接口请求什么都没返回，回调null
            if (!result) {
                callback(false, null)
                me.options.fail && me.options.fail(null)
                return
            }

            // 接口请求返回errocode报文，回调null
            if (result[me.options.errcode]) {
                callback(false, null)
                me.options.fail && me.options.fail(result)
                return
            }

            callback(true, result)
        }).fail(function() {
            // 接口请求失败，回调null
            callback(false, null)
        })
    },

    local: function(callback) {
        let me = this

        // key不存在
        if (!ls.has(me.options.ls.detail)) {
            callback(false, null)
            return
        }

        let data = ls.get(me.options.ls.detail)

        // undefined或null
        if (typeof data === 'undefined' || data == null) {
            callback(true, null)
        } else {
            callback(true, data)
        }
    },

    remoteLS: function(callback) {
        let me = this

        me.remote(function(status, result) {
            ls.set(me.options.ls.lastUpdateTime, Date.now())

            if (!status) {
                callback(false, null)
            } else {
                ls.set(me.options.ls.detail, result || {})
                callback(true, result || {})
            }
        })
    },

    getData: function(first, callback) {
        let me = this

        me.local(function(status, result) {
            if (status && result) {
                // 滚动条加载中
                me.scrollerLoading = true

                let tmpResult

                // 复制数据到临时变量，用于后续比较数据一致性
                if (me.options.detail.enableUpdate) {
                    tmpResult = $.extend({}, result)
                }

                callback(true, result)

                if (me.options.detail.enableUpdate) {
                    me.remoteLS(function(serverStatus, serverResult) {
                        me.scrollerLoading = false

                        try {
                            if (serverStatus && serverResult && JSON.stringify(serverResult) != JSON.stringify(tmpResult)) {
                                callback(serverStatus, serverResult, 2)
                            }
                        } catch (e) {

                        }
                    })
                }
            } else {
                if (typeof first === 'function') {
                    first()
                }

                me.remoteLS(function(status, result) {
                    callback(status, result)
                })
            }
        })
    },

    load: function(first, callback) {
        this.getData(first, function(status, result) {
            callback(status, result)
        })
    }

})
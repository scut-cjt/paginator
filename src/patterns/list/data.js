import patternList from './core'

// 数据处理模块
$.extend(patternList.prototype, {
    /**
     * 校验参数
     */
    validate: function () {
        if (!this.paginator) {
            throw 'no config paginator'
        }

        if (!this.paginator.options) {
            throw 'no config paginator.options'
        }

        if (!this.paginator.options.page) {
            throw 'no config options.page'
        }

        if (!this.paginator.options.page.getSize) {
            throw 'no config options.page.getSize'
        }

        if (!this.paginator.options.page.index) {
            this.paginator.options.page.index = 0
        }

        if (!this.paginator.options.page.size) {
            this.paginator.options.page.size = 0
        }

        if (!this.paginator.options.page.lastSize) {
            this.paginator.options.page.lastSize = 0
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

        if (!this.paginator.options.list) {
            throw 'no config list'
        }

        if (!this.paginator.options.list.key) {
            throw 'no config list.key'
        }

        if (!this.paginator.options.ls) {
            throw 'no config ls'
        }

        if (!this.paginator.options.ls.list) {
            throw 'no config ls.list'
        }

        if (!this.paginator.options.ls.lastUpdateTime) {
            throw 'no config ls.lastUpdateTime'
        }

        if (!this.paginator.options.ls.hasData) {
            throw 'no config ls.hasData'
        }

        if (!this.paginator.options.ls.id) {
            throw 'no config ls.id'
        }

        if (!this.paginator.options.success || typeof this.paginator.options.success !== 'function') {
            throw 'no config success or not function'
        }

        this.options = this.paginator.options
    },

    /**
     * 获取接口数据
     *
     * @param stamp 时间戳
     * @param operate 操作：0-向上取，1-向下去
     * @param callback 回调
     */
    remote: function (stamp, operate, callback) {
        let me = this
        let size = me.options.page.getSize

        let nextPageId = ''
        if (me.currentModel === me.model.append && me.options.page.minNextPageId) {
            nextPageId = me.options.page.minNextPageId
        }
        if (me.currentModel === me.model.append && me.options.page.minNextPageTime) {
            stamp = me.options.page.minNextPageTime;
        }

        me.options.customAjax.get(me.options.url, $.extend(true, {}, {
            nextPageId: nextPageId,
            nextPageTime: stamp,
            count: size,
            operate: operate
        }, me.options.data), null, {
            ajaxType: me.options.ajaxType || ''
        }).done(function (result) {
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
            me.options.success(result)

            // 列表数据内容为空
            if (!result[me.options.list.key]) {
                callback(true, [])
                return
            }

            // 向下取数据时，如果本地存储已表明没有取到最后一页，或者响应报文返回取到了最后一页，则更新配置
            if (operate === 1 && (!ls.get(me.options.ls.hasData) || !result[me.options.list.hasNextPage])) {
                ls.set(me.options.ls.hasData, result[me.options.list.hasNextPage] || false)
            }

            // TODO 列表数据中含有null则去除，会造成列表总数不准
            let list = []

            for (let i = 0, len = result[me.options.list.key].length; i < len; i++) {
                if (result[me.options.list.key][i]) {
                    list.push(result[me.options.list.key][i])
                }
            }

            // 如果接口返回了下一个最小id
            if (result.nextPageId) {
                me.options.page.minNextPageId = result.nextPageId;
                ls.set(me.options.ls.hasData + '_nextPageId', result.nextPageId);
            }
            // 如果接口返回下一个最小time
            if (result.nextPageTime) {
                me.options.page.minNextPageTime = result.nextPageTime;
                ls.set(me.options.ls.hasData + '_nextPageTime', result.nextPageTime);
            }

            callback(true, list)
        }).fail(function () {
            // 接口请求失败，回调null
            callback(false, null)
        })
    },

    /**
     * 获取本地数据
     *
     * @param key/index
     * @param where/size
     * @param orders/callback
     * @param sorts
     * @param index
     * @param size
     * @param callback
     *
     */
    local: function (key, where, orders, sorts, index, size, callback) {
        // 如果orders是方法，进入index,size,callback的参数模式
        if (typeof orders === 'function') {
            let me = this

            callback = orders
            size = where
            index = key
            sorts = me.options.ls.sorts
            orders = me.options.ls.orders
            where = me.options.ls.where
            key = me.options.ls.list
        }

        // key不存在
        if (!ls.has(key)) {
            callback(false, null)
            return
        }

        let list = ls.get(key)

        // 不是数组
        if (!(list instanceof Array)) {
            callback(false, null)
            return
        }

        // 空数组
        if (list.length === 0) {
            callback(false, [])
            return
        }

        ls.select(key, where, orders, sorts, index, size, function(status, result) {
            // 获取异常
            if (!status) {
                callback(false, [])
                return
            }

            // 无内容
            if (!result) {
                callback(false, []);
                return;
            }

            callback(true, result.list)
        })
    },

    /**
     * 第2-n次请求接口，进行筛选排序的数据应该先忽略前面的所有数据
     *
     * @param key/index
     * @param where/size
     * @param orders/skip
     * @param sorts/callback
     * @param index
     * @param size
     * @param skip
     * @param callback
     */
    skipLocal: function (key, where, orders, sorts, index, size, skip, callback) {
        // 如果sorts是方法，进入index,size,skip,callback的参数模式
        if (typeof sorts === 'function') {
            let me = this

            callback = sorts
            skip = orders
            size = where
            index = key
            sorts = me.options.ls.sorts
            orders = me.options.ls.orders
            where = me.options.ls.where
            key = me.options.ls.list
        }

        // key不存在
        if (!ls.has(key)) {
            callback(false, null)
            return
        }

        let list = ls.get(key)

        // 不是数组
        if (!(list instanceof Array)) {
            callback(false, null)
            return
        }

        // 空数组
        if (list.length === 0) {
            callback(false, [])
            return
        }

        ls.skipSelect(key, where, orders, sorts, index, size, skip, function(status, result) {
            // 获取异常
            if (!status) {
                callback(false, [])
                return
            }

            // 无内容
            if (!result) {
                callback(false, []);
                return;
            }

            callback(true, result.list)
        })
    },

    /**
     * 同步数据
     *
     * @param stamp 时间戳
     * @param operate 操作：0-向上取，1-向下去
     * @param callback 回调
     */
    remoteLS: function (stamp, operate, callback) {
        let me = this

        me.remote(stamp, operate, function (serverStatus, serverResult) {
            if (!serverStatus) {
                callback(false, null)
                return
            }

            // TODO 取最新第一页时，暂时清除缓存，因为数据衔接较难处理
            if (stamp === '' && operate === 1) {
                ls.remove(me.options.ls.list)
                ls.remove(me.options.ls.lastUpdateTime)
            }

            // serverStatus=true的时候，serverResult一定是数组，由remote方法保证
            ls.save(me.options.ls.list, me.options.ls.id, serverResult, function (localStatus, localResult) {
                if (!localStatus) {
                    callback(false, null)
                    return
                }

                if (!(localResult instanceof Array)) {
                    callback(false, [])
                    return
                }

                // 有更新到列表数据或者空数组数据，更新列表刷新时间
                ls.set(me.options.ls.lastUpdateTime, Date.now())

                // 刷新最小时间戳，刷新最小id

                // 暂存排序，设置为按时间戳倒序，以获得最大最小时间
                let tmpOrders = me.options.ls.orders
                let tmpSorts = me.options.ls.sorts

                // 暂时按照时间戳、id标识排序，以获取筛选后的最小修改时间和页数
                me.options.ls.orders = me.options.stamp + ' ' + me.options.ls.id
                me.options.ls.sorts = 'DESC DESC'

                // 要对数据进行筛选后，判断是否存在数据，所以必须使用me.local方法
                me.local(1, Number.MAX_VALUE, function (status, result) {
                    // 重置排序为配置
                    me.options.ls.orders = tmpOrders
                    me.options.ls.sorts = tmpSorts

                    if (status && result && result instanceof Array && result.length > 0) {
                        // 更新最小时间戳
                        me.options.page.minStamp = result[result.length - 1][me.options.stamp]
                        // 更新最小id
                        me.options.page.minNextPageId = result[result.length - 1][me.options.ls.id]

                        if (ls.get(me.options.ls.hasData + '_nextPageId')) {
                            me.options.page.minNextPageId = ls.get(me.options.ls.hasData + '_nextPageId');
                        }
                        if (ls.get(me.options.ls.hasData + '_nextPageTime')) {
                            me.options.page.minNextPageTime = ls.get(me.options.ls.hasData + '_nextPageTime');
                        }
                    }

                    // 更新总页数，校验当前页码
                    me.local(1, Number.MAX_VALUE, function (status, result) {
                        if (status && result && result instanceof Array && result.length > 0) {
                            // 更新总页数
                            me.options.page.count = Math.ceil(result.length / me.options.page.size)

                            if (me.options.page.lastSize % me.options.page.size !== 0) {
                                me.options.page.index -= 1

                                if (me.options.page.index <= 0) {
                                    me.options.page.index = 1
                                }
                            }

                            // 检验当前页码
                            if (me.options.page.count === 0) {
                                me.options.page.index = 1
                            } else if (me.options.page.index > me.options.page.count) {
                                me.options.page.index = me.options.page.count
                            }
                        }

                        callback(true, localResult)
                    })
                })
            })
        })
    },

    /**
     * 不足一页的处理
     *
     * @param 模式empty,prepend,append
     */
    lackPage: function (model, status, result) {
        let me = this

        if (me.options.page.lastSize >= me.options.page.size) {
            me.options.page.lastSize -= me.options.page.size
        }

        switch (model) {
            case me.model.append:
                if (me.options.page.lastSize !== 0) {
                    result.splice(0, me.options.page.lastSize)
                }

                break;
            default:

        }

        if (status && result && result instanceof Array) {
            me.options.page.lastSize += result.length
        }
    },

    /**
     * empty或prepend模式下的分页获取本地存储
     *
     */
    pageLocal: function (time, callback) {
        let me = this

        me.local(me.options.page.index, me.options.page.size, function(status, result) {
            me.lackPage(null, status, result)

            callback(status, result, time || 1)
        })
    },

    /**
     * empty或prepend模式下的同步数据后，再获取页数据
     */
    pageLocalRemoteLS: function (stamp, operate, time, callback) {
        let me = this

        me.remoteLS(stamp, operate, function (status, result) {
            // 取消下拉加载中
            me.scrollerLoading = false

            if (status && result) {
                me.lastSkip = result.length
            }

            me.pageLocal(time || 1, callback)
        })
    },

    /**
     * empty模式数据处理
     */
    emptyHandler: function (first, callback) {
        let me = this
        let model = me.model.empty

        // empty模式，一定是取服务器最新一页数据
        let stamp = ''   // 时间戳
        let operate = 1  // 操作：0-取最新；1-取历史

        // 重置配置
        me.skip = 0            // 忽略数据总数量默认为0
        me.lastSkip = 0        // 上次忽略的数量默认为0

        // 暂存排序，设置为按时间戳倒序，以获得最大最小时间
        let tmpOrders = me.options.ls.orders
        let tmpSorts = me.options.ls.sorts

        // 暂时按照时间戳、id标识排序，以获取筛选后的最小修改时间和页数
        me.options.ls.orders = me.options.stamp + ' ' + me.options.ls.id
        me.options.ls.sorts = 'DESC DESC'

        // 要对数据进行筛选后，判断是否存在数据，所以必须使用me.local方法
        me.local(1, Number.MAX_VALUE, function (status, result) {
            // 重置排序为配置
            me.options.ls.orders = tmpOrders
            me.options.ls.sorts = tmpSorts

            if (status && result && result instanceof Array && result.length > 0) {
                // 更新最小时间戳
                me.options.page.minStamp = result[result.length - 1][me.options.stamp]
                // 更新最小id
                me.options.page.minNextPageId = result[result.length - 1][me.options.ls.id]

                if (ls.get(me.options.ls.hasData + '_nextPageId')) {
                    me.options.page.minNextPageId = ls.get(me.options.ls.hasData + '_nextPageId');
                }
                if (ls.get(me.options.ls.hasData + '_nextPageTime')) {
                    me.options.page.minNextPageTime = ls.get(me.options.ls.hasData + '_nextPageTime');
                }

                if (!me.options.page.minStamp) {
                    throw 'no minStamp'
                }
                if (!me.options.page.minNextPageId) {
                    throw 'no minNextPageId'
                }

                // 更新lastSkip
                me.lastSkip = result.length
                // 更新页数
                me.options.page.count = Math.ceil(result.length / me.options.page.size)

                me.pageLocal(1, function (status, result) {
                    if (me.position && me.position.enabled()) {
                        callback(status, result)
                    } else {
                        // 下拉加载中
                        me.scrollerLoading = true
                        // 先处理本次存储数据
                        callback(status, result)

                        // 同步数据后，第二次处理数据
                        me.pageLocalRemoteLS(stamp, operate, 2, callback)
                    }
                })
            } else {
                // 主要用于显示loading
                first && first()

                me.pageLocalRemoteLS(stamp, operate, null, callback)
            }
        })
    },

    /**
     * prepend模式数据处理
     */
    prependHandler: function (callback) {
        let me = this
        let model = me.model.prepend

        // prepend模式，一定是取服务器最新一页数据
        let stamp = ''   // 时间戳
        let operate = 1  // 操作：0-取最新；1-取历史

        // 重置配置
        me.skip = 0            // 忽略数据总数量默认为0
        me.lastSkip = 0        // 上次忽略的数量默认为0
        me.options.page.lastSize = 0

        me.remoteLS(stamp, operate, function (status, result) {
            if (status && result) {
                me.lastSkip = result.length
            }

            me.local(1, me.options.page.size, function(status, result) {
                callback(status, result)
            })
        })
    },

    /**
     * append模式数据处理
     */
    appendHandler: function (callback) {
        let me = this
        let model = me.model.append

        // append模式，一定是使用最小时间戳取历史
        let stamp = me.options.page.minStamp  // 时间戳
        let operate = 1                       // 操作：0-取最新；1-取历史

        // TODO 如果最后一页不足一页，先请求接口再显示
        me.skipLocal(me.options.page.index, me.options.page.size, me.skip, function (status, result) {
            if (status && result && result instanceof Array && result.length > 0) {
                me.lackPage(model, status, result)
                callback(status, result)
            } else {
                me.remoteLS(stamp, operate, function (status, result) {
                    if (status && result) {
                        me.skip = me.lastSkip
                        me.lastSkip += result.length
                    }

                    me.skipLocal(me.options.page.index, me.options.page.size, me.skip, function (status, result) {
                        me.lackPage(model, status, result)
                        callback(status, result)
                    })
                })
            }
        })
    },

    /**
     * 获取数据
     * @param model 更新模式
                empty    首次加载
                append   上拉-加载更多数据
                prepend  下拉-刷新
     * @param first 第一次加载(无本地存储)方法
     * @param callback 回调
     */
    getData: function (model, first, callback) {
        // 1、刷新：
        //    1-1：本地存储有[筛选后]：显示本地数据，获取最新的第一页数据，判断最新的数据是否和本地数据衔接，若未衔接，需做相应处理
        //    1-2：本地存储无[筛选后]：获取最新的第一页数据
        // 2、下拉：
        //    2-1：本地存储有[筛选后]：获取最新的第一页数据，判断最新的数据是否和本地数据衔接，若未衔接，需做相应处理
        //    2-2：本地存储无[筛选后]：获取最新的第一页数据
        // 3、上拉：
        //    3-1：本地存储有[筛选后]：获取LS分页
        //    3-2：本地存储无[筛选后]：若服务器无历史数据，不可上拉；若有，获取LS最小时间戳以下第一页数据

        // 重置下拉加载中
        this.scrollerLoading = false

        switch (model) {
            case this.model.empty:
                this.emptyHandler(first, callback)

                break;
            case this.model.prepend:
                this.prependHandler(callback)

                break;
            case this.model.append:
                this.appendHandler(callback)

                break;
            default:
        }
    },

    /**
     * 首次加载
     */
    load: function (first, callback) {
        let me = this

        let model = me.model.empty

        // 重置请求类型
        me.options.ajaxType = me.options.ajaxType || me.ajaxType

        // 重置页码
        me.options.page.index = 1
        me.options.page.count = 0

        me.getData(model, first, function (status, result, time) {
            callback(model, result, time)
        })
    },

    /**
     * 下一页
     */
    next: function (callback) {
        let me = this
        let model = me.model.append

        // 重置请求类型
        me.options.ajaxType = ''

        // 重置页码
        me.options.page.index += 1

        me.getData(model, null, function (status, result) {
            callback(model, result)
        })
    },

    /**
     * 下拉刷新
     */
    refresh: function (callback) {
        let me = this
        let model = me.model.prepend

        // 重置请求类型
        me.options.ajaxType = me.options.ajaxType || me.ajaxType

        // 重置页码
        me.options.page.index = 1

        me.getData(model, null, function (status, result) {
            callback(model, result)
        })
    }
})

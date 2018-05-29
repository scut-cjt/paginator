import patternDetail from './core'

// 渲染处理模块
$.extend(patternDetail.prototype, {
    renderValidate: function () {
        if (!this.paginator.options.element) {
            throw 'no config element'
        }

        if (!this.paginator.options.element.wrapper) {
            throw 'no config element.wrapper'
        }

        if (!this.paginator.options.first) {
            throw 'no config first'
        }

        if (typeof this.paginator.options.first != 'function') {
            throw 'config first is not a function'
        }

        if (!this.paginator.options.html) {
            throw 'no config html'
        }

        if (!this.paginator.options.html.reload) {
            throw 'no config html.reload'
        }
    },

    render: function () {
        let me = this

        if (typeof iscrollPull === 'undefined') {
            throw 'no iscrollPull'
        }

        me.paginator.scroller = new iscrollPull(me.options.element.wrapper, {
            probeType: 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function () {
                me.load(null, function (model, data) {
                    me.renderHtml(model, data)
                })
            },
            onUpAction: function () {},
            onLoaded: function () {
                me.paginator.scroller
                    .hideWrapper()     // 隐藏wrapper
                    .stopDown()  // 停止下拉
                    .stopUp()    // 停止上拉

                me.load(me.options.first, function (model, data, time) {
                    me.renderHtml(model, data, time)
                })
            }
        })
    },

    renderHtml: function (status, data, time) {
        let me = this

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(status, data, time) || data
        }

        if (me.options.mock) {
            status = 1
        }

        if (!status) {
            me.renderError(status, data, time)
            return
        }

        if (!data || /^{}$/.test(JSON.stringify(data))) {
            me.renderEmpty(status, data, time)
            return
        }

        me.renderNormal(status, data, time)
    },

    renderError: function (status, data, time) {
        let me = this

        let contentNode = document.querySelector(me.options.element.content)
        if (!contentNode) {
            throw 'no element node content'
        }
        contentNode.innerHTML = me.options.html.reload

        $(me.options.element.reload).off('click').one('click', function () {
            window.location.reload()
        })

        me.updateScroller()

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true)
        }

        me.paginator.scroller.showWrapper()  // 显示wrapper
    },

    renderEmpty: function (status, data, time) {
        let me = this

        document.querySelector(me.options.element.content).innerHTML = me.options.html.empty

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true)
        }

        me.updateScroller()
        me.paginator.scroller.showWrapper()  // 显示wrapper
    },

    renderNormal: function (status, data, time) {
        let me = this

        if (typeof me.options.render === 'function') {
            data = me.options.render(data)
        }

        let strHtml = template(me.options.template, data)

        if (typeof me.options.processStrHtml === 'function') {
            strHtml = me.options.processStrHtml(null, strHtml)
        }

        $(me.options.element.content).html(strHtml)

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(data, time)
        }

        me.updateScroller()

        if (me.options.first && typeof me.options.first === 'function') {
            me.options.first(true)
        }

        me.paginator.scroller.showWrapper()  // 显示wrapper

        me.options.lazyload && me.lazyload()
    },

    updateScroller: function () {
        let me = this

        let instance = me.paginator.scroller

        if (!me.options.enablePullDown) {
            instance.stopDown()  // 停止下拉
        } else {
            instance.restDown()  // 重启下拉
        }

        if (me.scrollerloading) {
            instance.beginUpdate()  // 显示加载中
        } else {
            // 必须调用setTimeout，否则加载中效果不显示
            // 调用太早的话，会因为微信顶部加载进度条没有隐藏，而出现一条白色边
            setTimeout(function () {
                instance.myScroll.refresh()  // 刷新滚动条
            }, 500)
        }
    }

})

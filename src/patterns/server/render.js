import patternServer from './core'

// 渲染处理模块
$.extend(patternServer.prototype, {
    renderValidate: function() {
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

    render: function() {
        let me = this

        if (typeof iscrollPull === 'undefined') {
            throw 'no iscrollPull'
        }

        let options = {
            probeType: me.options.probeType || 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function() {
                me.refresh(function(model, data) {
                    me.renderHtml(model, data)
                })
            },
            onUpAction: function() {
                me.next(function(model, data) {
                    me.renderHtml(model, data)
                })
            },
            onLoaded: function(local) {
                if (me.paginator.options && !me.paginator.options.sameTab) {
                    me.paginator.scroller.hideWrapper(); // 隐藏wrapper
                }

                if (!local && me.paginator.options && !me.paginator.options.noTopUpdate) {
                    me.paginator.scroller.stopDown(). // 停止下拉
                    stopUp(); // 停止上拉
                }

                me.load(me.options.first, function(model, data) {
                    me.renderHtml(model, data)
                })
            }
        }

        // 如果存在上拉下拉，并且已经初始化
        if (me.paginator.scroller && $(me.paginator.options.element.wrapper).hasClass('scrollerWrapper')) {
            // 如果不重置scroller，需要重置其参数
            me.paginator.scroller.set(options)

            if (me.paginator.options && !me.paginator.options.noTopUpdate) {
                me.paginator.scroller.myScroll.scrollTo(0, 0)
            }

            // 停止手势离开屏幕后的滚动
            me.paginator.scroller.myScroll.isAnimating = false

            setTimeout(function() {
                // 开启手势离开屏幕后的滚动
                me.paginator.scroller.myScroll.isAnimating = true
                me.paginator.scroller.options.onLoaded()
            }, 200)
        } else {
            me.paginator.scroller = new iscrollPull(me.options.element.wrapper, options)
        }
    },

    renderHtml: function(model, data) {
        if (this.status && this.status === 3) {
            return
        }

        let me = this

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(model, data) || data
        }

        if (!data || !(data instanceof Array)) {
            me.renderError(model, data)

            return
        }

        if (data.length === 0) {
            me.renderEmpty(model, data)

            return
        }

        me.renderNormal(model, data)
    },

    renderError: function(model, data) {
        let me = this

        let contentNode = document.querySelector(me.options.element.content)
        if (!contentNode) {
            throw 'no element node content'
        }
        contentNode.innerHTML = me.options.html.reload

        $(me.options.element.reload).off('click').one('click', function() {
            window.location.reload()
        })

        if (me.options.data.pageIndex > 1) {
            me.options.page.index -= 1
            me.options.data.pageIndex -= 1
        }

        me.updateScroller(model)

        if (model === me.model.empty || model === me.model.prepend) {
            if (typeof me.options.first === 'function') {
                me.options.first(true)
            }

            me.paginator.scroller.stopUp() // 停止上拉
            me.paginator.scroller.showWrapper() // 显示wrapper
        }
    },

    renderEmpty: function(model, data) {
        let me = this

        if (model === me.model.empty || model === me.model.prepend) {
            document.querySelector(me.options.element.content).innerHTML = me.options.html.empty
        }

        if (typeof me.options.renderEmpty === 'function') {
            me.options.renderEmpty(model, data)
        }

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true)
            }
        }

        me.updateScroller(model)
        me.paginator.scroller.showWrapper() // 显示wrapper
    },

    renderNormal: function(model, data) {
        let me = this

        if (me.options.waterfall) {
            let oddArray = []
            let evenArray = []

            for (let i = 0, len = data.length; i < len; i++) {
                data[i] = me.options.render(data[i])

                if (i % 2 == 0) {
                    evenArray.push(data[i])
                } else {
                    oddArray.push(data[i])
                }
            }

            if (!$(me.options.element.content).hasClass(me.options.extraClass)) {
                $(me.options.element.content).addClass(me.options.extraClass)
                $(me.options.element.content).html('<div class="even-wrapper"></div><div class="odd-wrapper"></div>')
            }

            let evenHtml = ''
            let oddeHtml = ''

            evenHtml = template(me.options.template, evenArray)
            oddeHtml = template(me.options.template, oddArray)

            if (typeof me.options.processStrHtml === 'function') {
                evenHtml = me.options.processStrHtml(model, evenHtml)
                oddeHtml = me.options.processStrHtml(model, oddeHtml)
            }

            if (model === me.model.append) {
                $(me.options.element.content).find(".even-wrapper").append(evenHtml)
                $(me.options.element.content).find(".odd-wrapper").append(oddeHtml)
            } else {
                $(me.options.element.content).find(".even-wrapper").html(evenHtml)
                $(me.options.element.content).find(".odd-wrapper").html(oddeHtml)
            }
        } else {
            $(me.options.element.content).removeClass(me.options.extraClass)
            for (let i = 0, len = data.length; i < len; i++) {
                data[i] = me.options.render(data[i])
            }

            let strHtml = template(me.options.template, data)

            if (typeof me.options.processStrHtml === 'function') {
                strHtml = me.options.processStrHtml(model, strHtml)
            }

            if (model === me.model.append) {
                $(me.options.element.content).append(strHtml)
            } else {
                $(me.options.element.content).html(strHtml)
            }
        }

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(model, data)
        }

        me.updateScroller()

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true)
            }

            me.paginator.scroller.showWrapper() // 显示wrapper
        }

        me.options.lazyload && me.lazyload()
    },

    updateScroller: function() {
        let me = this

        let instance = me.paginator.scroller

        if (!me.options.enablePullDown) {
            instance.stopDown() // 停止下拉
        } else {
            instance.restDown() // 重启下拉
        }

        if (!me.options.enablePullUp) {
            // 停止上拉
            instance.stopUp()
        } else if (me.options.page.index >= me.options.page.count && !ls.get(me.options.ls.hasData)) {
            // 停止上拉
            instance.stopUp()
        } else if (!me.options.page.count && !ls.get(me.options.ls.hasData)) { //无数据时
            // 停止上拉
            instance.stopUp();
        } else {
            // 重启上拉te
            instance.restUp()
        }

        setTimeout(function() {
            instance.myScroll.refresh(); // 刷新scroller
        }, 100);
    }
})

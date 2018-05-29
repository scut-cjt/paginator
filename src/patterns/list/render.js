import patternList from './core'

// 渲染处理模块
$.extend(patternList.prototype, {
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

        let options = {
            pagename: me.options.pagename,
            probeType: me.options.probeType || 2,
            updateTimeKey: me.options.ls.lastUpdateTime,
            onDownAction: function () {
                let scroll = this

                me.currentModel = me.model.prepend

                me.refresh(function (model, data) {
                    me.renderHtml(model, data)

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache(me.paginator.scroller.downHeight)
                    }

                    scroll.lock = false
                })
            },
            onUpAction: function () {
                let scroll = this

                me.currentModel = me.model.append

                me.next(function (model, data) {
                    me.renderHtml(model, data)

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.appendCache()
                    }

                    scroll.lock = false
                })
            },
            onLoaded: function () {
                me.currentModel = me.model.empty

                if (me.paginator.options && !me.paginator.options.sameTab) {
                    me.paginator.scroller.hideWrapper() // 隐藏wrapper
                }

                if (me.paginator.options && !me.paginator.options.noTopUpdate) {
                    me.paginator.scroller
                        .stopDown()  // 停止下拉
                        .stopUp()    // 停止上拉
                }

                me.load(me.options.first, function (model, data, time) {
                    me.renderHtml(model, data, time)

                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache()
                    }

                    me.position.unload(me.paginator.scroller)
                })
            }
        }

        // 如果存在上拉下拉，并且已经初始化
        if (me.paginator.scroller && $(me.paginator.options.element.wrapper).hasClass('scrollerWrapper')) {
            // 如果不重置scroller，需要重置其参数
            me.paginator.scroller.set(options)

            // 如果没有开启定位，滚动到顶端
            if (!me.paginator.pattern.position.enabled() && me.paginator.options && !me.paginator.options.noTopUpdate) {
                me.paginator.scroller.myScroll.scrollTo(0, 0)
            }

			// 停止手势离开屏幕后的滚动
        	me.paginator.scroller.myScroll.isAnimating = false

            setTimeout(function () {
                // 开启手势离开屏幕后的滚动
				me.paginator.scroller.myScroll.isAnimating = true
            	me.paginator.scroller.options.onLoaded()
            }, 200)
        } else {
            me.paginator.scroller = new iscrollPull(me.options.element.wrapper, options)
        }

    },

    renderHtml: function (model, data, time) {
        if (this.status && this.status === 3) {
            return
        }

        let me = this

        // 渲染前数据处理
        if (typeof me.options.renderBefore === 'function') {
            data = me.options.renderBefore(model, data, time) || data
        }

        if (!data || !(data instanceof Array)) {
            me.renderError(model, data, time)

            return
        }

        if (data.length === 0) {
            me.renderEmpty(model, data, time)

            return
        }

        me.renderNormal(model, data, time)
    },

    renderError: function (model, data, time) {
        let me = this

        let contentNode = document.querySelector(me.options.element.content)
        if (!contentNode) {
            throw 'no element node content'
        }
        contentNode.innerHTML = me.options.html.reload

        $(me.options.element.reload).off('click').one('click', function () {
            window.location.reload()
        })

        me.updateScroller(model)

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true)
            }

            me.paginator.scroller.stopUp()  // 停止上拉
            me.paginator.scroller.showWrapper()  // 显示wrapper
        }
    },

    renderEmpty: function (model, data, time) {
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
        me.paginator.scroller.showWrapper()  // 显示wrapper
    },

    renderNormal: function (model, data, time) {
        let me = this
        let oddArray=[],evenArray=[];//by zzs
        for (let i = 0, len = data.length; i < len; i++) {
            data[i] = me.options.render(data[i])
             //by zzs
            if(me.options.waterfall){
               if(i%2==0){
            	   evenArray.push(data[i])
               }else{
            	   oddArray.push(data[i])
               }
            }
        }
       if(me.options.waterfall){

        	if(!$(me.options.element.content).hasClass(me.options.extraClass)){
        		$(me.options.element.content).addClass(me.options.extraClass);
        		$(me.options.element.content).html('<div class="even-wrapper"></div><div class="odd-wrapper"></div>')
        	}

        	var evenHtml='',oddeHtml='';

        	evenHtml=template(me.options.template, evenArray)
        	oddeHtml=template(me.options.template, oddArray)

        	 if (typeof me.options.processStrHtml === 'function') {
                 evenHtml = me.options.processStrHtml(model, evenHtml);
                 oddeHtml = me.options.processStrHtml(model, oddeHtml);
             }

        if (model === me.model.append) {
            $(me.options.element.content).find(".even-wrapper").append(evenHtml);
            $(me.options.element.content).find(".odd-wrapper").append(oddeHtml);
        } else {
        	  $(me.options.element.content).find(".even-wrapper").html(evenHtml);
            $(me.options.element.content).find(".odd-wrapper").html(oddeHtml);
        }

        }else{

           $(me.options.element.content).removeClass(me.options.extraClass);

           var strHtml = '';
            // console.error('有没有大于20条的上拉数' + data.length);
            // 如果数据小于20条，一个<div class="pre">显示，否则分几个
            if (data.length <= 20) {
                strHtml = template(me.options.template, data);
            } else {
                var temp = [];

                for (var _i = 1, _len = data.length + 1; _i < _len; _i++) {
                    temp.push(data[_i - 1]);

                    if (_i % 20 == 0 || _i == _len - 1) {
                        strHtml += template(me.options.template, temp);
                        temp = [];
                    }
                }
            }

            if (typeof me.options.processStrHtml === 'function') {
                strHtml = me.options.processStrHtml(model, strHtml);
            }

            if (model === me.model.append) {
                $(me.options.element.content).append(strHtml);
            } else {
                document.querySelector(me.options.element.content).innerHTML = strHtml;
            }

        }

        if (typeof me.options.renderEnd === 'function') {
            me.options.renderEnd(model, data, time);
        }

        me.updateScroller(model);

        if (me.paginator.options.probeType == 3) {
            me.paginator.scroller.showEle();
        }

        if (model === me.model.empty) {
            if (typeof me.options.first === 'function') {
                me.options.first(true);
            }

            me.paginator.scroller.showWrapper(); // 显示wrapper
        }

        me.options.lazyload && me.lazyload();
    },

    updateScroller: function (model) {
        let me = this

        let instance = me.paginator.scroller

        if (!me.options.enablePullDown) {
            instance.stopDown()  // 停止下拉
        } else {
            instance.restDown()  // 重启下拉
        }

        if (!me.options.enablePullUp) {
            instance.stopUp()  // 停止上拉
        } else if (me.options.page.index >= me.options.page.count && !ls.get(me.options.ls.hasData)) {
            instance.stopUp()  // 停止上拉
        } else {
            instance.restUp()  // 重启上拉
        }

        if (me.scrollerloading) {
            instance.beginUpdate()  // 显示加载中
        } else {
            // console.error('是否恢复了分页参数', model, me.model.empty);
            if (model == me.model.empty) {
                me.position.recover(me.paginator.scroller, me.options, function () {
                    // console.error(me.options.page);
                    if (me.options.probeType == 3) {
                        // 缓存元素信息
                        me.paginator.scroller.cache()
                        me.paginator.scroller.showEle()
                    }
                })
            }

            // 必须调用setTimeout，否则加载中效果不显示
            // 调用太早的话，会因为微信顶部加载进度条没有隐藏，而出现一条白色边
            setTimeout(function () {
                instance.myScroll.refresh()  // 刷新滚动条
            }, 500)
        }
    }

})

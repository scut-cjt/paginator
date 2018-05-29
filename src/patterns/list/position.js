function position(options) {
    if (!options.pagename) {
        return
    }

    // 记录是否开启定位的sessoinStorage的key
    this.enableKey = options.pagename + '_position'
    // 记录滚动条y值
    this.scrollY = options.pagename + '_scrollY'

    // 记录滚动元素数量
    this.scrollEleCount = options.pagename + '_scrollEleCount'

    // 记录点击元素的id
    this.scrollEleId = options.pagename + '_scrollEleId'

    // 列表元素项选择器
    this.selector = options.element.selector

    // 列表元素项选择器主键属性名称
    this.attrKey = options.element.attrKey

    // 页面参数
    this.page = options.page
    // 用于重新计算分页
    this.local = options.local

    this.listkey = options.ls.list

    this.paginator = options.paginator

    this.options = options
}

$.extend(position.prototype, {
    // 开启定位
    enable: function() {
        sessionStorage.setItem(this.enableKey, true)
    },

    // 关闭定位
    disable: function() {
        sessionStorage.removeItem(this.enableKey)
    },

    // 是否开启了定位
    enabled: function() {
        return !!sessionStorage.getItem(this.enableKey)
    },
    // 删除当前元素时重新定位
    delPos:function delPos(){
        var _this = this;
        if (!this.enabled()) return;
        //重新设置定位id,再对id的前个元素进行定位
        this.setPos()
        var posId = Number(sessionStorage.getItem(this.scrollEleId)) || 0;
        var $posEl = $(this.selector + '[' + this.attrKey + '=' + posId + ']').prev();
        if ($posEl.length > 0) {
            var posY = this.offset($posEl[0]).top;
            var maxH = -$(this.options.element.content).height() + $(this.options.element.wrapper).height() - this.options.paginator.scroller.downEle.offsetHeight;
            if ($(this.options.element.content).height() < $(this.options.element.wrapper).height()) {
                //内容不超过一屏幕时
                posY = 0;
            } else if (posY <= maxH) {
                //超过容器最大值设置为最大
                posY = maxH;
            }
            this.paginator.scroller.lastY = posY;
            this.paginator.scroller.myScroll.scrollTo(0, posY);
        }

    },
    // 设置当前点击元素的id
    setPos: function(id){
        //根据滚动定位id,而不是直接记录id
        var me = this;
        //有传id,根据id定位，没传根据滚动位置找最接近的id(tab切换)
        if(id){
            sessionStorage.setItem(this.scrollEleId, id);
            return
        }
        //内容不超过一屏幕，不存在滚动
        if($(me.options.element.wrapper).height()>$(me.options.element.content).height()){
            return
        }
        if (!me.enabled()) return false;
        if (!me.paginator.scroller) return false;
        // 如果存储的定位数值操作上下限，处理下
        var y = me.paginator.scroller.myScroll.y || 0;
        if (y < me.paginator.scroller.myScroll.maxScrollY) {
            y = me.paginator.scroller.myScroll.maxScrollY;
        } else if (me.paginator.scroller.downHeight && y > -me.paginator.scroller.downHeight) {
            y = -me.paginator.scroller.downHeight;
        }

        $(me.selector).each(function (index) {
            let _me = $(this)
            var posY = $(this)[0].offsetTop
            if((-posY)<y && _me.prev()[0]){
                let prevTop = _me.prev()[0].offsetTop
                let nextTop = _me[0].offsetTop
                if(-prevTop-y<nextTop+y){
                    id = _me.prev()[0].getAttribute(me.attrKey)
                }else{
                    id = _me[0].getAttribute(me.attrKey)
                }
                return false
            }
        })
        if(id){
            sessionStorage.setItem(this.scrollEleId, id)
        }
    },

    offset : function (el) {
        var left = -el.offsetLeft,
            top = -el.offsetTop;
        return {
            left: left,
            top: top
        };
    },

    // 手动定位
    pos: function () {
        let me = this

        if (!me.enabled()) return false
        if (!me.paginator.scroller) return false

        // 如果存储的定位数值操作上下限，处理下
        let y = me.paginator.scroller.myScroll.y || 0
        if (y < me.paginator.scroller.myScroll.maxScrollY) {
            y = me.paginator.scroller.myScroll.maxScrollY
        } else if (me.paginator.scroller.downHeight && y > -me.paginator.scroller.downHeight) {
            y = -me.paginator.scroller.downHeight
        }

        // 记录滚动条y值
        sessionStorage.setItem(me.scrollY, y)

        // 记录滚动元素数量
        let count = 0

        $(me.selector).each(function(index) {
            let height = $(this).height()
            let top = $(this).offset().top
            let winHeight = $(window).height()

            if (-winHeight < top - winHeight && top - winHeight < height) {
                count = index + 1
            }
        })

        sessionStorage.setItem(me.scrollEleCount, count)
    },

    // 绑定页面离开事件以记录定位信息
    unload: function(scroll) {
        let me = this

        window.addEventListener('unload', function () {
            if (me.destoryStatus) return false
            if (!me.enabled()) return false
            if (!scroll) return false

            // 绑定页面跳转计算定位值
            me.setPos()

            // 如果存储的定位数值操作上下限，处理下
            let y = scroll.myScroll.y || 0
            if (y < scroll.myScroll.maxScrollY) {
                y = scroll.myScroll.maxScrollY
            } else if (scroll.downHeight && y > -scroll.downHeight) {
                y = -scroll.downHeight
            }

            // 记录滚动条y值
            sessionStorage.setItem(me.scrollY, y)

            // 记录滚动元素数量
            let count = 0

            $(me.selector).each(function(index) {
                let height = $(this).height()
                let top = $(this).offset().top
                let winHeight = $(window).height()

                if (-winHeight < top - winHeight && top - winHeight < height) {
                    count = index + 1
                }
            })

            sessionStorage.setItem(me.scrollEleCount, count)
        })
    },

    // 定位时重新计算分页参数
    reset: function() {
        if (!this.enabled()) {
            return
        }

        if (sessionStorage.getItem(this.scrollEleId) && ls.get(this.listkey)) {
            this.tempSize = this.page.size

            let count = ls.get(this.listkey).length
            this.page.size = count >= this.tempSize ? this.tempSize * Math.ceil(count / this.tempSize) : this.tempSize

            this.reseted = true
        }
    },

    // 滚动到记录的位置，恢复分页参数
    recover: function(scroll, options, callback) {
        if (!this.enabled()) return
        if (!this.reseted) return

        this.reseted = false

        let posId = Number(sessionStorage.getItem(this.scrollEleId)) || 0
        let $posEl = $(this.selector+'['+this.attrKey+'='+posId+']')
        if($posEl.length>0){

            let posY = this.offset($posEl[0]).top
            var maxH = -$(this.options.element.content).height()+$(this.options.element.wrapper).height() - this.options.paginator.scroller.downEle.offsetHeight
            if($(this.options.element.content).height()<$(this.options.element.wrapper).height()){
                //内容不超过一屏幕时
                posY = 0
            }else if(posY <= maxH){
                //超过容器最大值设置为最大
                posY = maxH
            }
            scroll.lastY = posY
            scroll.myScroll.scrollTo(0, posY)
        }
        if (this.tempSize && this.page.size != this.tempSize) {
            this.page.index = this.page.size / this.tempSize
            this.page.size = this.tempSize
            this.page.lastSize = this.page.size
            this.tempSize = null

            let me = this

            me.local(1, Number.MAX_VALUE, function(status, result) {
                me.page.count = Math.ceil(result.length / me.page.size)
                if (me.page.count === 0) {
                    me.page.index = 1
                } else if (me.page.index > me.page.count) {
                    me.page.index = me.page.count
                }
            })

            options.page = this.page

        }

        callback && callback();
    },

    destory: function () {
        let me = this
        this.destoryStatus = true
    }
})

export default position
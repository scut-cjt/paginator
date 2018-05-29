// 核心模块

// 引入配置模块
import config from './config'
// 引入模式工厂
import factory from './factory'

function paginator(options) {
    this.set(options)
}

$.extend(paginator.prototype, {
    /**
     * 修改配置
     */
    set: function (options) {
        this.options = $.extend(true, {}, config, options)

        this.pattern && this.pattern.destory && this.pattern.destory()

        this.factory = null
        this.pattern = null

        // 实例化工厂
        this.factory = new factory(this)
        // 当前模式
        this.pattern =  this.factory.create(this.options.pattern)
    },

    /**
     * 首次加载
     */
    load: function () {
        // 数据处理
        this.pattern.dataHandler()
        // 渲染处理
        this.pattern.renderHandler()
    },

    /**
     * 再次加载
     */
    reload: function (options) {
        if (options) {
            this.set(options)
        }

        // 先终止上一次请求和回调
        this.abort()

        if (this.customAjax && this.customAjax.promise) {
            this.customAjax.promise.always(function () {
                // 设置模式状态为3，以阻止回调
                this.pattern.status = 3

                this.load()
            })
        } else {
            // 设置模式状态为3，以阻止回调
            this.pattern.status = 3

            this.load()
        }
    },

    /**
     * 终止请求
     */
    abort: function () {
        if (this.customAjax && this.customAjax.promise && this.customAjax.promise.readyState !== 4) {
            // 终止当前请求
            this.customAjax.promise.abort()
            // 设置模式状态为3，以阻止回调
            this.pattern.status = 3
        }
    }
})

export default paginator
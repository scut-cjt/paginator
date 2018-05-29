import pattern from '../pattern'
import position from './position'

class patternList extends pattern {
    constructor(paginator) {
        super(paginator) // 调用父类的constructor

        this.model = {
            empty: 1,
            prepend: 2,
            append: 3
        }

        this.ajaxType = 'greed'
    }

    dataHandler() {
        // 数据验证
        this.validate()

        let me = this

        let options = $.extend({}, true, {
            pagename: me.options.pagename,
            page: me.options.page,
            //selector: '#content li',
            local: this.local,
            paginator: this.paginator
        }, this.paginator.options)

        // 处理定位
        this.position = new position(options)
        this.position.reset()
    }

    renderHandler() {
        // 数据验证
        this.renderValidate()

        this.render()
    }

    destory() {
        this.position && this.position.destory()
    }
}

export default patternList
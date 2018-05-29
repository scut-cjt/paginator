import pattern from '../pattern'

class patternServer extends pattern {
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
    }

    renderHandler() {
        // 数据验证
        this.renderValidate()

        this.render()
    }
}

export default patternServer
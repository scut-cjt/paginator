import pattern from '../pattern'

class patternDetail extends pattern {
    constructor(paginator) {
        super(paginator) // 调用父类的constructor
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

export default patternDetail
import patternList from './patterns/list/index'
import patternServer from './patterns/server/index'
import patternDetail from './patterns/detail/index'

class factory {
    // 构造函数
    constructor(paginator) {
        this.paginator = paginator

        // 分页模式枚举
        this.patterns = {
            // 时间戳列表模式
            list: 'list',
            // 详情模式
            detail: 'detail',
            // 服务端页码索引分页模式，本地无缓存
            server: 'server'
        }
    }

    create(pattern) {
        let result

        switch (pattern) {
            case this.patterns.list:
                result = new patternList(this.paginator)
                break
            case this.patterns.server:
                result = new patternServer(this.paginator)
                break
            case this.patterns.detail:
            default:
                result = new patternDetail(this.paginator)
                break
        }

        return result
    }
}

export default factory
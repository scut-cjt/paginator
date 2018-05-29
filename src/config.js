// 配置模块

export default {
    // 分页模式：list-时间戳列表模式；detail-详情模式；server-服务器页码分页模式
    pattern: 'list',

    // 接口路径
    url: '',
    /**
     * 请求模式
     *
     * greed 贪婪型
     */
    ajaxType: '',
    // 请求参数
    data: {},
    // 响应报文时间戳
    stamp: 'updateDate',

    page: {
        /**
         * 每次请求接口获取的数据量
         *
         * 为什么选取40？
         *     每屏一般显示3-10条数据，每页显示[20]条数据，就能显示2-6屏，
         *   获取数据量定为60，就能获得4-12屏数据，已然能够满足需求了。
         */
        getSize: 40,
        /**
         * 每页显示数量
         *
         * 为什么选取20?
         *     每屏一般显示3-10条数据，每页显示[20]条数据，就能显示2-6屏,
         *   然后上拉操作。避免了一次渲染数据太多，操作频繁度也正合适
         */
        size: 20
    },

    // 本地存储相关配置
    ls: {
        // 列表的主键
        id: '',
        // 筛选条件
        where: '',
        // 排序字段
        orders: '',
        // 排序方向
        sorts: '',

        // 列表的本地存储key
        list: null,
        // 列表（详情）最后更新时间的本地存储key
        lastUpdateTime: null,
        // 列表是否取后了最后一条数据的本地存储key：false-没有数据了，取到了最后一条;true-还有数据，没有取到最后一条
        hasData: null,
    },

    // 接口返回报错信息协定字段
    errcode: 'errcode',

    // 详情模式配置
    detail: {
        // 是否允许二次更新
        enableUpdate: true
    },

    // 时间戳分页模式配置
    list: {
        // 响应报文：列表数据
        key: 'list',
        // 响应报文：是否还有下一页数据
        hasNextPage: 'hasNextPage'
    },

    // 服务器分页模式配置
    server: {
        // 请求报文：页码
        index: 'pageIndex',
        // 请求报文：每页数量
        size: 'pageSize',
        // 响应报文：列表数据
        key: 'list',
        // 响应报文：总数
        total: 'total'
    },

    // 模板id
    template: 'template',

    // 页面元素
    element: {
        // 包裹框。iScroll5绑定在此元素上
        wrapper: '.wrapper',
        // 内容展示框
        content: '#content',
        // 重新加载元素
        reload: '.reload-wrapper',
        // 列表元素项选择器
        selector: '#content li',
        // 列表元素项选择器主键属性名称
        attrKey: 'data-id'
    },

    // 元素模板
    html: {
        empty:
            '<div class="empty-wrapper font-bold color-dark-grey">' +
                '<p><span class="icon icon-empty"></span></p>' +
                '<p>暂无数据</p>' +
            '</div>',
        reload:
            '<div class="reload-wrapper font-bold color-dark-grey">' +
                '<p><span class="icon icon-reload"></span></p>' +
                '<p>点击屏幕,重新加载</p>' +
            '</div>'
    },

    enablePullDown: true,
    enablePullUp: true,

    lazyload: true,
    sameTab:false,
    success: function (result) {},
    fail:function (result) {},
    renderBefore: function (model, data, time) { return data },
    processStrHtml: function (model, strHtml, time) { return strHtml },
    renderEnd: function (model, data, time) {}
}

window.customAjax = new customAjax({})

var paginatorInstance = new paginator({
    pagename: 'index',
    customAjax: customAjax,
    pattern: 'list',
    url: '/api/list',
    data: {},
    probeType: 3,
    first: function(end) {
        if (!end) {
            $('.loader').show()
        } else {
            $('.loader').hide()
        }
    },
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
        attrKey: 'keyid'
    },
    ls: {
        id: 'id', // 列表id
        where: '', // 筛选条件
        orders: 'publishDate', // 排序字段
        sorts: 'DESC', // 排序方向 DESC ASC
        list: 'list',
        lastUpdateTime: 'lastUpdateTime',
        hasData: 'hasData',
        detail: 'detail'
    },
    render: function(data) {
        console.log(data);
        return data
    },
    renderEnd: function() {
        $('li:not(.click)').addClass('click').click(function() {
            let id = $(this).attr(paginatorInstance.options.element.attrKey)
            paginatorInstance.pattern.position.enable()
            //paginatorInstance.pattern.position.pos()
            paginatorInstance.pattern.position.setPos(id)
            // window.location.href = 'detail.html'
        })
    }
})

paginatorInstance.load()
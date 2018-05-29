# paginator 

### 规范接口请求报文和响应报文

nextPageId: 1,
nextPageTime: stamp,
count: size,
operate: 1

// 时间戳分页模式配置
list: {
    // 响应报文中的列表数据字段
    key: 'list'
    // 是否还有下一页数据
    hasNextPage: 'hasNextPage'
}

### 依赖样式
$wrapper.addClass('fadeIn animated-faster')
// 分页模式基类

class pattern {
    // 构造函数
    constructor(paginator) {
        this.paginator = paginator
    }

    // 数据处理
    dataHandler() {

    }

    // 渲染处理
    renderHandler() {

    }

    lazyload() {
        let me = this

        $('[data-bg-src-small], [data-bg-src-big]', me.options.element.content).each(function() {
            let lock = $(this).attr('data-src-lock')

            if (lock) {
                return
            }

            let $wrapper = $(this)

            let type = $wrapper.attr('data-bg-src-big') ? 'big' : 'small'

            // 300毫秒内没有加载完图片，就显示默认图片
            let timer = setTimeout(function() {
                if ($wrapper[0].className.indexOf('head') > -1) {
                    $wrapper.addClass('empty-head-img-' + type)
                } else {
                    $wrapper.addClass('empty-img-' + type)
                }
            }, 300)

            let src = $wrapper.attr('data-bg-src-' + type)

            let image = new Image()
            image.onload = function() {
                clearTimeout(timer)

                $wrapper.css('background-image', 'url(' + image.src + ')')
                $wrapper.addClass('fadeIn animated-faster')
                setTimeout(function() {
                    me.paginator.scroller.myScroll.refresh()
                }, 0)
            }
            image.src = src
        })
    }
}

export default pattern
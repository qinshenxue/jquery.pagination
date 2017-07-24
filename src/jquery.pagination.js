(function ($) {

    $.fn.pagination = function (options) {

        var me = this;
        options = $.extend({
            total: 0, // 数据总数
            current: 1, // 当前页码
            pageSize: 10, // 分页大小
            ellipsis: '…', // 页码间隔省略符号
            callback: null // 点击页码回调，回调参数（当前页码，分页组件）
        }, options);

        var pageCount, pages, current = options.current,
            total = options.total;


        function render() {
            calcPages();
            var html = '<div class="pagination">'
            if (pages.length) {
                html += '<ul class="pagination-list"><li data-page="' + (current - 1) + '" class="' + (current == 1 ? "disabled" : "") + '" >上一页</li>';
                for (var i = 0, j = pages.length; i < j; i++) {
                    if (pages[i] == options.ellipsis) {
                        html += '<li class="ellipsis">' + options.ellipsis + '</li>'
                    } else {
                        html += '<li data-page="' + pages[i] + '" class="' + (current == pages[i] ? "active" : "") + '">' + pages[i] + '</li>'
                    }
                }
                html += '<li data-page="' + (current + 1) + '" class="' + (current == pageCount ? "disabled" : "") + '">下一页</li></ul>';
            }
            html += '<div class="pagination-total">总计' + total + '条</div></div>';
            me.html(html);
        }

        function calcPages() {
            pageCount = Math.ceil(total / options.pageSize);
            pages = [];
            if (pageCount < 2) {
                setCurrent(1)
                return;
            }
            if (current > pageCount) {
                setCurrent(pageCount)
            }
            if (pageCount > 11) {
                var len = pageCount - current;
                if (current > 6 && len > 5) {
                    pages = [1, 2, options.ellipsis, current - 2, current - 1, current, current + 1, current + 2, options.ellipsis, pageCount - 1, pageCount];
                } else if (current > 6 && len <= 5) {
                    pages = [1, 2, options.ellipsis];
                    for (var i = 7; i >= 0; i--) {
                        pages.push(pageCount - i);
                    }
                } else if (current <= 6 && len > 5) {
                    for (var i = 1; i <= 8; i++) {
                        pages.push(i);
                    }
                    pages = pages.concat([options.ellipsis, pageCount - 1, pageCount]);
                }
            } else {
                for (var i = 1; i <= pageCount; i++) {
                    pages.push(i);
                }
            }
        }

        function setCurrent(pageIndex) {
            me.current = current = pageIndex
        }

        me.setTotal = function (t, cur) {
            total = t;
            if (cur) {
                setCurrent(cur)
            }
            if (total > 0) {
                render();
            } else {
                me.empty();
            }
        };

        me.current = current

        me.on('click', '[data-page]:not(.disabled)', function () {
            var page = Number($(this).data('page'));
            if (!isNaN(page)) {
                setCurrent(page)
                render();
                if (options.callback) {
                    options.callback(page, me);
                }
            }
        });
        if (total > 0) {
            render();
        }
        return this;
    };

})(jQuery);
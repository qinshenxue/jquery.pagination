(function ($) {

    $.fn.pagination = function (options) {

        var me = this;
        options = $.extend({
            total: 0,
            current: 1,
            pageSize: 10,
            callback: null
        }, options);

        var tpl = '<div class="pagination">\
            <ul class="pagination-list">\
            <li data-page="{{=$data.current-1}}" class="{{=$data.current==1?"disabled":""}}">上一页</li>\
            {{ for(var i=0,j=$data.pages.length;i<j;i++) { }}\
            <li data-page="{{=$data.pages[i] }}" class="{{=$data.current==$data.pages[i]?"active":""}}">{{= $data.pages[i] }}</li>\
            {{ } }}\
        <li data-page="{{=$data.current+1}}" class="{{=$data.current==$data.pageCount?"disabled":""}}">下一页</li>\
            </ul>\
            <div class="pagination-total">总计{{=$data.total}}条</div>\
        </div>';
        var tplData = $.extend(options, {
            pageCount: 0,
            pages: [],
            ellipsis: '…'
        });
        this.total = options.total;

        function template(source, data) {
            var code = "var $out='" + source.replace(/^(.+?)\{\{|\}\}(.+?)\{\{|\}\}(.+?)$/g, function (a) {
                    return a.replace(/(['"])/g, '\\\$1');
                }).replace(/\{\{\s*=\s*(.+?)\}\}/g, "';$out+=$1;$out+='").replace(/\{\{(.+?)\}\}/g, "';$1$out+='") + "';return new String($out);";
            var Render = new Function('$data', code);
            return new Render(data).toString();
        }

        function render() {
            pages();
            me.html(template(tpl, tplData));
        }

        function pages() {
            tplData.pageCount = Math.ceil(me.total / options.pageSize);
            if (tplData.pageCount < 2) {
                return;
            }
            var arr = [];
            if (tplData.pageCount > 11) {
                var len = tplData.pageCount - tplData.current;
                if (tplData.current > 6 && len > 5) {
                    arr = [1, 2, tplData.ellipsis, tplData.current - 2, tplData.current - 1, tplData.current, tplData.current + 1, tplData.current + 2, tplData.ellipsis, tplData.pageCount - 1, tplData.pageCount];
                } else if (tplData.current > 6 && len <= 5) {
                    arr = [1, 2, tplData.ellipsis];
                    for (var i = 7; i >= 0; i--) {
                        arr.push(tplData.pageCount - i);
                    }
                } else if (tplData.current <= 6 && len > 5) {
                    for (var i = 1; i <= 8; i++) {
                        arr.push(i);
                    }
                    arr = arr.concat([tplData.ellipsis, tplData.pageCount - 1, tplData.pageCount]);
                }
            } else {
                for (var i = 1; i <= tplData.pageCount; i++) {
                    arr.push(i);
                }
            }
            tplData.pages = arr;
        }

        me.on('click', '[data-page]:not(.disabled)', function () {
            var page = $(this).data('page');
            if (!isNaN(page)) {
                tplData.current = page;
                render();
                if (options.callback) {
                    options.callback(page, me);
                }
            }
        });
        render();
        return this;
    };

})(jQuery);
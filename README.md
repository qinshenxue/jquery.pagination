#jquery.pagination
### 极简实用的分页插件，min版小至1k多

## 使用示例
``` javascript
$('#test').pagination({
    callback: function (no, pagination) {
        // no是点击的页码
        // pagination是当前组件
        $.ajax({
            url: '',
            data: {
                pageIndex: no,
            },
            success: function (res) {
                // 总数一般是动态的，调用setTotal更新
                pagination.setTotal(res.data.total);
            }
        })
    }
})
```


# jQuery.pagination

基于 jQuery 的简单分页插件

# 示例

``` js
$('#demo').pagination({
    current: 2, // 默认为1
    pageSize: 20, // 默认为10
    total: 1234, // 默认0
    callback: function (pageIndex, pagination) {
        $('#output').text('获取第' + pageIndex + '页数据');
    }
})
```
<div>
<div id="demo"></div>

<script type="text/javascript">
alert(1);

</script>

</div>
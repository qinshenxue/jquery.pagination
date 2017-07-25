

# jQuery.pagination
>基于 jQuery 的简单分页插件

## 示例

``` js
$('#demo').pagination({
    current: 2, // 默认为1
    pageSize: 20, // 默认为10
    total: 1234, // 默认0
    callback: function (pageIndex, pagination) {
        console.log('获取第' + pageIndex + '页数据');
    }
})
```

``` demo
<div id="demo"></div>
<script>
$('#demo').pagination({
    current: 2, // 默认为1
    pageSize: 20, // 默认为10
    total: 1234, // 默认0
    callback: function (pageIndex, pagination) {
        console.log('获取第' + pageIndex + '页数据');
    }
})
</script>
```

## 配置项

### current
当前页码
- **类型：**`number`
- **默认值：**`1`

### pageSize
分页大小
- **类型：**`number`
- **默认值：**`10`

### total
数据总条数
- **类型：**`number`
- **默认值：**`10`
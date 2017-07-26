

# jQuery.pagination
>基于 jQuery 的简单分页插件

## 示例

``` js
var pagination = $('#demo').pagination({
    current: 50, // 默认为1
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
    current: 50, // 默认为1
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

- **类型：**`number`

- **默认值：**`1`

- **详细：** 

 初始化的时候为首次显示的页码，比如上面的 demo 初始化后展示的是第二页（current 配置为 2）

 可以通过实例获取当前的页码，例如：
 ``` js
    pagination.current  // 2
 ```



### pageSize

- **类型：**`number`

- **默认值：**`10`

- **详细：**分页大小

### total

- **类型：**`number`

- **默认值：**`0`

- **详细：**数据总条数

### callback

- **类型：**`Function`
 
 回调参数`callback( pageIndex, pagination )`
 
 - pageIndex：切换后的页码
 - pagination：当前实例（本身为 jQuery 实例）

- **详细：**切换页码后执行回调函数，包含参数


## 实例属性

### pagination.current

- **类型：**`number`

- **只读**

- **详细：** 返回实例当前的页码


## 实例方法

### pagination.setTotal( total[, pageIndex] )


- **参数：**

 - `{number} total`
 - `{number} [pageIndex]`

- **详细：** 

一般异步获取数据后数据总条数可能会发生变化，此时调用 setTotal 就可以改变总条数，进而会重新计算总页数。
某些特殊场景可能需要重新设置当前页码，因此加上了 pageIndex
 
- **示例：**
 ``` js
$('#demo1').pagination({
    total: 100,
    callback: function (pageIndex, pagination) {
        pagination.setTotal(50)
    }
})
 ```
``` demo
<div id="demo1"></div>
<script>
$('#demo1').pagination({
    total: 100,
    callback: function (pageIndex, pagination) {
        pagination.setTotal(50)
    }
})
</script>
```
  ``` js
$('#demo2').pagination({
    total: 100,
    callback: function (pageIndex, pagination) {
        // 定位到第5页
        pagination.setTotal(50,5)
    }
})
 ```
``` demo
<div id="demo2"></div>
<script>
$('#demo2').pagination({
    total: 100,
    callback: function (pageIndex, pagination) {
        pagination.setTotal(50,5)
    }
})
</script>
```
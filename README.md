#jquery.pagination
### 极简实用的分页插件，min版小至1k多

``` javascript
$('#test').pagination({
    total: 9,
    callback: function (pageno, pagination) {
        console.log(pagination);
    }
})
```
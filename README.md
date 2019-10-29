# About wQuery

wQuery是一个封装DOM api来操作DOM的库, 免去了复杂的原生DOM写法, 减少开发者的心智负担, 更加直观易懂

## 用法

### 生成wQuery对象

```js
$('.test') // 选中test类, 并返回一个操作它的wQuery对象
$(`<div>1<span>2</span></div>`) // 传入HTML字符串, 返回可以操作这个HTML元素的wQuery对象
```

### API REFERENCE

```js
addClass(className) //添加类名
find(selector) // 寻找所有的选择器
end() // 返回链式调用里的前一个wQuery对象
each(fn) //遍历元素并用fn操作每个元素
parent() // 寻找元素的父元素
children() // 寻找元素的子元素
,appendTo(node) // 添加元素
remove() // 删除元素
print() // 打印元素
on(event, fn) // 事件监听
```

## 原型链

如果每次生成的wQuery实例里的方法都一样, 但还是重新开辟内存空间去容纳两个**一样**的对象. 这会显得很愚蠢. 原型链也是为了解决这个问题而产生的. wQuery将实例所用到的函数放在`wQuery.prototype`上, 每个实例只需保存一个对`wQuery.prototype`的引用即可节省很大的内存.

## TEST

你可以对`index.html`和`index.js`两个文件进行修改, 以使你对这个库有更加具体的了解.

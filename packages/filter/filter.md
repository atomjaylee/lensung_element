---
title: Filter 过滤器
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 2
---

# Filter 过滤器<Badge>受控</Badge>

用于列表数据的筛选

## 引入

```json
{
  "usingComponent": {
    "ls-filter": "/lensung/filter/filter"
  }
}
```

## 基础用法

```html
<!-- 单个使用 -->
<ls-filter
  id="filter_1"
  width="320"
  schema="{{ schema }}"
  activeKey="{{ activeKey }}"
  onChange="onFilterChangeHandler"
/>
```

```js
data: {
  schema: [
    { label: "选项一", key: 1, statistic: "埋点选项一"}，
    { label: "选项二", key: 2, statistic: "埋点选项二"}，
    { label: "选项三", key: 3, statistic: "埋点选项三"}，
    { label: "选项四", key: 4, statistic: "埋点选项四"}，
  ],
  activeKey: 1
},

onFilterChangeHandler(key) {
  this.setData({ activeKey: key })
}
```

## API

### Attributes

| 参数          | 说明                                 | 类型                    | 默认值                        | 备注                                               |
| ------------- | ------------------------------------ | ----------------------- | ----------------------------- | -------------------------------------------------- |
| id            | 标识                                 | `string`                | 可以使用此标识手动关闭 filter | -                                                  |
| width         | 该过滤器的宽度                       | `string`                | `auto`                        | `auto` \| `100`\|`100rpx`                          |
| activeKey     | 选中的值                             | `string` \| `number`    | -                             | -                                                  |
| schema        | 下拉面板展示的数据                   | `Record<string, any>[]` | `[]`                          | `[{ label: '显示', key: '值', statistic: '埋点'}]` |
| style         | 自定义样式                           | `string`                | -                             | -                                                  |
| class         | 自定义样式类                         | `string`                | -                             | -                                                  |
| labelIdentify | 标记 schema 对象中用于显示的字段名称 | `string`                | `label`                       | -                                                  |
| keyIdentify   | 标记 schema 对象中作为值的字段名称   | `string`                | `key`                         | -                                                  |

### Events

| 事件名称        | 说明                                 | 回调参数                                       | 备注                                       |
| --------------- | ------------------------------------ | ---------------------------------------------- | ------------------------------------------ |
| onVisibleChange | 当下拉内容出现和隐藏状态变化式的回调 | visible - 是否为开启状态                       | 获取该状态后可用于设置页面的不可滚动等功能 |
| onChange        | 选中项修改时回调函数                 | `key` - 选中的值, `props` - 组件接收到的 props | -                                          |

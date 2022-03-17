---
title: DropFilter 下拉面板
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 2
---

# dropFilter 过滤器<Badge>受控</Badge>

用于自定义过滤内容，如下拉选择时间等

## 引入

```json
{
  "usingComponent": {
    "ls-drop-filter": "/lensung/dropFilter/dropFilter"
  }
}
```

## 基础用法

```html
<!-- 单个使用 -->
<ls-drop-filter id="filter_1" width="320">
  <text>同步时间</text>
  <view slot="body">自定义内容区</view>
</ls-drop-filter>
```

## API

### Attributes

| 参数  | 说明           | 类型     | 默认值                        | 备注                      |
| ----- | -------------- | -------- | ----------------------------- | ------------------------- |
| id    | 标识           | `string` | 可以使用此标识手动关闭 filter | -                         |
| width | 该过滤器的宽度 | `string` | `auto`                        | `auto` \| `100`\|`100rpx` |
| style | 自定义样式     | `string` | -                             | -                         |
| class | 自定义样式类   | `string` | -                             | -                         |

### Events

| 事件名称        | 说明                                 | 回调参数                 | 备注                                       |
| --------------- | ------------------------------------ | ------------------------ | ------------------------------------------ |
| onVisibleChange | 当下拉内容出现和隐藏状态变化式的回调 | visible - 是否为开启状态 | 获取该状态后可用于设置页面的不可滚动等功能 |
| onBeforeOpen    | 展示下拉内容之前的钩子函数，可异步   | -                        | -                                          |

### Scoped Slot

| name    | 说明                                    |
| ------- | --------------------------------------- |
| default | 自定义 头部显示文本, 参数 `visible`     |
| body    | 自定义 下拉面板显示内容, 参数 `visible` |

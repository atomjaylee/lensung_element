---
title: DropPanel 下拉面板(50%)
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# DropPanel 下拉面板

下拉菜单可用于列表筛选

## 引入

```json
{
  "usingComponent": {
    "ls-drop-panel": "/lensung/dropPanel/dropPanel"
  }
}
```

## 基础用法

```html
<ls-drop-panel>
  <view>Header</view>
  <view slot="body">Body</view>
</ls-drop-panel>
```

## API

### options

| 参数         | 说明                         | 类型      | 默认值  | 备注 |
| ------------ | ---------------------------- | --------- | ------- | ---- |
| coverHeader  | 展开面板是否盖住 Header 部分 | `boolean` | `false` | -    |
| maskClosable | 点击遮罩关闭弹窗             | `boolean` | `false` | -    |
| zIndex       | z-index 的值                 | `number`  | `2`     | -    |

### Events

| 事件名称     | 说明             | 回调参数 | 备注           |
| ------------ | ---------------- | -------- | -------------- |
| onBeforeOpen | 打开前的回调函数 | -        | -              |
| onAfterClose | 关闭后的回调函数 | -        | 动画结束后触发 |

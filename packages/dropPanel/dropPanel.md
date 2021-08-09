---
title: DropPanel 下拉面板
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
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
<ls-drop-panel id="itemList_filter">
  <view slot-scope="scope">Header {{ scope.visible ? 'open': 'close' }}</view>
  <view slot="body">Body</view>
</ls-drop-panel>
```

```js
methods: {
  closeCurrentDropPanel() {
    const currentDropPanel = getApp().__dropPanelInstanceMap__.get('itemList_filter');
    currentDropPanel.close();
  }
}
```

## API

### props

| 参数         | 说明                         | 类型      | 默认值  | 备注                             |
| ------------ | ---------------------------- | --------- | ------- | -------------------------------- |
| id           | dropPanel 唯一标识           | `string`  | -       | 可以使用此标识手动关闭 dropPanel |
| coverHeader  | 展开面板是否盖住 Header 部分 | `boolean` | `false` | -                                |
| maskClosable | 点击遮罩关闭弹窗             | `boolean` | `false` | -                                |
| zIndex       | z-index 的值                 | `number`  | `2`     | -                                |

### Scoped Slot

| name    | 说明                                    |
| ------- | --------------------------------------- |
| default | 自定义 头部显示内容, 参数 `visible`     |
| body    | 自定义 下拉面板显示内容, 参数 `visible` |

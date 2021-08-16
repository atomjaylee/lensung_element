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
  // 手动关闭单个dropPanel
  closeCurrentDropPanel() {
    const currentDropPanel = this.$page.__dropPanelInstanceMap__.get('itemList_filter');
    currentDropPanel.close();
  },

  // NOTE: 特殊场景下，我们需要手动关闭页面开启的dropPanel
  handleCloseAllDropPanel() {
    const dropPanelInstanceMap = this.$page.__dropPanelInstanceMap__;
    if(dropPanelInstanceMap) {
      dropPanelInstanceMap.forEach(instance => instance.close());
    }
  }
}
```

<Alert type="info">
  注意, 如每个dropPanel组件传入id用于标识在页面的唯一性，当页面存在多个dropPanel组件，开启其中一个，程序会自动关闭其他开启状态的dropPanel
</Alert>

## API

### Attributes

| 参数         | 说明                             | 类型      | 默认值  | 备注                             |
| ------------ | -------------------------------- | --------- | ------- | -------------------------------- |
| id           | dropPanel 唯一标识               | `string`  | -       | 可以使用此标识手动关闭 dropPanel |
| coverHeader  | 展开面板是否从 Header 的顶部开始 | `boolean` | `false` | -                                |
| maskClosable | 点击遮罩关闭弹窗                 | `boolean` | `false` | -                                |
| bodyClosable | 点击遮罩关闭弹窗                 | `boolean` | `false` | -                                |
| zIndex       | z-index 的值                     | `number`  | `2`     | -                                |

### Methods

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| close    | 关闭显示 | -        |

### Events

| 事件名称        | 说明                                 | 回调参数                 | 备注                                       |
| --------------- | ------------------------------------ | ------------------------ | ------------------------------------------ |
| onVisibleChange | 当下拉内容出现和隐藏状态变化式的回调 | visible - 是否为开启状态 | 获取该状态后可用于设置页面的不可滚动等功能 |

### Scoped Slot

| name    | 说明                                    |
| ------- | --------------------------------------- |
| default | 自定义 头部显示内容, 参数 `visible`     |
| body    | 自定义 下拉面板显示内容, 参数 `visible` |

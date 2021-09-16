---
title: Popup 弹出层
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 1
---

# Popup 弹出层

屏幕滑出一块自定义内容区域

## 引入

```json
{
  "usingComponent": {
    "ls-popup": "/lensung/popup/popup"
  }
}
```

## 基础用法

```html
<ls-popup ref="popup" zIndex="10"></ls-popup>
```

```js
methods: {
  // 注册
  popup(ref) {
    this.$popup = ref;
  },

  // 调用
  openPopupHandler() {
    this.$popup.show({
      maskClosable: true,
      onAfterClose: () => {}
    });
  }
}
```

## API

### options

| 参数            | 说明                      | 类型                               | 默认值   | 备注 |
| --------------- | ------------------------- | ---------------------------------- | -------- | ---- |
| position        | 弹出位置                  | `top` \| `right`\|`bottom`\|`left` | `bottom` | -    |
| zIndex          | 弹出层 z-index            | `number`                           | `999`    | -    |
| title           | 弹出层标题                | `string`                           | -        | -    |
| suppressRadius  | 是否隐藏弹出层的圆角      | `boolean`                          | `false`  | -    |
| showTitleBorder | 是否显示 title 底部边框线 | `boolean`                          | `false`  | -    |
| hiddenCloseIcon | 是否隐藏标题栏关闭按钮    | `boolean`                          | `false`  | -    |
| maskClosable    | 点击遮罩是否关闭          | `boolean`                          | `false`  | -    |
| statisticCancel | 点击取消埋点标记          | `string`                           | -        | -    |

### Methods

| 事件名称 | 说明           | 回调参数  |
| -------- | -------------- | --------- |
| show     | 开启确认框显示 | `options` |
| close    | 关闭显示       | -         |

### Events

| 事件名称        | 说明                                 | 回调参数                 | 备注                                       |
| --------------- | ------------------------------------ | ------------------------ | ------------------------------------------ |
| onAfterClose    | popup 关闭后的回调函数               | -                        | 动画结束后触发                             |
| onCancel        | popup 点击遮罩层关闭时的回调函数     | -                        | -                                          |
| onVisibleChange | 当内容出现和隐藏状态变化式的回调 | visible - 是否为开启状态 | 获取该状态后可用于设置页面的不可滚动等功能 |

### Slot

| name    | 说明                       |
| ------- | -------------------------- |
| default | 自定义 popup 的显示内容    |
| title   | 自定义 popup 的 title 内容 |

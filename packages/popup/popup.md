---
title: Popup 弹出层
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# Popup 弹出层

屏幕滑出或弹出一块自定义内容区域

## 引入

```json
{
  "usingComponent": {
    "ls-popup": "/components/popup/popup"
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
  dialog(ref) {
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

| 参数         | 说明             | 类型                               | 默认值   | 备注 |
| ------------ | ---------------- | ---------------------------------- | -------- | ---- |
| position     | 弹出位置         | `top` \| `right`\|`bottom`\|`left` | `bottom` | -    |
| zIndex       | 弹出层 z-index   | `number`                           | `999`    | -    |
| maskClosable | 点击遮罩是否关闭 | `boolean`                          | `false`  | -    |

### Methods

| 事件名称 | 说明           | 回调参数  |
| -------- | -------------- | --------- |
| show     | 开启确认框显示 | `options` |
| close    | 关闭显示       | -         |

### Events

| 事件名称     | 说明                   | 回调参数 | 备注           |
| ------------ | ---------------------- | -------- | -------------- |
| onAfterClose | popup 关闭后的回调函数 | -        | 动画结束后触发 |

### Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | 自定义 popup 的显示内容 |

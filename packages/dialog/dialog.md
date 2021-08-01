---
title: Dialog 对话框
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# Dialog 对话框

交互式模态窗口

## 引入

```json
{
  "usingComponent": {
    "ls-dialog": "/components/dialog/dialog"
  }
}
```

## 基础用法

```html
<ls-dialog ref="dialog"></ls-dialog>
```

```js
methods: {
  // 注册
  dialog(ref) {
    this.$dialog = ref;
  },

  // 调用
  openDialogHandler() {

  }
}
```

## API

### options

| 参数            | 说明                         | 类型                           | 默认值   | 备注                  |
| --------------- | ---------------------------- | ------------------------------ | -------- | --------------------- |
| content         | 显示内容                     | `string`                       | -        | -                     |
| icon            | 显示图标                     | `success` \| `error`\|`string` | -        | 可传入 iconfont 图标  |
| duration        | toast 消失时间               | `number`                       | `2000`   | -                     |
| suppressOperate | toast 出现时禁止操作底部页面 | `boolean`                      | `false`  | -                     |
| position        | 弹窗出现的问题               | `top` \| `center`\|`bottom`    | `center` | -                     |
| zIndex          | z-index 的值                 | `number`                       | `999`    | -                     |
| maxLine         | 文本最大行数                 | `number`                       | `3`      | -                     |
| maxWidth        | toast 最大宽度               | `number`                       | `560`    | `0 < maxWidth <= 750` |

### Methods

| 事件名称 | 说明            | 回调参数  |
| -------- | --------------- | --------- |
| show     | 开启 toast 显示 | `options` |

### Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| onClose  | toast 关闭时的回调函数 | -        |

### Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | 自定义 toast 的显示内容 |

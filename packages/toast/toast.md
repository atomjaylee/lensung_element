---
title: Toast 轻提示
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 4
---

# Toast 轻提示

弹出式消息提示

## 引入

```json
{
  "usingComponent": {
    "ls-toast": "/lensung/toast/toast"
  }
}
```

## 基础用法

```html
<ls-toast ref="toast" maxLine="2" duration="2500"></ls-toast>
```

```js
methods: {
  // 注册
  toast(ref) {
    this.$toast = ref;
  },

  // 调用
  openToastHandler() {
    this.$toast.show({ content: "提示信息", icon: 'success'}); // 基础模式
    this.$toast.show('提示信息'); // 快捷方式
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
| class           | 自定义样式类                 | `string`                       | -        | -                     |
| style           | 自定义样式                   | `string`                       | -        | -                     |

### Methods

| 事件名称 | 说明            | 回调参数  |
| -------- | --------------- | --------- |
| show     | 开启 toast 显示 | `options` |

### Events

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| onClosed | toast 关闭时的回调函数 | -        |

### Slot

| name    | 说明                    |
| ------- | ----------------------- |
| default | 自定义 toast 的显示内容 |

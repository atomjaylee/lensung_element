---
title: Dialog 对话框
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 1
---

# Dialog 对话框

交互式模态窗口

## 引入

```json
{
  "usingComponent": {
    "ls-dialog": "/lensung/dialog/dialog"
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
    // 方式一
    this.$dialog.confirm({
      content: "confirm弹窗",
      onBeforeClose: () => {
        const isPass = await request(params);
        return isPass;
      },
      onConfirm: () => {},
      onCancel: () => {}
    });

    // 方式二：
    await this.$dialog.confirm({ content: "confirm弹窗" });
    console.log("点击了确认按钮");

    // 方式三
    this.$dialog.confirm({
      content: "confirm弹窗"，
      onCancel: () => {}
    }).then(() => {
      // 点击了确认
    })


    this.$dialog.alert({ confirmText: "知道了" })
  }
}
```

## API

### options

| 参数           | 说明                 | 类型                                              | 默认值  | 备注                 |
| -------------- | -------------------- | ------------------------------------------------- | ------- | -------------------- |
| title          | 显示标题             | `string`                                          | -       | -                    |
| content        | 显示内容             | `string`                                          | -       | -                    |
| icon           | 显示图标             | `success` \| `error`\|`warn`\|`string`            | -       | 可传入 iconfont 图标 |
| confirmText    | 确定按钮文本         | `string`                                          | `确定`  | -                    |
| cancelText     | 取消按钮文本         | `string`                                          | `取消`  | -                    |
| zIndex         | z-index 的值         | `number`                                          | `999`   | -                    |
| maxLine        | 文本最大行数         | `number`                                          | `3`     | -                    |
| contentClass   | 内容区自定义 class   | `string`                                          | -       | -                    |
| contentJustify | 内容区子元素横轴排列 | `start` \| `center`\|`end` \|`between` \|`around` | `start` | -                    |
| closable       | 是否显示关闭按钮     | `boolean`                                         | `false` | -                    |
| maskClosable   | 点击遮罩关闭弹窗     | `boolean`                                         | `false` | -                    |
| class          | 自定义样式类         | `string`                                          | -       | -                    |
| style          | 自定义样式           | `string`                                          | -       | -                    |

### Methods

| 事件名称 | 说明           | 回调参数  |
| -------- | -------------- | --------- |
| confirm  | 开启确认框显示 | `options` |
| alert    | 开启提示框显示 | `options` |
| close    | 关闭显示       | -         |

### Events

| 事件名称      | 说明                    | 回调参数 | 备注                       |
| ------------- | ----------------------- | -------- | -------------------------- |
| onBeforeClose | dialog 关闭前的回调函数 | -        | 返回值需为 `true \| false` |
| onAfterClose  | dialog 关闭后的回调函数 | -        | 动画结束后触发             |
| onConfirm     | dialog 确认后回调函数   | -        | -                          |
| onCancel      | dialog 取消后回调函数   | -        | -                          |

### Slot

| name    | 说明                       |
| ------- | -------------------------- |
| default | 自定义 dialog 的显示内容   |
| buttons | 自定义 dialog 的按钮组内容 |

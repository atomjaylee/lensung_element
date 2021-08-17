---
title: ActionSheet 动作面板
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 1
---

# ActionSheet 动作面板

用于提供场景相关的多个操作动作

## 引入

```json
{
  "usingComponent": {
    "ls-action-sheet": "/lensung/actionSheet/actionSheet"
  }
}
```

## 基础用法

```html
<ls-action-sheet ref="actionSheet"></ls-action-sheet>
```

```js
methods: {
  // 注册
  actionSheet(ref) {
    this.$actionSheet = ref;
  },

  // 调用
  async openActionSheetHandler() {
    const key = await this.$dialog.confirm({
      schema: [{ label: "按钮一", key: 1},{ label: "按钮二", key: 2}],
      tip: "温馨提示：图片从选中位置依次往后替换",
      space: false,
      maskClosable: false,
      onBeforeClose: () => {
        const isPass = await request(params);
        return isPass;
      },
      onAfterClose: () => {}
    });
  }
}
```

## API

### options

| 参数            | 说明                           | 类型                        | 默认值  | 备注                                               |
| --------------- | ------------------------------ | --------------------------- | ------- | -------------------------------------------------- |
| tip             | 顶部提示信息                   | `string`                    | -       | -                                                  |
| space           | 是否显示为操作和取消分离的样式 | `boolean`                   | `true`  | -                                                  |
| schema          | 操作按钮配置                   | `[<label, key, statistic>]` | `[]`    | `[{ label: '显示', key: '值', statistic: '埋点'}]` |
| cancelText      | 取消按钮文本                   | `string`                    | `取消`  | -                                                  |
| maskClosable    | 点击遮罩关闭弹窗               | `boolean`                   | `false` | -                                                  |
| statisticCancel | 点击取消埋点标记               | `string`                    | -       | -                                                  |
| zIndex          | z-index 的值                   | `number`                    | `999`   | -                                                  |
| class           | 自定义样式类                   | `string`                    | -       | -                                                  |
| style           | 自定义样式                     | `string`                    | -       | -                                                  |

### Methods

| 事件名称 | 说明                  | 回调参数  |
| -------- | --------------------- | --------- |
| show     | 开启 actionSheet 显示 | `options` |
| close    | 关闭显示              | -         |

### Events

| 事件名称      | 说明                    | 回调参数 | 备注                       |
| ------------- | ----------------------- | -------- | -------------------------- |
| onBeforeClose | dialog 关闭前的回调函数 | -        | 返回值需为 `true \| false` |
| onAfterClose  | dialog 关闭后的回调函数 | -        | 动画结束后触发             |

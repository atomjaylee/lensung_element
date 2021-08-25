---
title: Selector 列表选择器
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 2
---

# Selector 列表选择器

用于弹出列表中选择一项

## 引入

```json
{
  "usingComponent": {
    "ls-selector": "/lensung/selector/selector"
  }
}
```

## 基础用法

```html
<ls-selector ref="selector"></ls-selector>
```

```js
data: {
  schema: [
    { label: '选项一', key: '1' },
    {
      label: '选项二',
      key: '2',
      children: [{ label: '子选项1', key: '2-1', children: [{ label: '孙子选项', key: '2-1-1' }] }],
    },
    { label: '选项三', key: '3', disabled: true },
    { label: '选项四', key: '4' },
  ];
},
methods: {
  selector(ref) {
    this.$selector = ref;
  },

  showSelector() {
    this.$selector.show({
      title: "请选择",
      schema: this.data.schema,
      onBeforeClose: (checked) => {
        if(checked === undefined) {
          this.$toast("最少选中一个");
          return false;
        }
        return true;
      },
      onConfirm: (checked) => {
        // logic
      }
    })
  },
}
```

## API

### Attributes

| 参数            | 说明                                | 类型                   | 默认值      | 备注               |
| --------------- | ----------------------------------- | ---------------------- | ----------- | ------------------ |
| title           | 自定义标题                          | `string`               | -           | -                  |
| confirmText     | 底部确定按钮文本                    | `string`               | `确定`      | -                  |
| schema          | 展示内容                            | `Record<string,any>[]` | `[]`        | -                  |
| defaultChecked  | 默认选中                            | `Record<string,any>`   | `undefined` | -                  |
| hiddenCloseIcon | 是否隐藏关闭按钮                    | `boolean`              | `false`     | -                  |
| maskCloseable   | 是否点击遮罩层关闭                  | `boolean`              | `true`      | -                  |
| activeLabel     | schema 数据中映射 label 的字段名    | `string`               | `label`     | 用于显示           |
| activeKey       | schema 数据中映射 key 的字段名      | `string`               | `key`       | 用于判定勾选       |
| activeChildren  | schema 数据中映射 children 的字段名 | `string`               | `children`  | 用于递归显示子数据 |
| activeDisabled  | schema 数据中映射 disabled 的字段名 | `string`               | `disabled`  | 用于禁用勾选       |

### Events

| 事件名称      | 说明                               | 回调参数                                    |
| ------------- | ---------------------------------- | ------------------------------------------- |
| onBeforeClose | 关闭前判定函数，需返回 `boolean`   | `checked: Record<string, any> \| undefined` |
| onAfterClose  | 弹窗关闭后(动画结束)回调           | -                                           |
| onCancel      | 点击遮罩层或关闭按钮取消操作时回调 | -                                           |
| onConfirm     | 确认选择回调                       | `checked: Record<string, any> \| undefined` |

### Slot

| name    | 说明                                 |
| ------- | ------------------------------------ |
| default | 自定义复杂内容，而不使用 schema 配置 |

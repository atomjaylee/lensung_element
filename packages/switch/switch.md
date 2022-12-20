---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 2
---

# Switch 开关

开关组件，用于表示开关状态/两种状态之间的切换

## 引入

```json
{
  "usingComponent": {
    "ls-switch": "/lensung/switch/switch"
  }
}
```

## 基础用法

```html
<ls-switch checked="{{ checked }}" size="medium" checkedText="开" unCheckedText="关"></ls-switch>
<ls-switch checked="{{ checked }}" size="small" unCheckedColor="red"></ls-switch>
<ls-switch
  checked="{{ checked }}"
  size="small"
  checkedText="开"
  unCheckedText="关"
  disabled
></ls-switch>
<!-- 插槽定义label -->
<ls-switch size="large" checked="{{ checked }}" onChange="onChangeHandler">
  <text slot="checkedText" class="iconfont open"></text>
  <text slot="unCheckedText" class="iconfont close"></text>
</ls-switch>
```

## API

### Attributes

| 参数           | 说明               | 类型                            | 默认值    | 备注 |
| -------------- | ------------------ | ------------------------------- | --------- | ---- |
| checked        | 是否开启           | `boolean` \| `string`\|`number` | `false`   | -    |
| size           | 按钮尺寸           | `large` \| `medium`\|`small`    | `medium`  | -    |
| disabled       | 按钮失效状态       | `boolean`                       | `false`   | -    |
| checkedColor   | 开关打开后的颜色   | `string`                        | `#1dc11d` | -    |
| checkedText    | 开关开启后显示文字 | `string`                        | -         | -    |
| checkedValue   | 开关开启时的值     | `boolean` \| `string`\|`number` | `true`    | -    |
| unCheckedColor | 开关关闭后的颜色   | `string`                        | `#e9e9ea` | -    |
| unCheckedText  | 开关关闭后显示文字 | `string`                        | -         | -    |
| hidden         | 是否隐藏           | `boolean`                       | `false`   | -    |
| style          | 自定义按钮样式     | `string`                        | -         | -    |
| class          | 自定义按钮样式类   | `string`                        | -         | -    |

### Events

| 事件名称 | 说明                            | 回调参数      |
| -------- | ------------------------------- | ------------- |
| onChange | switch 状态发生变化时的回调函数 | `{ checked }` |

### Slot

| name          | 说明                     |
| ------------- | ------------------------ |
| checkedText   | 自定义开启时显示的 label |
| unCheckedText | 自定义关闭时显示的 label |

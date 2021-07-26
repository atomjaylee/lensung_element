---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 2
---

# Switch 开关

按钮组件，可配置多种不同的按钮样式

## 引入

```json
{
  "usingComponent": {
    "ls-switch": "/components/switch/switch"
  }
}
```

## 基础用法

```html

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
| unCheckedValue | 开关关闭时的值     | `boolean` \| `string`\|`number` | `false`   | -    |
| style          | 自定义按钮样式     | `string`                        | -         | -    |
| class          | 自定义按钮样式类   | `string`                        | -         | -    |

### Events

| 事件名称 | 说明                            | 回调参数                            |
| -------- | ------------------------------- | ----------------------------------- |
| onChange | switch 状态发生变化时的回调函数 | { `checked`, dataset, currentTarget } |

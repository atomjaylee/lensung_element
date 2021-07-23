---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# Button 按钮

按钮组件，可配置多种不同的按钮样式

## 引入

```json
{
  "usingComponent": {
    "ls-button": "/components/button/button"
  }
}
```

## 代码演示

## 基础用法

## API

### Button Props

| 参数     | 说明                           | 类型                                            | 默认值    | 备注                                    |
| -------- | ------------------------------ | ----------------------------------------------- | --------- | --------------------------------------- |
| type     | 按钮类型                       | `default` \| `primary`\|`ghost`\|`info`\|`warn` | `default` | -                                       |
| size     | 按钮尺寸                       | `large` \| `medium`\|`small` \| `mini`          | `medium`  | -                                       |
| disabled | 按钮失效状态                   | `boolean`                                       | `false`   | -                                       |
| block    | 将按钮宽度调整为其父宽度的选项 | `boolean`                                       | `false`   | -                                       |
| icon     | 设置按钮的图标组件             | `string`                                        | -         | 需为项目中导入的 iconfont.acss 中的类名 |
| class    | 自定义按钮样式类               | `string`                                        | -         | -                                       |
| style    | 自定义按钮样式                 | `string`                                        | -         | -                                       |
| onTap    | 点击按钮时的回调               | `(event) => void`                               | -         | -                                       |

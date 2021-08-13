---
title: Selector 列表选择器(10%)
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 1
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
<!-- 单个使用 -->
<ls-selector></ls-selector>
```

## API

### Attributes

| 参数   | 说明           | 类型     | 默认值 | 备注                                                          |
| ------ | -------------- | -------- | ------ | ------------------------------------------------------------- |
| schema | 用于显示的结构 | `array`  | `[]`   | `[{ label: '出售中', key: "onSale", statistic: '埋点标记' }]` |
| style  | 自定义样式     | `string` | -      | -                                                             |
| class  | 自定义样式类   | `string` | -      | -                                                             |

---
title: Filter 过滤器(1%)
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 1
---

# Filter 过滤器

用于列表数据的筛选

## 引入

```json
{
  "usingComponent": {
    "ls-filter": "/lensung/filter/filter"
  }
}
```

## 基础用法

```html
<!-- 单个使用 -->
<ls-filter></ls-filter>
```

## API

### Attributes

| 参数   | 说明           | 类型     | 默认值 | 备注                                                          |
| ------ | -------------- | -------- | ------ | ------------------------------------------------------------- |
| config | 用于显示的结构 | `array`  | `[]`   | `[{ label: '出售中', key: "onSale", statistic: '埋点标记' }]` |
| style  | 自定义样式     | `string` | -      | -                                                             |
| class  | 自定义样式类   | `string` | -      | -                                                             |

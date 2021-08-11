---
title: ItemRow 单个商品展示(20%)
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  path: /functions
  order: 1
---

# ItemRow 单个商品

通过配置展示单个商品

## 引入

```json
{
  "usingComponent": {
    "ls-item-row": "/lensung/itemRow/itemRow"
  }
}
```

## 基础用法

```html
<ls-item-row> </ls-item-row>
```

## API

### Attributes

| 参数   | 说明   | 类型 | 默认值 | 备注 |
| ------ | ------ | ---- | ------ | ---- |
| source | 数据源 | `{}` | -      | -    |

### Scoped Slot

| name    | 说明             |
| ------- | ---------------- |
| default | 自定义标题下内容 |

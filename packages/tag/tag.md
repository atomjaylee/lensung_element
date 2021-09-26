---
title: Tag 标签
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
---

# Tag 标签

用于标记闲鱼，新品，主图视频等信息

## 引入

```json
{
  "usingComponent": {
    "ls-tag": "/lensung/tag/tag"
  }
}
```

## 基础用法

```html
<ls-tag>闲鱼</ls-tag>
<ls-tag>新品</ls-tag>
<ls-tag>拍卖</ls-tag>
<ls-tag>主图视频无</ls-tag>
<ls-tag>手机详情无</ls-tag>
```

## API

### Attributes

| 参数      | 说明                                | 类型            | 默认值    | 备注 |
| --------- | ----------------------------------- | --------------- | --------- | ---- |
| type      | 标签类型                            | `ghost`\|`fill` | `fill`    |
| fontColor | 标签字体颜色(`ghost`模式下的边框色) | `string`        | `#333`    | -    |
| fillColor | `fill`模式下，背景填充色            | `string`        | `#f2f2f2` | -    |
| hidden    | 是否隐藏                            | `boolean`       | `false`   | -    |
| class     | 自定义标签样式类                    | `string`        | -         | -    |
| style     | 自定义标签样式                      | `string`        | -         | -    |

### Tag Slot

| name    | 说明       |
| ------- | ---------- |
| default | 自定义内容 |

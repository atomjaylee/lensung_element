---
title: Flex 布局
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# Button 按钮

Flex 是 CSS flex 布局的一个封装。

## 引入

```json
{
  "usingComponent": {
    "ls-flex": "/components/flex/flex"
  }
}
```

## 基础用法

```html
<ls-flex justify="center"></ls-flex>
```

## API

### Attributes

| 参数         | 说明                       | 类型                                                          | 默认值   | 备注 |
| ------------ | -------------------------- | ------------------------------------------------------------- | -------- | ---- |
| type         | flex 的类型                | `flex` \| `inline-flex`                                       | `flex`   | -    |
| direction    | 定位方向                   | `row` \| `row-reverse`\|`column` \| `column-reverse`          | `row`    | -    |
| wrap         | 子元素的换行方式           | `nowrap` \| `wrap`\|`wrap-reverse`                            | `nowrap` | -    |
| justify      | 子元素在主轴上的对齐方式   | `start` \| `center`\|`end` \|`between` \|`around`             | `start`  | -    |
| align        | 子元素在交叉轴上的对齐方式 | `start` \| `center`\|`end` \|`baseline` \|`stretch`           | `center` | -    |
| alignContent | 有多根轴线时的对齐方式     | `start` \| `center`\|`end` \|`between` \|`around` \|`stretch` | `start`  | -    |
| hidden       | 是否隐藏                   | `boolean`                                                     | `false`  | -    |
| class        | 自定义样式类               | `string`                                                      | -        | -    |
| style        | 自定义样式                 | `string`                                                      | -        | -    |

### Events

| 事件名称 | 说明                           | 回调参数 |
| -------- | ------------------------------ | -------- |
| onTap    | 点击按钮时的回调               | -        |
| onAppear | 当前元素可见面积超过 50%时触发 | -        |

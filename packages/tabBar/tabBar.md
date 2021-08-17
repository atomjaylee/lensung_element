---
title: TabBar 标签栏
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 3
---

# TabBar 标签栏

用于创建不含内容区域的标签栏

## 引入

```json
{
  "usingComponent": {
    "ls-tab-bar": "/lensung/tabBar/tabBar"
  }
}
```

## 基础用法

```html
<ls-tab-bar schema="{{ schema }}" activeKey="{{ activeKey }}"></ls-tab-bar>
<ls-tab-bar
  schema="{{ schema }}"
  activeKey="{{ activeKey }}"
  source="{{ onSale: 2 }}"
  immediate
></ls-tab-bar>

<!-- 插槽自定义内容 -->
<ls-tab-bar schema="{{ schema }}" activeKey="{{ activeKey }}">
  <text slot="onSale">自定义在售中内容</text>
</ls-tab-bar>
```

## API

### Attributes

| 参数          | 说明                             | 类型                 | 默认值    | 备注                                               |
| ------------- | -------------------------------- | -------------------- | --------- | -------------------------------------------------- |
| activeKey     | 激活的值                         | `string` \| `number` | -         | -                                                  |
| schema        | 用于显示的结构                   | `array`              | `[]`      | `[{ label: '显示', key: '值', statistic: '埋点'}]` |
| source        | 标题数字源                       | `object`             | `{}`      | `{ onSale: 10 }`                                   |
| hidden        | 是否隐藏                         | `boolean`            | `false`   | -                                                  |
| activeColor   | 激活时的颜色                     | `string`             | `#ff5001` | -                                                  |
| unActiveColor | 非激活时的颜色                   | `string`             | `#333333` | -                                                  |
| showLine      | 是否显示底部下划线               | `boolean`            | `true`    | -                                                  |
| immediate     | 初始化是否触发一次 onChange 时间 | `boolean`            | `false`   | -                                                  |
| style         | 自定义按钮样式                   | `string`             | -         | -                                                  |
| class         | 自定义按钮样式类                 | `string`             | -         | -                                                  |

### Events

| 事件名称 | 说明                                | 回调参数                |
| -------- | ----------------------------------- | ----------------------- |
| onChange | tabBar 激活状态发生变化时的回调函数 | `activeKey`(激活的 key) |

### Slot

| name | 说明                    |
| ---- | ----------------------- |
| key  | schema 数据中对应的 key |

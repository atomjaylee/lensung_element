---
title: Check 复选框(20%)
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /
  order: 1
---

# Check 复选框

## 引入

```json
{
  "usingComponent": {
    "ls-check": "/lensung/check/check",
    "ls-check-box": "/lensung/check/checkBox/checkBox",
    "ls-check-group": "/lensung/check/checkGroup/checkGroup"
  }
}
```

## 基础用法

```html
<ls-check checked></ls-check>

<ls-check-box checked="{{ false }}"></ls-check-box>

<ls-check-group checkedList="{{ ['1','2'] }}">
  <ls-check value="1" />
  <ls-check value="2" />
  <ls-check value="3" />
  <ls-check value="4" />
  <ls-check value="5" />
</ls-check-group>

<ls-check-group checkedList="{{ checkedList }}" onChange="onCheckGroupChangeHandler">
  <ls-check-box value="1" />
  <ls-check-box value="2" />
  <ls-check-box value="3" />
  <ls-check-box value="4" />
</ls-check-group>
```

```js
data: {
  checkedList: ["2"]
},

onCheckGroupChangeHandler(checkedList) {
  this.setData({ checkedList })
}
```

## API

### Check Attributes

| 参数     | 说明              | 类型                          | 默认值   | 备注                                   |
| -------- | ----------------- | ----------------------------- | -------- | -------------------------------------- |
| checked  | 当前选中的值      | `boolean`\|`string`\|`number` | `false`  | -                                      |
| disabled | 禁用该 check      | `boolean`                     | `false`  | -                                      |
| size     | 尺寸              | `medium`\|`small`             | `medium` | -                                      |
| value    | 该 check 绑定的值 | `boolean`\|`string`\|`number` | `true`   | 当`checked === value`时，该 check 勾选 |

### Check Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| onChange | 状态变更回调函数 | -        |

### CheckBox Attributes

| 参数     | 说明              | 类型                          | 默认值   | 备注                                   |
| -------- | ----------------- | ----------------------------- | -------- | -------------------------------------- |
| checked  | 当前选中的值      | `boolean`\|`string`\|`number` | `false`  | -                                      |
| disabled | 禁用该 check      | `boolean`                     | `false`  | -                                      |
| size     | 尺寸              | `medium`\|`small`             | `medium` | -                                      |
| value    | 该 check 绑定的值 | `boolean`\|`string`\|`number` | `true`   | 当`checked === value`时，该 check 勾选 |

### CheckBox Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| onChange | 状态变更回调函数 | -        |


### CheckGroup Attributes

| 参数        | 说明               | 类型 | 默认值 | 备注                                       |
| ----------- | ------------------ | ---- | ------ | ------------------------------------------ |
| checkedList | 当前选中的值的集合 | `[]` | `[]`   | 插槽内 check 或 checkBox 组件 value 的集合 |

### CheckGroup Events

| 事件名称 | 说明             | 回调参数    |
| -------- | ---------------- | ----------- |
| onChange | 状态变更回调函数 | checkedList |

### CheckGroup Slot

| name    | 说明                                            |
| ------- | ----------------------------------------------- |
| default | 自定义内容，内容包含 check 组件或 checkBox 组件 |

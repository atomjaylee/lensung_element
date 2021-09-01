---
title: Check 复选框
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  path: /base
  order: 1
---

# Check 复选框<Badge>受控</Badge>

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

<ls-check-group id="checkGroup" checkedList="{{ checkedList }}">
  <ls-check groupId="checkGroup" value="1" />
  <ls-check groupId="checkBoxGroup" value="2" />
  <ls-check groupId="checkBoxGroup" value="3" />
  <ls-check groupId="checkBoxGroup" value="4" />
  <ls-check groupId="checkBoxGroup" value="5" />
</ls-check-group>

<ls-check-group
  id="checkBoxGroup"
  checkedList="{{ checkedList }}"
  onChange="onCheckGroupChangeHandler"
>
  <ls-check-box groupId="checkBoxGroup" value="1" />
  <ls-check-box groupId="checkBoxGroup" value="2" />
  <ls-check-box groupId="checkBoxGroup" value="3" />
  <ls-check-box groupId="checkBoxGroup" value="4" />
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

| 参数     | 说明                                   | 类型                                | 默认值   | 备注                                   |
| -------- | -------------------------------------- | ----------------------------------- | -------- | -------------------------------------- |
| checked  | 当前选中的值                           | `boolean`\|`string`\|`number`\|`{}` | `false`  | -                                      |
| disabled | 禁用该 check                           | `boolean`                           | `false`  | -                                      |
| size     | 尺寸                                   | `medium`\|`small`                   | `medium` | -                                      |
| value    | 该 check 绑定的值                      | `boolean`\|`string`\|`number`\|`{}` | `true`   | 当`checked === value`时，该 check 勾选 |
| groupId  | 关联的 checkGroup                      | `string`                            | -        | -                                      |
| identify | value 为对象时，用于判断选中的标识字段 | `string`                            | -        | 如 value 为对象，则为必填项            |
| hidden   | 是否隐藏                               | `boolean`                           | `false`  | -                                      |
| style    | 自定义按钮样式                         | `string`                            | -        | -                                      |
| class    | 自定义按钮样式类                       | `string`                            | -        | -                                      |

### Check Events

| 事件名称 | 说明             | 回调参数                            |
| -------- | ---------------- | ----------------------------------- |
| onChange | 状态变更回调函数 | `{ checked }` 该 check 绑定的 value |

### CheckBox Attributes

| 参数               | 说明                                   | 类型                                | 默认值    | 备注                                   |
| ------------------ | -------------------------------------- | ----------------------------------- | --------- | -------------------------------------- |
| checked            | 当前选中的值                           | `boolean`\|`string`\|`number`\|`{}` | `false`   | -                                      |
| disabled           | 禁用该 check                           | `boolean`                           | `false`   | -                                      |
| size               | 尺寸                                   | `medium`\|`small`                   | `medium`  | -                                      |
| value              | 该 check 绑定的值                      | `boolean`\|`string`\|`number`\|`{}` | `true`    | 当`checked === value`时，该 check 勾选 |
| groupId            | 关联的 checkGroup                      | `string`                            | -         | -                                      |
| identify           | value 为对象时，用于判断选中的标识字段 | `string`                            | -         | 如 value 为对象，则为必填项            |
| hidden             | 是否隐藏                               | `boolean`                           | `false`   | -                                      |
| checkedBackground  | 选中时背景色                           | `string`                            | `#fff7f1` | -                                      |
| checkedBorderColor | 选中时边框颜色                         | `string`                            | `#ff5001` | -                                      |
| checkedColor       | 选中时字体色                           | `string`                            | `#ff5001` | -                                      |

### CheckBox Events

| 事件名称 | 说明             | 回调参数                            |
| -------- | ---------------- | ----------------------------------- |
| onChange | 状态变更回调函数 | `{ checked }` 该 check 绑定的 value |

### CheckGroup Attributes

| 参数        | 说明                   | 类型     | 默认值     | 备注                                       |
| ----------- | ---------------------- | -------- | ---------- | ------------------------------------------ |
| checkedList | 当前选中的值的集合     | `[]`     | `[]`       | 插槽内 check 或 checkBox 组件 value 的集合 |
| id          | 该 checkGroup 的标识符 | `string` | -          | -                                          |
| max         | 最多选中数量           | `number` | `Infinity` | -                                          |

### CheckGroup Events

| 事件名称 | 说明             | 回调参数    |
| -------- | ---------------- | ----------- |
| onChange | 状态变更回调函数 | checkedList |

### CheckGroup Slot

| name    | 说明                                            |
| ------- | ----------------------------------------------- |
| default | 自定义内容，内容包含 check 组件或 checkBox 组件 |

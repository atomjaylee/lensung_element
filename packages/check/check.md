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
<ls-check"></ls-check>

<ls-check-box></ls-check-box>

<ls-check-group>
  <ls-check />
  <ls-check />
</ls-check-group>

<ls-check-group>
  <ls-check-box />
  <ls-check-box />
</ls-check-group>
```

## API

### Check Attributes

| 参数    | 说明     | 类型      | 默认值  | 备注 |
| ------- | -------- | --------- | ------- | ---- |
| checked | 是否选中 | `boolean` | `false` | -    |

### Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| onChange | 状态变更回调函数 | -        |

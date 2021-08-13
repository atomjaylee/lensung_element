---
title: ItemRow 单个商品展示
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
<!-- 单个使用 -->
<ls-item-row source="{{ source }}" tagClass="customClass" imageSize="large">
  <view class="self-title" slot="title">原上架时间: 2021-10-10</view>
  <view class="button">
    <ls-button>再次尝试</ls-button>
  </view>
</ls-item-row>

<!-- 勾选状态 -->
<ls-check-group id="selectItem" checkedList="{{ checkedData }}" onChange="onGroupChangeHandler">
  <ls-item-row
    showCheck
    checkByContent
    a:for="{{ sourceList }}"
    source="{{ item }}"
    checkGroupId="selectItem"
    checkIdentify="id"
  >
    <view>
      <text>价格: 32</text>
      <text>库存: 9999</text>
    </view>
  </ls-item-row>
</ls-check-group>
```

```js
data: {
  source: {
    num_iid: 232123123,
    title: "商品标题",
    pic_url: "http://xxxxxxxxxxxxxxxxxxxx",
    tag: "已指定",
    error: "该商品为代销产品，不可以进行定时上架"
  },

  sourceList: [
    { id: 1111111, title: "商品标题", pic_url: "http://xxxxxxxxxxxxxxxxxxxx" },
    { id: 2222222, title: "商品标题", pic_url: "http://xxxxxxxxxxxxxxxxxxxx" },
    { id: 3333333, title: "商品标题", pic_url: "http://xxxxxxxxxxxxxxxxxxxx" },
    { id: 4444444, title: "商品标题", pic_url: "http://xxxxxxxxxxxxxxxxxxxx" },
    { id: 5555555, title: "商品标题", pic_url: "http://xxxxxxxxxxxxxxxxxxxx" },
  ],
  checkedData: []
},

methods: {
  onGroupChangeHandler(checkedList) {
    this.setData({ checkedData: checkedList });
  }
}
```

## API

### Attributes

| 参数            | 说明                                               | 类型            | 默认值    | 备注                                |
| --------------- | -------------------------------------------------- | --------------- | --------- | ----------------------------------- |
| source          | 数据源                                             | `{}`            | -         | -                                   |
| showCheck       | 是否进入勾选状态                                   | `boolean`       | `false`   | -                                   |
| checkGroupId    | check 组件使用的 groupId                           | `string`        | -         | -                                   |
| checkIdentify   | 用于判定 check 组件勾选状态的标识符                | `string`        | `num_iid` | -                                   |
| checkByContent  | 是否点击内容区也触发 check 勾选变更                | `boolean`       | `false`   | -                                   |
| tagClass        | 自定义标签样式                                     | `string`        | -         | -                                   |
| fillTitleHeight | 当标题内容仅一行内容时，是否高度默认填充为两行高度 | `boolean`       | `false`   | -                                   |
| imageSize       | 图片显示尺寸                                       | `medium\|large` | `medium`  | `medium`为 168rpx; `large`为 200rpx |
| style           | 自定义样式                                         | `string`        | -         | -                                   |
| class           | 自定义样式类                                       | `string`        | -         | -                                   |

#### source

| 参数              | 说明                 | 类型               | 备注                                 |
| ----------------- | -------------------- | ------------------ | ------------------------------------ |
| num_iid           | 商品数字 id          | `number`           | 默认用作 check 组件的 identify       |
| title             | 标题                 | `string`           | -                                    |
| pic_url           | 主图片地址           | `string`           | -                                    |
| is_xianyu         | 是否为闲鱼           | `boolean`          | -                                    |
| is_xinpin         | 是否为新品           | `boolean`          | -                                    |
| type              | 商品类型             | `fixed \| auction` | fixed:一口价;auction:拍卖            |
| tag               | 图片底部角标文字内容 | `string`           | 一般用于标识已投放，已指定等         |
| error             | 错误提示信息         | `string`           | 一般为记录页面，失败时，展示失败信息 |
| [propName:string] | 其他信息             | `any`              | 其他数据                             |

### Scoped Slot

| name    | 说明                                                          |
| ------- | ------------------------------------------------------------- |
| default | 自定义标题下面的内容， 参数为`checked` - 勾选模式下是否被选中 |
| title   | 自定义标题， 参数为`checked` - 勾选模式下是否被选中           |

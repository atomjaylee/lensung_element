---
title: itemSelect 商品选择
nav:
  title: 组件
  path: /components
group:
  title: 项目组件
  path: /project
  order: 3
---

# itemSelect 商品选择

用于快捷选择宝贝

## 引入

```json
{
  "usingComponent": {
    "item-select": "/components/itemSelect/itemSelect"
  }
}
```

## 组件用法<Badge>组件单独使用</Badge>

```html
<!-- 单个使用 -->
<item-select popupContent="type,category" stateSchema="{{ stateSchema }}" />
```

```js
data: {
  stateSchema: [{ label: "仓库中", key: 'inventory', isDefault: true }]
},

onFilterBarChange(params) {
  const { topParams, customParams } = params;
  // topParams为接口参数，可直接使用， customParams为一些自定义参数，不可直接使用在top接口参数上
}

```

## 页面用法<Badge>页面跳转</Badge>

```js
toSelectItem() {
  this.$navigateTo({
      url: '/page/item-select/item-select',
      param: {
        confirmText: '选好了',
        onConfirm: (checkedList) => {
          // 获取到勾选的数据 && 并处理页面回退逻辑
        }
      },
    });
}
```

## API

### Attributes

| 参数               | 说明                         | 类型     | 默认值                                                                                                       | 备注                                                                                              |
| ------------------ | ---------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| showContent        | 配置显示内容                 | `string` | `'sort,search,popup'`                                                                                        | `sort`为默认的排序, `search`为搜索栏， `popup`为高级筛选弹窗                                      |
| popupContent       | 配置弹窗内显示内容           | `string` | `'state,type,category'`                                                                                      | `state`为宝贝类型, `type`为宝贝类型, `video`为主图视频 ，`filter`为宝贝筛选, `category`为类目选择 |
| slotContent        | 配置单个宝贝标题底部显示内容 | `string` | `'price,num,quantity'`                                                                                       | `price`为宝贝价格, `num`为宝贝库存, `quantity`为宝贝销量                                          |
| customFilterList   | 自定义添加 filter 筛选       | `[]`     | `[]`                                                                                                         | 正在实现，暂不要使用                                                                              |
| stateSchema        | 配置宝贝状态显示             | `[]`     | `[{label:'出售中',key:'sale',isDefault:true},{label:'仓库中',key:'inventory'},{label:'售完',key:'soldOut'}]` | -                                                                                                 |
| typeSchema         | 配置宝贝类型显示             | `[]`     | `[{label:'新品',key:'xinPin'},{label:'拍卖',key:'paiMai'},{label:'闲鱼',key:'xianYu'}]`                      | -                                                                                                 |
| filterSchema       | 配置宝贝筛选显示             | `[]`     | `[]`                                                                                                         | `{ label: xxx, key: xxx, isDefault: true }`                                                       |
| videoSchema        | 配置宝贝主图视频显示         | `[]`     | `[{label:'有',key:true},{label:'无',key:false}]`                                                             | `{ label: '有', key: true, isDefault: true }`                                                     |
| listFields         | 查询列表接口 fields 参数     | `string` | `'num_iid,num,title,price,pic_url,list_time,delist_time,sold_quantity,type,postage_id'`                      | -                                                                                                 |
| detailFields       | 查询详情接口 fields 参数     | `string` | `'is_xinpin,stuff_status'`                                                                                   | -                                                                                                 |
| defaultCheckedList | 默认选中的宝贝列表           | `[]`     | `[]`                                                                                                         | `用于识别是否勾选的num_iid字段必须存在`                                                           |
| confirmText        | 底部确定选择按钮的显示文本   | `string` | `'确定'`                                                                                                     | -                                                                                                 |

### Events

| 事件名称         | 说明                         | 回调参数                                   | 备注                                                                                       |
| ---------------- | ---------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| onBeforeConfirm  | 用于确认前对所选数据进行校验 | `checkedList`                              | 如校验通过 返回值为 true, 如校验失败，返回值为 string，该内容会作为提示信息使用 toast 显示 |
| onConfirm        | 确认选择的回调函数           | `checkedList`                              | -                                                                                          |
| onFormatRequest  | 格式化 top 接口调用参数      | `params`                                   | 格式化后需要将最终的配置，作为返回值，供选择宝贝组件使用                                   |
| onFilterListFunc | 格式化 top 接口返回数据      | `checkedList, { topParams, customParams }` | 格式化后需要将最终的列表数据，作为返回值，供选择宝贝显示                                   |

### Scoped Slot

| name    | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 自定义单个宝贝内容 参数为`item` - 本条商品信息 |

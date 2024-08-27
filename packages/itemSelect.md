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
<item-select popupContent="type,category" stateSchema="{{ stateSchema }}" ref="itemSelect" />
```

```js
data: {
  stateSchema: [{ label: "仓库中", key: 'inventory', isDefault: true }]
},

onFilterBarChange(params) {
  const { topParams, customParams } = params;
  // topParams为接口参数，可直接使用， customParams为一些自定义参数，不可直接使用在top接口参数上
},

// 外部控制已勾选内容
itemSelect(ref) {
  this.$itemSelect = ref;
}

handler() {
  this.$itemSelect.emitSetCheckedList([{ num_iid: 1 }])
}

```

## 页面用法<Badge>页面跳转</Badge>

```js
toSelectItem() {
  this.$navigateTo({
      url: '/page/item-select/item-select',
      param: {
        confirmText: '选好了',
        pageTitle: "页面的标题",
        onConfirm: (checkedList) => {
          // 获取到勾选的数据 && 并处理页面回退逻辑
        }
      },
    });
}
```

## API

### Attributes

| 参数                         | 说明                             | 类型      | 默认值                                                                                                       | 备注                                                                                              |
| ---------------------------- | -------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| showContent                  | 配置显示内容                     | `string`  | `'sort,search,popup'`                                                                                        | `sort`为默认的排序, `search`为搜索栏， `popup`为高级筛选弹窗                                      |
| popupContent                 | 配置弹窗内显示内容               | `string`  | `'state,type,category'`                                                                                      | `state`为宝贝状态, `type`为宝贝类型, `video`为主图视频 ，`filter`为宝贝筛选, `category`为类目选择 |
| slotContent                  | 配置单个宝贝标题底部显示内容     | `string`  | `'price,num,quantity'`                                                                                       | `price`为宝贝价格, `num`为宝贝库存, `quantity`为宝贝销量                                          |
| customFilterList             | 自定义添加 filter 筛选           | `[]`      | `[]`                                                                                                         | 添加自定义 filter 组件                                                                            |
| stateSchema                  | 配置宝贝状态显示                 | `[]`      | `[{label:'出售中',key:'sale',isDefault:true},{label:'仓库中',key:'inventory'},{label:'售完',key:'soldOut'}]` | -                                                                                                 |
| typeSchema                   | 配置宝贝类型显示                 | `[]`      | `[{label:'新品',key:'xinPin'},{label:'拍卖',key:'paiMai'},{label:'闲鱼',key:'xianYu'}]`                      | -                                                                                                 |
| filterSchema                 | 配置宝贝筛选显示                 | `[]`      | `[]`                                                                                                         | `{ label: xxx, key: xxx, isDefault: true }`                                                       |
| videoSchema                  | 配置宝贝主图视频显示             | `[]`      | `[{label:'有',key:true},{label:'无',key:false}]`                                                             | `{ label: '有', key: true, isDefault: true }`                                                     |
| listFields                   | 查询列表接口 fields 参数         | `string`  | `'num_iid,num,title,price,pic_url,list_time,delist_time,sold_quantity,type,postage_id'`                      | -                                                                                                 |
| detailFields                 | 查询详情接口 fields 参数         | `string`  | `'is_xinpin,stuff_status'`                                                                                   | -                                                                                                 |
| defaultCheckedList           | 默认选中的宝贝列表               | `[]`      | `[]`                                                                                                         | `用于识别是否勾选的num_iid字段必须存在`                                                           |
| confirmText                  | 底部确定选择按钮的显示文本       | `string`  | `'确定'`                                                                                                     | -                                                                                                 |
| pageTitle                    | 跳转后页面标题                   | `string`  | `选择宝贝`                                                                                                   | 此参数仅适用于页面用法                                                                            |
| isSingleMode                 | 是否进入单选模式                 | `boolean` | `false`                                                                                                      | -                                                                                                 |
| clearCheckedWhenFilterChange | 是否筛选器变更后清空已选中的内容 | `boolean` | `true`                                                                                                       | -                                                                                                 |
| headerTip                    | 页面顶部提示信息                 | `string`  | -                                                                                                            | -                                                                                                 |

#### customFilterList Attributes

| 参数          | 说明                                 | 类型                    | 默认值                        | 备注                                               |
| ------------- | ------------------------------------ | ----------------------- | ----------------------------- | -------------------------------------------------- |
| id            | 标识                                 | `string`                | 可以使用此标识手动关闭 filter | -                                                  |
| width         | 该过滤器的宽度                       | `string`                | `auto`                        | `auto` \| `100`\|`100rpx`                          |
| schema        | 下拉面板展示的数据                   | `Record<string, any>[]` | `[]`                          | `[{ label: '显示', key: '值', statistic: '埋点'}]` |
| labelIdentify | 标记 schema 对象中用于显示的字段名称 | `string`                | `label`                       | -                                                  |
| keyIdentify   | 标记 schema 对象中作为值的字段名称   | `string`                | `key`                         | -                                                  |
| paramAttrName | 作为参数(customParams)时的字段名     | `string`                | -                             | -                                                  |
| defaultKey    | 该自定义 filter 默认选中的值         | `string`                | -                             | 该值为 schema 配置中其中一项的 key                 |

### Events

| 事件名称         | 说明                 | 回调参数                                    | 备注                                                                                                  |
| ---------------- | -------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| onConfirm        | 确认选择的回调函数   | `checkedList, context`                      | `checkedList`为勾选的宝贝，`context`为选择宝贝组件实例                                                |
| onCheckedChange  | 勾选宝贝变更触发函数 | `checkedList`                               | `checkedList`为勾选的宝贝                                                                             |
| onFormatRequest  | 组装接口请求参数     | `params, { topParams, customParams }`       | 格式化后需要将最终的配置，作为返回值，供选择宝贝组件使用                                              |
| onFilterListFunc | 格式化接口返回数据   | `responseList, { topParams, customParams }` | 格式化后需要将最终的列表数据，作为返回值，供选择宝贝显示，自定义数据时可以参考`itemRow`组件的数据结构 |
| onCustomFetch    | 自定义数据源         | 参数为`onFormatRequest`钩子函数的返回体     | 格式化后需要将最终的列表数据，作为返回值，供选择宝贝显示，自定义数据时可以参考`itemRow`组件的数据结构 |

### Scoped Slot

| name    | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 自定义单个宝贝内容 参数为`item` - 本条商品信息 |

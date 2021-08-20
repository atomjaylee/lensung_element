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

| 参数             | 说明                                 | 类型     | 默认值                                                                                                       | 备注                                                                           |
| ---------------- | ------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| showContent      | 配置显示内容                         | `string` | `'sort,search,popup'`                                                                                        | `sort`为默认的排序, `search`为搜索栏， `popup`为高级筛选弹窗                   |
| popupContent     | 配置弹窗内显示内容                   | `string` | `'state,type,category'`                                                                                      | `state`为宝贝类型, `type`为宝贝类型, `video`为主图视频 ， `category`为类目选择 |
| customFilterList | 自定义添加 filter 筛选               | `[]`     | `[]`                                                                                                         | 正在实现，暂不要使用                                                           |
| stateSchema      | 配置宝贝状态显示                     | `[]`     | `[{label:'出售中',key:'sale',isDefault:true},{label:'仓库中',key:'inventory'},{label:'售完',key:'soldOut'}]` | -                                                                              |
| typeSchema       | 配置宝贝类型显示                     | `[]`     | `[{label:'新品',key:'xinPin'},{label:'拍卖',key:'paiMai'},{label:'闲鱼',key:'xianYu'}]`                      | -                                                                              |
| listFields       | 查询列表接口 fields 参数             | `string` | `'num_iid,num,title,price,pic_url,list_time,delist_time,sold_quantity,type,postage_id'`                      | -                                                                              |
| detailFields     | 查询详情接口 fields 参数             | `string` | `'is_xinpin,stuff_status'`                                                                                   | -                                                                              |
| disabledAttrName | 单个宝贝信息中用于控制禁止勾选的字段 | `string` | `'disabled'`                                                                                                 | -                                                                              |
| confirmText      | 底部确定选择按钮的显示文本           | `string` | `'确定'`                                                                                                     | -                                                                              |

### Events

| 事件名称         | 说明                    | 回调参数                                   |
| ---------------- | ----------------------- | ------------------------------------------ |
| onConfirm        | 确认选择的回调函数      | `checkedList`                              |
| onFormatRequest  | 格式化 top 接口调用参数 | `params`                                   |
| onFilterListFunc | 格式化 top 接口返回数据 | `checkedList, { topParams, customParams }` |

### Scoped Slot

| name    | 说明                                           |
| ------- | ---------------------------------------------- |
| default | 自定义单个宝贝内容 参数为`item` - 本条商品信息 |

---
title: FilterBar 过滤器操作栏
nav:
  title: 组件
  path: /components
group:
  title: 项目组件
  path: /project
  order: 3
---

# FilterBar 过滤器操作栏<Badge>非受控</Badge>

用于列表数据的筛选

## 引入

```json
{
  "usingComponent": {
    "filter-bar": "/components/filterBar/filterBar"
  }
}
```

## 基础用法

```html
<!-- 单个使用 -->
<filter-bar popupContent="type,category" stateSchema="{{ stateSchema }}" />
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

## API

### Attributes

| 参数             | 说明                   | 类型     | 默认值                                                                                                       | 备注                                                                                             |
| ---------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| showContent      | 配置显示内容           | `string` | `'sort,search,popup'`                                                                                        | `sort`为默认的排序, `search`为搜索栏， `popup`为高级筛选弹窗                                     |
| popupContent     | 配置弹窗内显示内容     | `string` | `'state,type,category'`                                                                                      | `state`为宝贝类型, `type`为宝贝类型, `video`为主图视频 ，`filter`为宝贝筛选 `category`为类目选择 |
| customFilterList | 自定义添加 filter 筛选 | `[]`     | `[]`                                                                                                         | 添加自定义 filter 组件                                                                           |
| stateSchema      | 配置宝贝状态显示       | `[]`     | `[{label:'出售中',key:'sale',isDefault:true},{label:'仓库中',key:'inventory'},{label:'售完',key:'soldOut'}]` | -                                                                                                |
| typeSchema       | 配置宝贝类型显示       | `[]`     | `[{label:'新品',key:'xinPin'},{label:'拍卖',key:'paiMai'},{label:'闲鱼',key:'xianYu'}]`                      | -                                                                                                |
| filterSchema     | 配置宝贝筛选显示       | `[]`     | `[]`                                                                                                         | `{ label: xxx, key: xxx, isDefault: true }`                                                      |
| videoSchema      | 配置宝贝主图视频显示   | `[]`     | `[{label:'有',key:true},{label:'无',key:false}]`                                                             | `{ label: '有', key: true, isDefault: true }`                                                    |

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

| 事件名称                | 说明                                         | 回调参数                      |
| ----------------------- | -------------------------------------------- | ----------------------------- |
| onChange                | 筛选选择器发生变更时                         | `{ topParams, customParams }` |
| onSuppressScrollControl | 筛选器出现筛选面板时，禁用页面滚动的钩子函数 | `isSuppress`                  |

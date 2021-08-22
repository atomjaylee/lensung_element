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

| 参数             | 说明                   | 类型     | 默认值                                                                                                       | 备注                                                                           |
| ---------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| showContent      | 配置显示内容           | `string` | `'sort,search,popup'`                                                                                        | `sort`为默认的排序, `search`为搜索栏， `popup`为高级筛选弹窗                   |
| popupContent     | 配置弹窗内显示内容     | `string` | `'state,type,category'`                                                                                      | `state`为宝贝类型, `type`为宝贝类型, `video`为主图视频 ， `category`为类目选择 |
| customFilterList | 自定义添加 filter 筛选 | `[]`     | `[]`                                                                                                         | 正在实现，暂不要使用                                                           |
| stateSchema      | 配置宝贝状态显示       | `[]`     | `[{label:'出售中',key:'sale',isDefault:true},{label:'仓库中',key:'inventory'},{label:'售完',key:'soldOut'}]` | -                                                                              |
| typeSchema       | 配置宝贝类型显示       | `[]`     | `[{label:'新品',key:'xinPin'},{label:'拍卖',key:'paiMai'},{label:'闲鱼',key:'xianYu'}]`                      | -                                                                              |
| filterSchema     | 配置宝贝筛选显示       | `[]`     | `[]`                                                                                                         | `{ label: xxx, key: xxx, isDefault: true }`                                    |
| videoSchema      | 配置宝贝主图视频显示   | `[]`     | `[{label:'有',key:true},{label:'无',key:false}]`                                                             | `{ label: '有', key: true, isDefault: true }`                                  |

### Events

| 事件名称 | 说明                 | 回调参数                      |
| -------- | -------------------- | ----------------------------- |
| onChange | 筛选选择器发生变更时 | `{ topParams, customParams }` |

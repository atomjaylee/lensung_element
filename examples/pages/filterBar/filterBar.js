const schemaOne = [
  { label: "测试1", key: 1 },
  { label: "测试2", key: 2 },
  { label: "测试3", key: 3 },
  { label: "测试4", key: 4 },
]

const schemaTwo = [
  { label: "选项一", key: 1 },
  { label: "选项二", key: 2 },
  { label: "选项三", key: 3 },
  { label: "选项四", key: 4 },
]

Page({
  data: {
    filterSchema: [
      { id: "filter1", width: 174, schema: schemaOne, activeKey: 1 },
      { id: "filter2", width: 174, schema: schemaTwo, activeKey: 1 },
    ]
  },
  onLoad() { },
});

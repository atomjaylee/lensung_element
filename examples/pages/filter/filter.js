Page({
  data: {
    hasOpen: false,
    activeKey: 2,
    schema: [
      { label: "选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1选项1", key: 1 },
      { label: "选项2", key: 2 },
      { label: "选项3", key: 3 },
      { label: "选项4", key: 4 },
      { label: "选项5", key: 5 },
      { label: "选项6", key: 6 },
      { label: "选项7", key: 7 },
      { label: "选项8", key: 8 },
      { label: "选项9", key: 9 },
      // { label: "选项10", key: 10 },
      // { label: "选项11", key: 11 },
      // { label: "选项12", key: 12 },
      // { label: "选项13", key: 13 },
      // { label: "选项14", key: 14 },
      // { label: "选项15", key: 15 },
      // { label: "选项16", key: 16 },
      // { label: "选项17", key: 17 },
      // { label: "选项18", key: 18 },
    ]
  },
  onLoad() { },

  onFilterVisibleChange(visible) {
    // this.setData({ hasOpen: visible });
    // my.setCanPullDown({ canPullDown: !visible });
  },

  onChange(key) {
    this.setData({ activeKey: key })
  }
});

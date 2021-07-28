Page({
  data: {
    activeKey: "onSale",
    tabSchema: [
      { label: "出售中", key: "onSale" },
      { label: "仓库中", key: "inventory" },
      { label: "已售完", key: "soldOut" },
    ],
    source: {
      onSale: 23
    }
  },
  onLoad() { },

  onChangeHandler(activeKey) {
    console.log(activeKey)
    this.setData({ activeKey })
  }
});

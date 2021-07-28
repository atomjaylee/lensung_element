Page({
  data: {
    checked: false,
  },
  onLoad() { },

  onChangeHandler(checked) {
    this.setData({ checked })
  }
});

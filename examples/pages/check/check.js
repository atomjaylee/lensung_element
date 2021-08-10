Page({
  data: {
    checked: false,
    checkedList: ["1"]
  },
  onLoad() {

  },

  onCheckChangeHandler({ checked }) {
    this.setData({ checked: checked })
  },

  onCheckListChangeHandler(checkedList) {
    this.setData({ checkedList })
  }
});

Page({
  data: {
    checked: false,
    checkedList: [],

    list: [],
    checkSchema1: [1, 2, 3, 4, 5, 6],
    checkSchema2: [11, 12, 13, 14, 15, 16, 17],

    checkBoxList: ["造物节"],
  },
  onLoad() {

  },

  onCheckChangeHandler({ checked }) {
    this.setData({ checked: checked })
  },

  onCheckListChangeHandler(checkedList) {
    this.setData({ checkedList })
  },

  onCheckBoxChangeHandler(checkedList) {
    this.setData({ checkBoxList: checkedList })
  },

  switchData() {
    if (this.data.list.length === 0 || this.data.list.length === 7) {
      this.setData({ list: this.data.checkSchema1 })
    } else if (this.data.list.length === 6) {
      this.setData({ list: this.data.checkSchema2 })
    }
  },
});

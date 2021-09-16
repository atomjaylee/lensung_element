Page({
  data: {},
  onLoad() { },

  popupBottom(ref) {
    this.$popupbottom = ref
  },

  popupTop(ref) {
    this.$popuptop = ref
  },

  popupLeft(ref) {
    this.$popupleft = ref
  },

  popupRight(ref) {
    this.$popupright = ref
  },

  openPopupHandler({ target: { dataset } }) {
    this[`$popup${dataset.position}`].show()
  },

  onVisibleChangeHandler(visible) {
    console.log(visible)
  }
});

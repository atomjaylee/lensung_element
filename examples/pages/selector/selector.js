Page({
  data: {},
  onLoad() {
    setTimeout(() => {
      this.selectMainImageHandler()
    })
  },

  selector(ref) {
    this.$selector = ref
  },
  selectMainImageHandler() {
    this.$selector.show()
  }
});

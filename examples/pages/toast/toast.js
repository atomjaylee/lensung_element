Page({
  data: {},
  onLoad() { },

  toastInstance(ref) {
    this.$toast = ref
  },

  openToastHandler() {
    console.log(111111111)
    this.$toast.show('文案内容')
  }
});

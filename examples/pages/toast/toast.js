Page({
  data: {},
  onLoad() { },

  toastInstance(ref) {
    this.$toast = ref
  },

  openToastHandler() {
    this.$toast.show({ content: "这是文案这是文案这是文案这是文案这是文案这是文案这是文案这是文案", duration: 5000000 })
  }
});

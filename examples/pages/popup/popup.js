Page({
  data: {},
  onLoad() { },

  popup(ref) {
    this.$popup = ref
  },

  async openPopupHandler() {
    await this.$popup.show();
  }
});

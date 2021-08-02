Page({
  data: {},
  onLoad() { },

  dialog(ref) {
    this.$dialog = ref
  },

  async onOpenDialogHandler() {
    const flag = await this.$dialog.confirm({
      content: "显示内容",
      confirmText: "知道了",
      // title: "测试标题",
      onBeforeClose: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(true)
          }, 0)
        })
      }
    })
  },
});

Page({
  data: {},
  onLoad() { },

  dialog(ref) {
    this.$dialog = ref
  },

  async onOpenDialogHandler() {
    this.$dialog.confirm({
      content: "显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容",
      title: "测试标题",
      onBeforeClose: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(true)
          }, 0)
        })
      }
    }).catch(() => {
      console.log("catch")
    })
  },

  sleep(ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
  },

  // 二次调用
  onDialogSecondOpenHandler() {
    this.$dialog.confirm({ content: "是否二次调用" }).then(res => {
      this.$dialog.confirm({ content: "您点击了确定" })
    })
  }
});

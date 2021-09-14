Page({
  data: {
    hiddenButton: false
  },
  onLoad() { },

  dialog(ref) {
    this.$dialog = ref
  },

  async onOpenDialogHandler() {
    this.$dialog.confirm({
      content: "显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容显示内容",
      title: "测试标题",
      maskClosable: true,
      confirmText: "去订购",
      onCancel: () => {
        console.log("11123123")
      },
      onBeforeClose: () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(true)
          }, 0)
        })
      }
    }).then(() => {
      console.log("confirm")
    })
  },

  sleep(ms) {
    return new Promise(reslove => setTimeout(reslove, ms))
  },

  // 二次调用
  onDialogSecondOpenHandler() {
    this.$dialog.confirm({
      title: "title",
      content: "是否二次调用",
      maskClosable: true,
      hiddenButtons: true,
      onConfirm: () => {
        this.$dialog.alert({ content: "您点击了确定" })
      }
    })
    // this.$dialog.confirm({ content: "是否二次调用" }).then(() => {
    //   this.$dialog.alert({ content: "点击了确定" })
    // })
  }
});

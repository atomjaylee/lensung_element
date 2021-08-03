Page({
  data: {
    schema: [
      { label: "拍照", key: "1" },
      { label: "从相册选取", key: "2", desc: "可多选" },
      { label: "使用宝贝主图", key: "3", desc: "自动拉取所有主图并替换" },
      { label: "被禁用的按钮", key: "4", desc: "此按钮被禁用" },
    ]
  },
  onLoad() { },

  actionSheet(ref) {
    this.$actionSheet = ref
  },

  async onOpenActionSheetHandler() {
    const key = await this.$actionSheet.show({
      tip: "温馨提示：图片从选中位置依次往后替换。",
      schema: this.data.schema,
      onBeforeClose: () => {
        return true
      },
      onAfterClose: () => {
        console.log("onAfterClose")
      }
    })
    console.log(key)
  }
});

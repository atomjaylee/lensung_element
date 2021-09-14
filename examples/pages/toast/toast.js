Page({
  data: {},
  onLoad() { },

  toastInstance(ref) {
    this.$toast = ref
  },

  notIconToastHandler() {
    this.$toast.show({
      content: "公共组件统一维护，文件保护，其他人有任何组件修改需求",
      duration:500000,
      maxWidth: 700
    })
    // this.$toast.show({
    //   content: "公共组件统一维护，文件保护，其他人有任何组件修改需求",
    //   duration: 2000
    // })
  },

  iconToastHandler() {
    this.$toast.show({
      icon: "success",
      content: "操作成功",
      duration: 50000
    })
  }
});

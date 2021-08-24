Page({
  data: {
    schema: [
      { label: '选项一', key: '1' },
      {
        label: '选项二',
        key: '2',
        children: [
          { label: '子选项1', key: '2-1', children: [{ label: '孙子选项', key: '2-1-1' }] },
        ],
      },
      { label: '选项三', key: '3', disabled: true },
      { label: '选项四', key: '4' },
    ],
  },
  onLoad() {
    setTimeout(() => {
      this.selectMainImageHandler();
    });
  },

  selector(ref) {
    this.$selector = ref;
  },
  selectMainImageHandler() {
    this.$selector.show();
  },

  onAfterCloseHandler() {
    console.log('afterClose');
  },

  onCancelHandler() {
    console.log('onCancel');
  },

  onConfirmHandler(checked) {
    console.log(checked);
  },

  onBeforeCloseHandler(checked) {
    console.log(checked);
    return false;
  },
});

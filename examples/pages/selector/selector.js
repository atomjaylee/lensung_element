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

    schema2: [
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
    ],

    checked: { label: '选项四', key: '4' }
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
    this.$selector.show({
      schema: this.data.schema,
      defaultChecked: { label: '选项四', key: '4' },
      onCancel: () => {
        console.log("cancel")
      }
    });
  },

  testSelector() {
    this.$selector.show({
      schema: this.data.schema2,
      onCancel: () => {
        console.log("cancel")
      }
    });
  }
});

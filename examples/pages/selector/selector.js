Page({
  data: {
    schema: [
      { label: '选项一', key: '1' },
      {
        label: '选项二',
        key: '2',
        children: [
          { label: '子选项1', key: '2-1', children: [{ label: '孙子选项', key: '2-1-1' }] },
          { label: '子选项2', key: '2-2', children: [{ label: '孙子选项', key: '2-2-1' }] },
          { label: '子选项3', key: '2-3', children: [{ label: '孙子选项', key: '2-3-1' }] },
        ],
      },
      { label: '选项三', key: '3', disabled: true },
      { label: '选项四', key: '4' },
      { label: '孙子选项', key: '5' }
    ],

    schema2: [
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' },
      { label: '测试单个实例', key: '4' }
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
      title: "测试标题",
      schema: this.data.schema,
      defaultCheckedList: this.$checkedList || [],
      parentSuppressCheck: true,
      max: this.$checkedList ? 10: Infinity,
      extraButtons: [
        { label: "新建模板", callback: (checkedList) => {console.log(checkedList)}}
      ],
      onConfirm: (checkedList) => {
        this.$checkedList = checkedList
      }
    });
  },

  testSelector() {
    this.$selector.show({
      title: "测试标题",
      schema: this.data.schema2,
      onCancel: () => {
        console.log("cancel")
      }
    });
  }
});

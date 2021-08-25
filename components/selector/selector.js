const defaultAttrs = {
  title: '',
  confirmText: '确定',
  schema: [],
  defaultChecked: undefined,
  hiddenCloseIcon: false,
  maskClosable: true,
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled',
  onBeforeClose: () => true,
  onAfterClose: () => {},
  onCancel: () => {},
  onConfirm: () => {}
};
Component({
  data: { ...defaultAttrs,
    checkedList: []
  },
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show(options) {
      this.$popup.show();
      const {
        defaultChecked,
        ...customAttrs
      } = options;
      this.setData({
        checkedList: defaultChecked ? [defaultChecked] : [],
        ...customAttrs
      });
    },

    close() {
      this.$popup.close();
    },

    async onConfirmHandler() {
      const isPass = await this.data.onBeforeClose(this.data.checkedList[0]);

      if (isPass) {
        this.close();
        this.data.onConfirm(this.data.checkedList[0]);
      }
    },

    // 点击关闭时模拟点击遮罩层关闭，从而触发onCancel方法
    mockMaskClose() {
      this.$popup.onMaskTapHandler({
        target: {
          targetDataset: {
            nodeName: 'mask'
          }
        }
      });
    },

    // 代理onAfterClose事件
    proxyAfterClose() {
      this.data.onAfterClose();
    },

    // 代理onCancel事件
    proxyCancel() {
      this.data.onCancel();
    },

    // checkGroup修改
    onGroupCheckChangeHandler(checkedList) {
      this.setData({
        checkedList
      });
    }

  }
});
export {};
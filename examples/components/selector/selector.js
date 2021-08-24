const defaultProps = {
  title: '',
  confirmText: '确定',
  schema: [],
  hiddenCloseIcon: false,
  maskClosable: true,
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled',
  onBeforeClose: () => true
};
Component({
  props: defaultProps,
  data: {
    checkedList: []
  },
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show() {
      this.$popup.show();
    },

    close() {
      this.$popup.close();
    },

    async onConfirmHandler() {
      const isPass = await this.props.onBeforeClose(this.data.checkedList[0]);

      if (isPass) {
        this.close();
        this.props.onConfirm && this.props.onConfirm(this.data.checkedList[0]);
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
      this.props.onAfterClose && this.props.onAfterClose();
    },

    // 代理onCancel事件
    proxyCancel() {
      this.props.onCancel && this.props.onCancel();
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
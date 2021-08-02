const defaultProps = {
  zIndex: 999,
  maxLine: 3,
  contentJustify: 'start',
  contentAlign: 'start',
  confirmText: '确定',
  cancelText: '取消',
  closable: false,
  maskClosable: false
};
Component({
  props: defaultProps,
  data: {
    visible: false,
    contentVisible: false,
    isAlert: false
  },
  methods: {
    onAppearHandler() {
      this.setData({
        contentVisible: true
      });
    },

    confirm(options) {
      return new Promise(resolve => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options,
          visible: true,
          isAlert: false
        });
      });
    },

    alert(options) {
      return new Promise(resolve => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options,
          visible: true,
          isAlert: true
        });
      });
    },

    close() {
      this.__promise_resolve__ = undefined;
      this.setData({ ...defaultProps,
        ...this.props,
        contentVisible: false
      });
    },

    onTransitionEndHandler() {
      if (this.data.visible && this.data.contentVisible) return;
      this.setData({
        visible: false
      });
      this.data.onAfterClose && this.data.onAfterClose();
    },

    async onConfirmHandler() {
      const isPass = this.data.onBeforeClose ? await this.data.onBeforeClose() : true;
      console.log(isPass);

      if (isPass) {
        this.__promise_resolve__(true);

        this.data.onConfirm && this.data.onConfirm();
        this.close();
      }
    },

    onCancelHandler() {
      this.__promise_resolve__(false);

      this.data.onCancel && this.data.onCancel();
      this.close();
    },

    onMaskTapHandler({
      target: {
        targetDataset
      }
    }) {
      const nodeName = targetDataset.nodeName;

      if (nodeName === 'mask' && this.data.maskClosable) {
        this.onCancelHandler();
      }
    }

  }
});
export {};
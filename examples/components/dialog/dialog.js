import { getComponentAttr } from '../_utils/tool';
const defaultProps = {
  zIndex: 999,
  maxLine: 3,
  contentJustify: 'start',
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
          isAlert: true,
          contentJustify: options.contentJustify || 'center'
        });
      });
    },

    close() {
      this.__promise_resolve__ = undefined;
      this.setData({ ...defaultProps,
        contentVisible: false
      });
    },

    onTransitionEndHandler() {
      if (this.data.visible && this.data.contentVisible) return;
      this.setData({
        visible: false
      });
      const onAfterClose = getComponentAttr(this, 'onAfterClose');
      onAfterClose && onAfterClose();
    },

    async onConfirmHandler() {
      const onBeforeClose = getComponentAttr(this, 'onBeforeClose');
      const isPass = onBeforeClose ? await onBeforeClose() : true;

      if (isPass) {
        this.__promise_resolve__(true);

        getComponentAttr(this, 'onConfirm') && getComponentAttr(this, 'onConfirm')();
        this.close();
      }
    },

    onCancelHandler() {
      this.__promise_resolve__(false);

      getComponentAttr(this, 'onCancel') && getComponentAttr(this, 'onCancel')();
      this.close();
    },

    onMaskTapHandler({
      target: {
        targetDataset
      }
    }) {
      const nodeName = targetDataset.nodeName;

      if (nodeName === 'mask' && getComponentAttr(this, 'maskClosable')) {
        this.onCancelHandler();
      }
    }

  }
});
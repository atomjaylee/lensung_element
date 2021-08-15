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

    sleep(ms = 0) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async confirm(options) {
      while (this.__instance_closed__) {
        await this.__instance_closed__;
        await this.sleep(); // NOTE: 避免上一步setData和本次setData时间太近，导致visible失效
      }

      this.__instance_closed__ = new Promise(resolve => this.$instanceClose = resolve);
      return new Promise((resolve, reject) => {
        this.__promise_resolve__ = resolve;
        this.__promise_reject__ = reject;
        this.setData({ ...options,
          visible: true,
          isAlert: false
        });
      });
    },

    async alert(options) {
      while (this.__instance_closed__) await this.__instance_closed__;

      this.__instance_closed__ = new Promise(resolve => this.$instanceClose = resolve);
      return new Promise((resolve, reject) => {
        this.__promise_resolve__ = resolve;
        this.__promise_reject__ = reject;
        this.setData({ ...options,
          visible: true,
          isAlert: true,
          contentJustify: options.contentJustify || 'center'
        });
      });
    },

    close() {
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
      this.$instanceClose();
      this.__promise_resolve__ = undefined;
      this.__promise_reject__ = undefined;
      this.__instance_closed__ = undefined;
    },

    async onConfirmHandler() {
      const onBeforeClose = getComponentAttr(this, 'onBeforeClose');
      const isPass = onBeforeClose ? await onBeforeClose() : true;

      if (isPass) {
        this.__promise_resolve__();

        getComponentAttr(this, 'onConfirm') && getComponentAttr(this, 'onConfirm')();
        this.close();
      }
    },

    onCancelHandler() {
      this.__promise_reject__();

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
import { getComponentAttr, deepClone } from '../_utils/tool';
const defaultProps = {
  zIndex: 999,
  maxLine: 3,
  contentJustify: 'start',
  confirmText: '确定',
  cancelText: '取消',
  closable: false,
  maskClosable: false,
  hiddenButtons: false
};
const defaultData = {
  visible: false,
  contentVisible: false,
  isAlert: false
};
Component({
  props: defaultProps,
  data: defaultData,
  methods: {
    onAppearHandler() {
      this.setData({
        contentVisible: true
      });
    },

    async confirm(options) {
      while (this.__instance_closed__) await this.__instance_closed__;

      this.__instance_closed__ = new Promise(resolve => this.$instanceClose = resolve);
      return new Promise(resolve => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options,
          visible: true,
          isAlert: false
        });
      });
    },

    async alert(options) {
      while (this.__instance_closed__) await this.__instance_closed__;

      this.__instance_closed__ = new Promise(resolve => this.$instanceClose = resolve);
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
      this.setData({
        contentVisible: false
      });
    },

    onTransitionEndHandler() {
      // 仅处理组件消失的处理逻辑
      if (this.data.visible && this.data.contentVisible === false) {
        const _data = deepClone(this.data);

        Object.keys(_data).forEach(x => _data[x] = null);
        this.setData({ ..._data,
          ...defaultProps,
          ...defaultData
        }, () => {
          this.$instanceClose();
          this.__promise_resolve__ = undefined;
          this.__instance_closed__ = undefined;
        });
        const onAfterClose = getComponentAttr(this, 'onAfterClose');
        onAfterClose && onAfterClose();
      }
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
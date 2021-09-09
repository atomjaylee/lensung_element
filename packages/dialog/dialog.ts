import { justifyType } from '../flex/flex';
import { getComponentAttr, deepClone } from '../_utils/tool';

interface BaseDialogProps {
  title?: string;
  content?: string;
  icon?: string;
  zIndex?: number;
  confirmText?: string;
  cancelText?: string;
  onBeforeClose?: () => boolean;
  onAfterClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
  style?: string;
  contentClass?: string;
  contentJustify?: justifyType;
  maxLine?: number;
  closable?: boolean;
  maskClosable?: boolean;
  hiddenButtons?: boolean;
  [propName: string]: any;
}

const defaultProps: BaseDialogProps = {
  zIndex: 999,
  maxLine: 3,
  contentJustify: 'start',
  confirmText: '确定',
  cancelText: '取消',
  closable: false,
  maskClosable: false,
  hiddenButtons: false,
};

const defaultData: BaseDialogProps = {
  visible: false,
  contentVisible: false,
  isAlert: false,
};

Component({
  props: defaultProps,

  data: defaultData,

  methods: {
    onAppearHandler() {
      this.setData({ contentVisible: true });
    },

    async confirm(options: BaseDialogProps) {
      while (this.__instance_closed__) await this.__instance_closed__;
      this.__instance_closed__ = new Promise((resolve) => (this.$instanceClose = resolve));
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options, visible: true, isAlert: false });
      });
    },

    async alert(options: BaseDialogProps) {
      while (this.__instance_closed__) await this.__instance_closed__;
      this.__instance_closed__ = new Promise((resolve) => (this.$instanceClose = resolve));
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({
          ...options,
          visible: true,
          isAlert: true,
          contentJustify: options.contentJustify || 'center',
        });
      });
    },

    close() {
      this.setData({ contentVisible: false });
    },

    onTransitionEndHandler() {
      // 仅处理组件消失的处理逻辑
      if (this.data.visible && this.data.contentVisible === false) {
        const _data = deepClone(this.data);
        Object.keys(_data).forEach((x) => (_data[x] = null));
        this.setData(
          {
            ..._data,
            ...defaultData
          },
          () => {
            this.$instanceClose();
            this.__promise_resolve__ = undefined;
            this.__instance_closed__ = undefined;
          }
        );
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

    onMaskTapHandler({ target: { targetDataset } }) {
      const nodeName = targetDataset.nodeName;
      if (nodeName === 'mask' && getComponentAttr(this, 'maskClosable')) {
        this.onCancelHandler();
      }
    },
  },
});

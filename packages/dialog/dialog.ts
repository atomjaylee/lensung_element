import { justifyType, directionType, alignType } from '../flex/flex';
import { getMultiComponentAttr } from '../_utils/tool';

interface BaseDialogProps {
  title?: string;
  content?: string;
  subContent?: string;
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
  contentAlign?: alignType;
  contentDirection?: directionType;
  maxLine?: number;
  closable?: boolean;
  maskClosable?: boolean;
  hiddenButtons?: boolean;
  statisticCancel?: string;
  statisticConfirm?: string;
  [propName: string]: any;
}

const defaultProps: BaseDialogProps = {
  zIndex: 999,
  maxLine: 3,
  contentJustify: 'start',
  contentDirection: 'row',
  contentAlign: 'center',
  confirmText: '确定',
  cancelText: '取消',
  closable: false,
  maskClosable: false,
  hiddenButtons: false,
};

const defaultData = {
  visible: false,
  contentVisible: false,
  isAlert: false,
  propData: {}, // 命令行模式props传递存储，方便重置
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
        this.setData({ propData: options, visible: true, isAlert: false });
      });
    },

    async alert(options: BaseDialogProps) {
      while (this.__instance_closed__) await this.__instance_closed__;
      this.__instance_closed__ = new Promise((resolve) => (this.$instanceClose = resolve));
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({
          propData: {
            ...options,
            contentJustify: options.contentJustify || 'center',
          },
          visible: true,
          isAlert: true,
        });
      });
    },

    close() {
      this.setData({ contentVisible: false });
    },

    onTransitionEndHandler() {
      // 仅处理组件消失的处理逻辑
      if (this.data.visible && this.data.contentVisible === false) {
        const onAfterClose = getMultiComponentAttr(this, 'onAfterClose');
        onAfterClose && onAfterClose();

        this.setData(
          {
            ...defaultData,
          },
          () => {
            this.$instanceClose();
            this.__promise_resolve__ = undefined;
            this.__instance_closed__ = undefined;
          }
        );
      }
    },

    async onConfirmHandler() {
      const onBeforeClose = getMultiComponentAttr(this, 'onBeforeClose');
      const isPass = onBeforeClose ? await onBeforeClose() : true;
      if (isPass) {
        this.__promise_resolve__();
        getMultiComponentAttr(this, 'onConfirm') && getMultiComponentAttr(this, 'onConfirm')();
        this.close();
      }
    },

    onCancelHandler() {
      getMultiComponentAttr(this, 'onCancel') && getMultiComponentAttr(this, 'onCancel')();
      this.close();
    },

    onMaskTapHandler({ target: { targetDataset } }) {
      const nodeName = targetDataset.nodeName;
      if (nodeName === 'mask' && getMultiComponentAttr(this, 'maskClosable')) {
        this.onCancelHandler();
      }
    },
  },
});

import { getComponentAttr } from '../_utils/tool';

export type positionType = 'top' | 'right' | 'bottom' | 'left';

export interface BasePopupProps {
  maskClosable?: boolean;
  position?: positionType;
  zIndex?: number;
  style?: string;
  title?: string;
  suppressRadius?: boolean;
  showTitleBorder?: boolean;
  hiddenCloseIcon?: boolean;
  statisticCancel?: string;
  disableScroll?: boolean;
  onAfterClose?: () => void;
  onCancel?: () => void;
  onVisibleChange?: (visible: boolean) => void;
}

const defaultProps: BasePopupProps = {
  maskClosable: false,
  position: 'bottom',
  zIndex: 999,
  disableScroll: false,
  suppressRadius: false,
  hiddenCloseIcon: false,
};

Component({
  props: defaultProps,

  data: {
    visible: false,
    contentVisible: false,
  },

  methods: {
    onAppearHandler() {
      this.setData({ contentVisible: true });
    },

    onTransitionEndHandler() {
      if (this.data.visible && this.data.contentVisible) {
        this.__promise_resolve__();
        return;
      }
      this.setData({ visible: false }, () => {
        this.$instanceClose();
        this.__promise_resolve__ = undefined;
        this.__instance_closed__ = undefined;
      });
      getComponentAttr(this, 'onVisibleChange') && getComponentAttr(this, 'onVisibleChange')(false);
      getComponentAttr(this, 'onAfterClose') && getComponentAttr(this, 'onAfterClose')();
    },

    async show(options: BasePopupProps) {
      while (this.__instance_closed__) await this.__instance_closed__;
      this.__instance_closed__ = new Promise((resolve) => (this.$instanceClose = resolve));
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({ visible: true, ...options });
        getComponentAttr(this, 'onVisibleChange') &&
          getComponentAttr(this, 'onVisibleChange')(true);
      });
    },

    close() {
      this.setData({ contentVisible: false });
    },

    cancelHandler() {
      getComponentAttr(this, 'onCancel') && getComponentAttr(this, 'onCancel')();
      this.close();
    },

    onMaskTapHandler({ target: { targetDataset } }) {
      const nodeName = targetDataset.nodeName;
      if (nodeName === 'mask' && getComponentAttr(this, 'maskClosable')) {
        this.cancelHandler();
      }
    },
  },
});

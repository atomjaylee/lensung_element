import { getComponentAttr } from '../_utils/tool';

export type positionType = 'top' | 'right' | 'bottom' | 'left';

export interface BasePopupProps {
  maskClosable?: boolean;
  position?: positionType;
  zIndex?: number;
  title?: string;
  suppressRadius?: boolean;
  hiddenCloseIcon?: boolean;
  statisticCancel?: string;
  onAfterClose?: () => void;
  onCancel?: () => void;
}

const defaultProps: BasePopupProps = {
  maskClosable: false,
  position: 'bottom',
  zIndex: 999,
  title: undefined,
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
      this.setData({ visible: false });
      getComponentAttr(this, 'onAfterClose') && getComponentAttr(this, 'onAfterClose')();
    },

    show(options: BasePopupProps) {
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({ visible: true, ...options });
      });
    },

    close() {
      this.setData({ contentVisible: false });
      this.__promise_resolve__ = undefined;
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

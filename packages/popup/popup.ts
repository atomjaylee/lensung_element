import { getComponentAttr } from '../_utils/tool';

export type positionType = 'top' | 'right' | 'bottom' | 'left';

export interface BasePopupProps {
  maskClosable?: boolean;
  position?: positionType;
  zIndex?: number;
  statisticCancel?: string;
  onAfterClose?: () => void;
}

const defaultProps: BasePopupProps = {
  maskClosable: false,
  position: 'bottom',
  zIndex: 999,
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
        this.setData({ ...options, visible: true });
      });
    },

    close() {
      this.setData({ contentVisible: false, ...defaultProps });
      this.__promise_resolve__ = undefined;
    },

    onMaskTapHandler({ target: { targetDataset } }) {
      const nodeName = targetDataset.nodeName;
      if (nodeName === 'mask' && getComponentAttr(this, 'maskClosable')) {
        this.close();
      }
    },
  },
});

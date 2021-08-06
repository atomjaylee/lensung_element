import { getElementRectById } from '../_utils/tool';

interface BaseDropPanelProps {
  maskClosable?: boolean;
  coverHeader?: boolean;
  zIndex?: number;
}

const defaultProps: BaseDropPanelProps = {
  maskClosable: true,
  coverHeader: false,
  zIndex: 2
};

Component({
  props: defaultProps,

  data: {
    visible: false,
    bodyVisible: false,
    panelBodyPositionTop: 0,
  },

  methods: {
    onAppearHandler() {
      this.setData({ bodyVisible: true });
    },

    onTransitionEndHandler() {
      if (this.data.visible && this.data.bodyVisible) return;
      this.setData({ visible: false });
    },

    onHeaderClickHandler() {
      this.data.visible ? this.close() : this.show();
    },

    async show() {
      const { windowWidth } = my.getSystemInfoSync();
      const convertUnit = 750 / windowWidth;
      const { top, height } = await getElementRectById('dropPanelHeader');
      this.setData({ panelBodyPositionTop: (top + height) * convertUnit, visible: true });
    },

    close() {
      this.setData({ ...defaultProps, bodyVisible: false });
    },

    onMaskTapHandler({ target: { targetDataset } }) {
      const nodeName = targetDataset.nodeName;
      if (nodeName === 'mask' && this.props.maskClosable) {
        this.close();
      }
    },
  },
});

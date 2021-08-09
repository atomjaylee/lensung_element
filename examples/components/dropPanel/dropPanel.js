import { getElementRectById } from '../_utils/tool';
const GLOBAL_NAME = '__dropPanelInstanceMap__';
const dropPanelInstanceMap = getApp()[GLOBAL_NAME] || new Map();
const defaultProps = {
  maskClosable: true,
  coverHeader: false,
  zIndex: 2
};
Component({
  props: defaultProps,
  data: {
    visible: false,
    bodyVisible: false,
    panelBodyPositionTop: 0
  },
  methods: {
    onAppearHandler() {
      this.setData({
        bodyVisible: true
      });
    },

    onTransitionEndHandler() {
      if (this.data.visible && this.data.bodyVisible) return;
      this.setData({
        visible: false
      });
    },

    onHeaderClickHandler() {
      this.data.visible ? this.close() : this.show();
    },

    async show() {
      const {
        windowWidth
      } = my.getSystemInfoSync();
      const convertUnit = 750 / windowWidth;
      const {
        top,
        height
      } = await getElementRectById('dropPanelHeader');
      this.setData({
        panelBodyPositionTop: (top + height) * convertUnit,
        visible: true
      });
      dropPanelInstanceMap.forEach(instance => instance.close());

      if (this.props.id) {
        dropPanelInstanceMap.set(this.props.id, this);
      }

      Object.defineProperty(getApp(), GLOBAL_NAME, {
        get: () => dropPanelInstanceMap
      });
    },

    close() {
      this.setData({ ...defaultProps,
        bodyVisible: false
      });
    },

    onMaskTapHandler({
      target: {
        targetDataset
      }
    }) {
      const nodeName = targetDataset.nodeName;

      if (nodeName === 'mask' && this.props.maskClosable) {
        this.close();
      }
    }

  }
});
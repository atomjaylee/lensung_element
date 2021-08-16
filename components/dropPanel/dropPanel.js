import { getElementRectById } from '../_utils/tool';
const SCOPED_NAME = '__dropPanelInstanceMap__';
const defaultProps = {
  maskClosable: true,
  bodyClosable: false,
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

    onContentClickHandler() {
      this.props.bodyClosable && this.close();
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
      const distanceTop = this.props.coverHeader ? top * convertUnit : (top + height) * convertUnit;
      this.setData({
        panelBodyPositionTop: distanceTop,
        visible: true
      });
      const dropPanelInstanceMap = this.$page[SCOPED_NAME] || new Map();
      dropPanelInstanceMap.forEach(instance => instance.close());

      if (this.props.id) {
        dropPanelInstanceMap.set(this.props.id, this);
      }

      Object.defineProperty(this.$page, SCOPED_NAME, {
        get: () => dropPanelInstanceMap,
        configurable: true
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
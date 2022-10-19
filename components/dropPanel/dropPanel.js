import { getElementRectById } from '../_utils/tool';
const SCOPED_NAME = '__dropPanelInstanceMap__';
const defaultProps = {
  maskClosable: true,
  bodyClosable: false,
  coverHeader: false
};
Component({
  props: defaultProps,
  data: {
    visible: false,
    bodyVisible: false,
    transparentHeight: 0
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
      this.props.onVisibleChange && this.props.onVisibleChange(false);
    },
    async onHeaderClickHandler() {
      if (this.data.visible) {
        this.close();
      } else {
        this.props.onBeforeOpen && (await this.props.onBeforeOpen());
        this.show();
      }
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
        transparentHeight: Math.ceil(distanceTop),
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
      this.props.onVisibleChange && this.props.onVisibleChange(true);
    },
    close() {
      this.setData({
        ...defaultProps,
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
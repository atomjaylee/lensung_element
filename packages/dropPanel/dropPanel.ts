import { getElementRectById } from '../_utils/tool';

const GLOBAL_NAME = '__dropPanelInstanceMap__';
const dropPanelInstanceMap = (getApp() as any)[GLOBAL_NAME] || new Map();

interface BaseDropPanelProps {
  id?: string;
  maskClosable?: boolean;
  bodyClosable?: boolean;
  coverHeader?: boolean;
  zIndex?: number;
}

const defaultProps: BaseDropPanelProps = {
  maskClosable: true,
  bodyClosable: false,
  coverHeader: false,
  zIndex: 2,
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

    onContentClickHandler() {
      this.props.bodyClosable && this.close();
    },

    async show() {
      const { windowWidth } = my.getSystemInfoSync();
      const convertUnit = 750 / windowWidth;
      const { top, height } = await getElementRectById('dropPanelHeader');
      const distanceTop = this.props.coverHeader ? top * convertUnit : (top + height) * convertUnit;
      this.setData({ panelBodyPositionTop: distanceTop, visible: true });

      dropPanelInstanceMap.forEach((instance) => instance.close());

      if (this.props.id) {
        dropPanelInstanceMap.set(this.props.id, this);
      }

      Object.defineProperty(getApp(), GLOBAL_NAME, {
        get: () => dropPanelInstanceMap,
      });
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

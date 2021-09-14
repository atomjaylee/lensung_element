import { getMultiComponentAttr } from '../_utils/tool';
const defaultProps = {
  content: '',
  duration: 2000,
  suppressOperate: false,
  position: 'center',
  maxLine: 3,
  maxWidth: 400,
  zIndex: 999
};
const defaultData = {
  show: false,
  innerVisible: false,
  propData: {}
};
Component({
  props: defaultProps,
  data: defaultData,
  methods: {
    onAppearHandler() {
      this.setData({
        innerVisible: true
      });
    },

    show(options) {
      const userOptions = typeof options === 'string' ? {
        content: options
      } : options;

      if (this._timeInstance) {
        clearTimeout(this._timeInstance);
        this.resetInitialStatus();
      }

      this.setData({
        show: true,
        propData: userOptions
      });
      this._timeInstance = setTimeout(() => {
        this.setData({
          innerVisible: false
        });
      }, getMultiComponentAttr(this, 'duration'));
    },

    onTransitionEndHandler() {
      if (this.data.show && this.data.innerVisible === false) {
        const onClosed = getMultiComponentAttr(this, 'onClosed');
        onClosed && onClosed();
        this.resetInitialStatus();
      }
    },

    // 重置为初始化状态
    resetInitialStatus() {
      this.setData({
        show: false,
        ...defaultProps
      });
      this._timeInstance = null;
    }

  }
});
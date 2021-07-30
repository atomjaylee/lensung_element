const defaultProps = {
  content: '',
  icon: '',
  duration: 2000,
  suppressOperate: false,
  position: 'center',
  maxLine: 3,
  maxWidth: 560,
  zIndex: 999
};
Component({
  props: defaultProps,

  onInit() {
    this.setData({ ...this.props
    });
  },

  data: {
    show: false,
    innerVisible: false
  },
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
        ...userOptions
      });
      this._timeInstance = setTimeout(() => {
        this.setData({
          innerVisible: false
        });
      }, this.data.duration);
    },

    onTransitionEndHandler() {
      if (this.data.show && this.data.innerVisible) return;
      this.props.onClosed && this.props.onClosed();
      this.resetInitialStatus();
    },

    // 重置为初始化状态
    resetInitialStatus() {
      this.setData({
        show: false,
        ...defaultProps,
        ...this.props
      });
      this._timeInstance = null;
    }

  }
});
export {};
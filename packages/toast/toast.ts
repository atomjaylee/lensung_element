export interface BaseToastOptions {
  content?: string;
  icon?: string;
  duration?: number;
  suppressOperate?: Boolean;
  position?: 'top' | 'center' | 'bottom';
  zIndex?: number;
  maxLine?: number;
  maxWidth?: number;
  className?: string;
  style?: string;
  onClosed?: () => void;
  [propName: string]: any;
}

const defaultProps: BaseToastOptions = {
  content: '',
  icon: '',
  duration: 2000,
  suppressOperate: false,
  position: 'center',
  maxLine: 3,
  maxWidth: 560,
  zIndex: 999,
};

Component({
  props: defaultProps,

  onInit() {
    this.setData({ ...this.props });
  },

  data: {
    show: false,
    innerVisible: false,
  } as BaseToastOptions,

  methods: {
    onAppearHandler() {
      this.setData({ innerVisible: true });
    },

    show(options: BaseToastOptions | string) {
      const userOptions = typeof options === 'string' ? { content: options } : options;
      if (this._timeInstance) {
        clearTimeout(this._timeInstance);
        this.resetInitialStatus();
      }
      this.setData({ show: true, ...userOptions });
      this._timeInstance = setTimeout(() => {
        this.setData({ innerVisible: false });
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
        ...this.props,
      });
      this._timeInstance = null;
    },
  },
});

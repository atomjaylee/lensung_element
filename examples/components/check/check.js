import fmtClass from '../_utils/fmtClass';
const defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium'
};
Component({
  props: defaultProps,
  data: {
    baseClass: ''
  },

  onInit() {
    this.setData({
      baseClass: this.wrapClasses()
    });
    console.log(this);
  },

  methods: {
    wrapClasses() {
      const {
        size,
        disabled
      } = this.props;
      const prefixCls = 'ls_check';
      return fmtClass({
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled
      });
    }

  }
});
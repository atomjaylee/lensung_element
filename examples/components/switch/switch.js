import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';
const defaultProps = {
  checked: false,
  size: 'medium',
  disabled: false,
  checkedColor: '#1dc11d',
  checkedText: undefined,
  checkedValue: true,
  unCheckedColor: '#e9e9ea',
  unCheckedText: undefined,
  unCheckedValue: false,
  hidden: false,
  className: '',
  style: ''
};
Component({
  props: defaultProps,
  data: {
    baseClasses: ''
  },
  onInit() {
    this.setData({
      baseClasses: this.wrapClasses()
    });
  },
  methods: {
    wrapClasses() {
      const {
        size,
        disabled
      } = this.props;
      const prefixCls = 'ls_switch';
      return fmtClass({
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled
      });
    },
    onChangeHandler(evt) {
      const event = fmtEvent(this.props, {
        ...evt,
        checked: !this.props.checked
      });
      this.props.onChange && this.props.onChange(event);
    }
  }
});
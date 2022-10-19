import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';
const defaultProps = {
  type: 'default',
  size: 'medium',
  disabled: false,
  block: false,
  icon: undefined,
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
        type,
        size,
        disabled,
        block
      } = this.props;
      const prefixCls = 'ls_button';
      return fmtClass({
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-inline`]: !block,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled
      });
    },
    onClickHandler(evt) {
      if (this.props.disabled) return;
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    }
  }
});
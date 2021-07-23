import fmtEvent from "../_utils/fmtEvent";
import fmtClass from "../_utils/fmtClass";
const defaultProps = {
  type: "default",
  size: "medium",
  disabled: false,
  icon: undefined,
  className: undefined,
  style: undefined
};
Component({
  props: defaultProps,
  data: {
    baseClasses: ""
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
        disabled
      } = this.props;
      const prefixCls = "ls-component_button";
      return fmtClass({
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-${size}`]: size
      });
    },

    onClickHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    }

  }
});
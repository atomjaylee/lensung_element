import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';
const defaultProps = {
  type: 'flex',
  direction: 'row',
  wrap: 'nowrap',
  justify: 'start',
  align: 'center',
  alignContent: 'start',
  hidden: false
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
  },

  methods: {
    wrapClasses() {
      const {
        type,
        direction,
        wrap,
        justify,
        align,
        alignContent
      } = this.props;
      const prefixCls = 'ls_flex';
      return fmtClass({
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-direction_${direction}`]: direction,
        [`${prefixCls}-wrap_${wrap}`]: wrap,
        [`${prefixCls}-justify_${justify}`]: justify,
        [`${prefixCls}-align_${align}`]: align,
        [`${prefixCls}-alignContent_${alignContent}`]: alignContent
      });
    },

    onTapHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    },

    onCatchTapHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.catchTap && this.props.catchTap(event);
    }

  }
});
import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';

export type ButtonTypes = 'default' | 'primary' | 'ghost' | 'info' | 'warn';
export type ButtonSizeType = 'mini' | 'small' | 'medium' | 'large';

export interface BaseButtonProps {
  type: ButtonTypes;
  size: ButtonSizeType;
  disabled: boolean;
  block: boolean;
  icon?: string;
  hidden?: boolean;
  className?: string;
  style?: string;
  onTap?: (e: tinyapp.IBaseEvent) => void;
}

const defaultProps: BaseButtonProps = {
  type: 'default',
  size: 'medium',
  disabled: false,
  block: false,
  icon: undefined,
  hidden: false,
  className: '',
  style: '',
};

Component({
  props: defaultProps,
  data: {
    baseClasses: '',
  },
  onInit() {
    this.setData({ baseClasses: this.wrapClasses() });
  },
  methods: {
    wrapClasses() {
      const { type, size, disabled, block } = this.props;

      const prefixCls = 'ls_button';
      return fmtClass({
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-inline`]: !block,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled,
      });
    },

    onClickHandler(evt) {
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    },
  },
});

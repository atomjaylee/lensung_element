import fmtClass from '../_utils/fmtClass';
import fmtEvent from '../_utils/fmtEvent';

export type SwitchSizeType = 'small' | 'medium' | 'large';

export interface BaseSwitchProps {
  checked: boolean | string | number;
  size: SwitchSizeType;
  disabled: boolean;
  checkedColor?: string;
  checkedText?: string;
  checkedValue?: boolean | string | number;
  unCheckedColor?: string;
  unCheckedText?: string;
  className?: string;
  hidden?: boolean;
  style?: string;
  onChange?: (e: tinyapp.IBaseEvent) => void;
}

const defaultProps: BaseSwitchProps = {
  checked: false,
  size: 'medium',
  disabled: false,
  checkedColor: '#1dc11d',
  checkedText: undefined,
  checkedValue: true,
  unCheckedColor: '#e9e9ea',
  unCheckedText: undefined,
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
      const { size, disabled } = this.props;
      const prefixCls = 'ls_switch';
      return fmtClass({
        [`${prefixCls}-${size}`]: size,
        [`${prefixCls}-disabled`]: disabled,
      });
    },

    onChangeHandler(evt) {
      const event = fmtEvent(this.props, { ...evt, checked: !this.props.checked });
      this.props.onChange && this.props.onChange(event);
    },
  },
});

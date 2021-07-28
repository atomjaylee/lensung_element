import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';

export type SwitchSizeType = 'small' | 'medium' | 'large';

export interface BaseSwitchProps {
  checked: Boolean | String | Number;
  size: SwitchSizeType;
  disabled: Boolean;
  checkedColor?: String;
  checkedText?: String;
  checkedValue?: Boolean | String | Number;
  unCheckedColor?: String;
  unCheckedText?: String;
  unCheckedValue?: Boolean | String | Number;
  className?: String;
  hidden?: Boolean;
  style?: String;
  onChange?: (checked: Boolean | String | Number) => void;
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
  unCheckedValue: false,
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

    onChangeHandler() {
      this.props.onChange && this.props.onChange(!this.props.checked);
    },
  },
});

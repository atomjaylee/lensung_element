import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';
const defaultProps = {
  checked: false,
  disabled: false,
  value: true,
  size: 'medium',
  _isLenSungChecked: true // NOTE: 作为check组件标识，用于group组件递归时的标识符

};
Component({
  props: defaultProps,

  deriveDataFromProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setData({
        localChecked: nextProps.checked === this.props.value
      });
    }

    if (nextProps.disabled !== this.props.disabled) {
      this.setData({
        baseClass: this.wrapClasses()
      });
    }
  },

  data: {
    baseClass: '',
    localChecked: false
  },

  onInit() {
    this.setData({
      baseClass: this.wrapClasses()
    });
    this.$groupId = this.props.$groupId;
    this.$groupUpdate = this.props.$groupUpdate;
    this.$groupId && this.props.$groupRegister(this.$id, this.groupUpdate.bind(this));
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
    },

    onCheckTapHandler(evt) {
      if (this.props.disabled) return;
      const event = fmtEvent(this.props, { ...evt,
        checked: this.props.value
      });
      this.props.onChange && this.props.onChange(event);
      this.$groupId && this.$groupUpdate(this.props.value);
    },

    groupUpdate(checkedList) {
      console.log(checkedList);
      this.setData({
        localChecked: !!checkedList.find(x => x === this.props.value)
      });
    }

  }
});
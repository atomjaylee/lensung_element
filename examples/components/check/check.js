import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';
import { PAGE_CONTEXT_NAME } from './checkGroup/checkGroup';
import { isObject } from '../_utils/tool';
const defaultProps = {
  checked: false,
  disabled: false,
  value: true,
  size: 'medium'
};
Component({
  props: defaultProps,

  deriveDataFromProps(nextProps) {
    const {
      value,
      checked,
      size,
      disabled,
      identify
    } = nextProps;
    const {
      checked: preChecked,
      size: preSize,
      disabled: preDisabled
    } = this.props;

    if (isObject(value)) {
      if (checked[identify] !== preChecked[identify]) {
        this.setData({
          localChecked: checked[identify] === value[identify]
        });
      }
    } else {
      checked !== preChecked && this.setData({
        localChecked: checked === value
      });
    }

    if (disabled !== preDisabled || size !== preSize) {
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
    const {
      value,
      identify,
      checked = {},
      groupId
    } = this.props;
    this.setData({
      baseClass: this.wrapClasses(),
      localChecked: isObject(value) ? checked[identify] === value[identify] : checked === value
    });

    if (groupId !== undefined) {
      const dependGroup = this.$page[`${PAGE_CONTEXT_NAME}${groupId}`];

      if (dependGroup) {
        dependGroup.link(this.$id, this.localUpdate.bind(this));
        this.$groupUpdate = dependGroup.update;
        this.$refresh = dependGroup.refresh;
        this.$unLink = dependGroup.unLink;
      }
    }
  },

  didUnmount() {
    this.$unLink && this.$unLink(this.$id);
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

      if (this.props.groupId !== undefined) {
        this.$groupUpdate && this.$groupUpdate(this.props.value, this.props.identify);
      } else {
        const event = fmtEvent(this.props, { ...evt,
          checked: this.props.value
        });
        this.props.onChange && this.props.onChange(event);
      }
    },

    // 更新本地勾选状态回调
    localUpdate(checkedList) {
      let isChecked = false;
      const {
        identify,
        value
      } = this.props;

      if (isObject(this.props.value)) {
        isChecked = checkedList.some(x => x[identify] === value[identify]);
      } else {
        isChecked = checkedList.some(x => x === value);
      }

      if (this.data.localChecked !== isChecked) {
        this.setData({
          localChecked: isChecked
        });
      }
    }

  }
});
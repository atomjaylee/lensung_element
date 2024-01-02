import fmtEvent from '../../_utils/fmtEvent';
import { PAGE_CONTEXT_NAME } from '../constants';
import { isObject } from '../../_utils/tool';
const defaultProps = {
  checked: false,
  checkedBackground: '#fff7f1',
  checkedBorderColor: '#ff5001',
  checkedColor: '#ff5001',
  disabled: false,
  value: true,
  hidden: false
};
Component({
  props: defaultProps,

  deriveDataFromProps({
    groupId,
    value,
    checked,
    identify
  }) {
    if (groupId !== undefined) return;

    if (isObject(value)) {
      this.setData({
        localChecked: checked[identify] === value[identify]
      });
    } else {
      this.setData({
        localChecked: checked === value
      });
    }
  },

  data: {
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
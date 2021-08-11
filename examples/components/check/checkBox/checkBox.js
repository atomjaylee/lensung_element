import fmtEvent from '../../_utils/fmtEvent';
import { PAGE_CONTEXT_NAME } from '../checkGroup/checkGroup';
const defaultProps = {
  checked: false,
  checkedBackground: '#fff7f1',
  checkedBorderColor: '#ff5001',
  checkedColor: '#ff5001',
  disabled: false,
  value: true
};
Component({
  props: defaultProps,

  deriveDataFromProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setData({
        localChecked: nextProps.checked === this.props.value
      });
    }
  },

  data: {
    localChecked: false
  },

  onInit() {
    this.setData({
      localChecked: this.props.checked === this.props.value
    });

    if (this.props.groupId !== undefined) {
      const dependGroup = this.$page[`${PAGE_CONTEXT_NAME}${this.props.groupId}`];

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
        this.$groupUpdate && this.$groupUpdate(this.props.value);
      } else {
        const event = fmtEvent(this.props, { ...evt,
          checked: this.props.value
        });
        this.props.onChange && this.props.onChange(event);
      }
    },

    // 更新本地勾选状态回调
    localUpdate(checkedList) {
      const isChecked = checkedList.some(x => x === this.props.value);

      if (this.data.localChecked !== isChecked) {
        this.setData({
          localChecked: isChecked
        });
      }
    }

  }
});
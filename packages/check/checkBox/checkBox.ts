import fmtEvent from '../../_utils/fmtEvent';
import fmtClass from '../../_utils/fmtClass';

interface BaseCheckProps {
  checked: boolean | string | number;
  disabled?: boolean;
  checkedBackground?: string;
  checkedBorderColor?: string;
  checkedColor?: string;
  value?: boolean | string | number;
  onChange?: (e: tinyapp.IBaseEvent) => void;
  readonly $groupId?: number;
  readonly $groupRegister?: (id: number, callback: Function) => void;
  readonly $groupUpdate?: (value: number | string | boolean) => void;
  [propName: string]: any;
}

const defaultProps: BaseCheckProps = {
  checked: false,
  checkedBackground: '#fff7f1',
  checkedBorderColor: '#ff5001',
  checkedColor: '#ff5001',
  disabled: false,
  value: true,
  size: 'medium',
  _isLenSungChecked: true, // NOTE: 作为check组件标识，用于group组件递归时的标识符
};

Component({
  props: defaultProps,

  deriveDataFromProps(nextProps: BaseCheckProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setData({ localChecked: nextProps.checked === this.props.value });
    }
  },

  data: {
    localChecked: false,
  },

  onInit() {
    this.setData({ localChecked: this.props.checked === this.props.value });
    this.$groupId = this.props.$groupId;
    this.$groupUpdate = this.props.$groupUpdate;
    this.$groupId && this.props.$groupRegister(this.$id, this.groupUpdate.bind(this));
  },

  methods: {
    onCheckTapHandler(evt) {
      if (this.props.disabled) return;
      const event = fmtEvent(this.props, { ...evt, checked: this.props.value });
      this.props.onChange && this.props.onChange(event);
      this.$groupId && this.$groupUpdate(this.props.value);
    },

    groupUpdate(checkedList) {
      this.setData({ localChecked: !!checkedList.find((x) => x === this.props.value) });
    },
  },
});

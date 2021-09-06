export interface BaseFilterProps {
  id?: string;
  width?: string | 'auto';
  activeKey: string | number;
  schema: Record<string, any>[];
  labelIdentify?: string;
  keyIdentify?: string;
  style?: string;
  className?: string;
  onVisibleChange?: (visible: boolean) => void;
  onChange?: <T extends BaseFilterProps>(key: string | number, props: T) => void;
}

const defaultProps: BaseFilterProps = {
  activeKey: '',
  schema: [],
  width: 'auto',
  labelIdentify: 'label',
  keyIdentify: 'key',
};

Component({
  props: defaultProps,

  methods: {
    onDropPanelVisibleChange(visible) {
      this.props.onVisibleChange && this.props.onVisibleChange(visible);
    },

    onSelectItemHandler({ target: { dataset } }) {
      const { keyIdentify, onChange } = this.props;
      const item = dataset.item;
      onChange && onChange(item[keyIdentify], this.props);
    },
  },
});

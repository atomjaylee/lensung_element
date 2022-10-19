const defaultProps = {
  activeKey: '',
  schema: [],
  width: 'auto',
  labelIdentify: 'label',
  keyIdentify: 'key'
};
Component({
  props: defaultProps,
  methods: {
    onDropPanelVisibleChange(visible) {
      this.props.onVisibleChange && this.props.onVisibleChange(visible);
    },
    onSelectItemHandler({
      target: {
        dataset
      }
    }) {
      const {
        keyIdentify,
        onChange
      } = this.props;
      const item = dataset.item;
      onChange && onChange(item[keyIdentify], this.props);
    }
  }
});
export {};
const defaultProps = {
  activeKey: undefined,
  hidden: false,
  activeColor: '#ff5001',
  unActiveColor: '#333',
  showLine: true,
  immediate: false,
  schema: [],
  source: {}
};
Component({
  props: defaultProps,
  onInit() {
    if (this.props.immediate) {
      this.emitActiveKey(this.props.activeKey);
    }
  },
  methods: {
    onTapHandler({
      target: {
        dataset
      }
    }) {
      const key = dataset.key;
      this.emitActiveKey(key);
    },
    emitActiveKey(key) {
      this.props.onChange && this.props.onChange(key);
    }
  }
});
export {};
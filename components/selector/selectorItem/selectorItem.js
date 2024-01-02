const defaultProps = {
  source: {},
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled',
  checkedList: [],
  parentSuppressCheck: false,
  defaultFold: false
};
Component({
  props: defaultProps,
  data: {
    // 折叠控制
    isFold: false
  },

  onInit() {
    this.setData({
      isFold: this.props.defaultFold
    });
  },

  methods: {
    checkInstance(ref) {
      this.$checkInstance = ref;
    },

    // 展开和折叠子选项
    onFoldItemHandler() {
      this.setData({
        isFold: !this.data.isFold
      });
    },

    // 通过点击body选中check
    onCheckedByBodyHandler({
      target: {
        targetDataset
      }
    }) {
      const {
        source,
        activeChildren,
        parentSuppressCheck
      } = this.props;
      if (source[activeChildren] && source[activeChildren].length && parentSuppressCheck) return;

      if (targetDataset.nodeName !== 'check') {
        this.$checkInstance.onCheckTapHandler();
      }
    }

  }
});
export {};
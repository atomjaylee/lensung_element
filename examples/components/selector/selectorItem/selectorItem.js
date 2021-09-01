const defaultProps = {
  source: {},
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled',
  checkedList: []
};
Component({
  props: defaultProps,
  data: {
    // 折叠控制
    foldControl: {}
  },
  methods: {
    checkInstance(ref) {
      this.$checkInstance = ref;
    },

    // 展开和折叠子选项
    onFoldItemHandler({
      target: {
        dataset
      }
    }) {
      const key = dataset.key;
      const currentState = this.data.foldControl[key];
      this.setData({
        foldControl: { ...this.data.foldControl,
          [key]: !currentState
        }
      });
    },

    // 通过点击body选中check
    onCheckedByBodyHandler({
      target: {
        targetDataset
      }
    }) {
      if (targetDataset.nodeName !== 'check') {
        this.$checkInstance.onCheckTapHandler();
      }
    }

  }
});
export {};
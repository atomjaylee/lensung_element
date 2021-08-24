const defaultProps = {
  source: {},
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled'
};
Component({
  props: defaultProps,
  methods: {
    checkInstance(ref) {
      this.$checkInstance = ref;
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
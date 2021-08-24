const defaultProps = {
  schema: [],
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children'
};
Component({
  props: defaultProps,
  data: {
    checkedList: []
  },
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show() {
      this.$popup.show();
    },

    close() {
      this.$popup.close();
    },

    // checkGroup修改
    onGroupCheckChangeHandler(checkedList) {
      this.setData({
        checkedList
      });
    }

  }
});
export {};
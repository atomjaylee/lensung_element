const defaultProps = {
  filterConfig: []
};
Component({
  props: defaultProps,
  methods: {
    filterPopup(ref) {
      this.$filterPopup = ref;
    },

    searchPopup(ref) {
      this.$searchPopup = ref;
    },

    // 搜索框被点击
    onSearchClick() {
      this.$searchPopup.show({
        position: 'right'
      });
    },

    // 筛选被点击
    onFilterPopupClick() {
      this.$filterPopup.show({
        position: 'right',
        maskClosable: true
      });
    }

  }
});
export {};
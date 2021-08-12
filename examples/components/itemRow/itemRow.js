const defaultProps = {
  source: {},
  showCheck: false,
  checkIdentify: 'num_iid',
  checkByContent: false,
  imageSize: 'medium'
};
Component({
  props: defaultProps,
  data: {
    checked: false
  },
  methods: {
    checkInstance(ref) {
      this.__checkInstance__ = ref;
    },

    // 监听组件内check组件group状态下的勾选情况
    onCheckChangeByGroup(checked) {
      this.setData({
        checked
      });
    },

    // 手动触发勾选或取消勾选check
    checkItemRowByContentHandler() {
      if (this.props.checkByContent && this.props.showCheck) {
        this.__checkInstance__.onCheckTapHandler();
      }
    },

    // 错误信息点击事件
    onErrorTipClickHandler() {
      if (this.$alert) {
        this.$alert({
          isNew: true,
          title: '失败原因',
          content: this.props.source.error
        });
      }
    }

  }
});
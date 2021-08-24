import fmtEvent from '../_utils/fmtEvent';
const defaultProps = {
  source: {},
  showCheck: false,
  checkIdentify: 'num_iid',
  checkByContent: false,
  disabledAttrName: 'disabled',
  imageSize: 'medium',
  fillTitleHeight: false
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

    toastInstance(ref) {
      this.__toastInstance__ = ref;
    },

    // 监听组件内check组件group状态下的勾选情况
    onCheckChangeByGroup(checked) {
      this.setData({
        checked
      });
    },

    // 手动触发勾选或取消勾选check
    checkItemRowByContentHandler() {
      const {
        checkByContent,
        showCheck,
        source,
        disabledAttrName
      } = this.props;

      if (checkByContent && showCheck) {
        if (source[disabledAttrName] === false) {
          this.__checkInstance__.onCheckTapHandler();
        } else {
          // 禁用并且存在disabledToast时，进行提示
          source.disabledToast && this.__toastInstance__.show(source.disabledToast);
        }
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
    },

    // 整个宝贝点击事件
    onItemRowTapHandler(evt) {
      if (this.props.checkByContent) return;
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    }

  }
});
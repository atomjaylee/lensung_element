import fmtEvent from '../_utils/fmtEvent';

interface ItemServerRequest {
  num_iid?: number;
  title?: string;
  pic_url?: string;
  is_xianyu?: boolean;
  is_xinpin?: boolean;
  type?: string;
  disabled?: boolean;
  tag?: string;
  error?: string;
  [propName: string]: any;
}

export interface BaseItemRowProps {
  source: ItemServerRequest;
  showCheck?: boolean;
  checkGroupId?: string;
  checkIdentify?: string;
  checkByContent?: boolean;
  disabledAttrName?: string;
  className?: string;
  tagClass?: string;
  fillTitleHeight?: boolean;
  imageSize?: 'medium' | 'large';
  style?: string;
  onTap?: (e: tinyapp.IBaseEvent) => void;
}

const defaultProps: BaseItemRowProps = {
  source: {},
  showCheck: false,
  checkIdentify: 'num_iid',
  checkByContent: false,
  disabledAttrName: 'disabled',
  imageSize: 'medium',
  fillTitleHeight: false,
};

Component({
  props: defaultProps,

  data: {
    checked: false,
  },

  methods: {
    checkInstance(ref) {
      this.__checkInstance__ = ref;
    },

    // 监听组件内check组件group状态下的勾选情况
    onCheckChangeByGroup(checked) {
      this.setData({ checked });
    },

    // 手动触发勾选或取消勾选check
    checkItemRowByContentHandler() {
      const { checkByContent, showCheck, source, disabledAttrName } = this.props;
      if (checkByContent && showCheck && source[disabledAttrName] !== true) {
        this.__checkInstance__.onCheckTapHandler();
      }
    },

    // 错误信息点击事件
    onErrorTipClickHandler() {
      if (this.$alert) {
        this.$alert({ isNew: true, title: '失败原因', content: this.props.source.error });
      }
    },

    // 整个宝贝点击事件
    onItemRowTapHandler(evt) {
      if (this.props.checkByContent) return;
      const event = fmtEvent(this.props, evt);
      this.props.onTap && this.props.onTap(event);
    },
  },
});

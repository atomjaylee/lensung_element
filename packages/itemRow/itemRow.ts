import fmtEvent from '../_utils/fmtEvent';

interface ItemServerRequest {
  num_iid?: number;
  title?: string;
  pic_url?: string;
  is_xianyu?: boolean;
  is_xinpin?: boolean;
  type?: string;
  disabled?: boolean;
  disabledToast?: string;
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
    toastInstance(ref) {
      this.__toastInstance__ = ref;
    },

    // 监听组件内check组件group状态下的勾选情况
    onCheckChangeByGroup(checked) {
      this.setData({ checked });
    },

    // 整个宝贝点击事件 或 点击内容区勾选宝贝
    onRowTapHandler(evt) {
      const { checkByContent, showCheck, source, disabledAttrName } = this.props;
      if (checkByContent && showCheck) {
        const nodeName = evt.target.targetDataset.nodeName;
        if (source[disabledAttrName] === true) {
          // 禁用并且存在disabledToast时，进行提示
          source.disabledToast && this.__toastInstance__.show(source.disabledToast);
        } else if (nodeName !== 'check') {
          // 点击的不为check组件时，也触发check的勾选动作
          this.__checkInstance__.onCheckTapHandler();
        }
      }
      if (checkByContent === false) {
        const event = fmtEvent(this.props, evt);
        this.props.onTap && this.props.onTap(event);
      }
    },

    // 错误信息点击事件
    onErrorTipClickHandler() {
      if (this.$alert) {
        this.$alert({ isNew: true, title: '失败原因', content: this.props.source.error });
      }
    },
  },
});

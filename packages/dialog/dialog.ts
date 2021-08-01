interface BaseDialogProps {
  title?: string;
  content?: string;
  icon?: string;
  zIndex?: number;
  confirmText?: string;
  cancelText?: string;
  onBeforeClose?: () => boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  className?: string;
  style?: string;
  contentClass?: string;
  contentAlign?: 'left' | 'center' | 'right' | 'justify';
  maxLine?: number;
  [propName: string]: any;
}

const defaultProps: BaseDialogProps = {
  zIndex: 999,
  title: '修改详情',
  contentAlign: 'left',
  maxLine: 3,
  confirmText: '确定',
  cancelText: '取消',
  content: '打单成功5笔，失败3笔\n失败原因：打印哈哈哈哈取连接失败，建议先发货已打印成功订单。',
};

Component({
  props: defaultProps,

  data: {
    visible: true,
    contentVisible: false,
  },

  methods: {
    onAppearHandler() {
      this.setData({ contentVisible: true });
    },

    confirm(options: BaseDialogProps) {},

    alert(options: BaseDialogProps) {},
  }
})

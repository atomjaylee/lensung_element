export interface BaseDialogProps {
  title?: string;
  content?: string;
  icon?: string;
  confirmText?: string;
  cancelText?: string;
  onBeforeClose?: () => boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const defaultProps: BaseDialogProps = {
  confirmText: '确定',
  cancelText: '取消',
};
Component({
  props: defaultProps,

  data: {},

  methods: {
    confirm(options: BaseDialogProps) {},

    alert(options: BaseDialogProps) {},
  },
});

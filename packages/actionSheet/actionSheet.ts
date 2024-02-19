import { getComponentAttr } from '../_utils/tool';

type SchemaType = {
  label: string;
  key: string | number;
  desc?: string;
  statistic?: string;
};

export interface BaseActionSheetProps {
  tip?: string;
  schema: SchemaType[];
  value?: string | number;
  maskClosable?: boolean;
  zIndex?: number;
  style?: string;
  className?: string;
  cancelText?: string;
  statisticCancel?: string;
  onlyKey?: boolean;
  onBeforeClose?: () => boolean;
  onAfterClose?: () => void;
}

const defaultProps: BaseActionSheetProps = {
  schema: [],
  cancelText: '取消',
  onlyKey: true,
  maskClosable: true,
};

Component({
  props: defaultProps,

  data: {},

  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show(options: BaseActionSheetProps) {
      return new Promise((resolve) => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options });
        this.$popup.show();
      });
    },

    close() {
      this.__promise_resolve__ = undefined;
      this.$popup.close();
    },

    async onSelectItemHandler({ target: { dataset } }) {
      const item = dataset.item;
      const onBeforeClose = getComponentAttr(this, 'onBeforeClose');
      const onlyKey = getComponentAttr(this, 'onlyKey');
      const isPass = onBeforeClose ? await onBeforeClose() : true;
      if (isPass) {
        this.__promise_resolve__(onlyKey ? item.key : item);
        this.close();
      }
    },

    onAfterCloseHandler() {
      const onAfterClose = getComponentAttr(this, 'onAfterClose');
      onAfterClose && onAfterClose();
    },
  },
});

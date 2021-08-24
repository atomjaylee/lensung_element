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
  maskClosable?: boolean;
  zIndex?: number;
  cancelText?: string;
  statisticCancel?: string;
  onBeforeClose?: () => boolean;
  onAfterClose?: () => void;
}

const defaultProps: BaseActionSheetProps = {
  schema: [],
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
      const { key } = dataset.item;
      const onBeforeClose = getComponentAttr(this, 'onBeforeClose');
      const isPass = onBeforeClose ? await onBeforeClose() : true;
      if (isPass) {
        this.__promise_resolve__(key);
        this.close();
      }
    },

    onCancelHandler() {
      this.__promise_resolve__();
      this.close();
    },

    onAfterCloseHandler() {
      const onAfterClose = getComponentAttr(this, 'onAfterClose');
      onAfterClose && onAfterClose();
    },
  },
});

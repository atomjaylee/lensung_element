import { getComponentAttr } from '../_utils/tool';
const defaultProps = {
  schema: [],
  cancelText: '取消',
  onlyKey: true,
  maskClosable: true
};
Component({
  props: defaultProps,
  data: {},
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show(options) {
      return new Promise(resolve => {
        this.__promise_resolve__ = resolve;
        this.setData({ ...options
        });
        this.$popup.show();
      });
    },

    close() {
      this.__promise_resolve__ = undefined;
      this.$popup.close();
    },

    async onSelectItemHandler({
      target: {
        dataset
      }
    }) {
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
    }

  }
});
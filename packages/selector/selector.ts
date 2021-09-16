export type extraButtonProps = {
  label: string;
  callback: (checkedList: []) => void;
};
export interface BaseSelectorAttrs {
  title?: string;
  confirmText?: string;
  schema: Record<string, any>[];
  defaultChecked?: Record<string, any>[];
  hiddenCloseIcon?: boolean;
  maskClosable?: boolean;
  activeLabel?: string;
  activeKey?: string;
  activeChildren?: string;
  activeDisabled?: string;
  max?: number;
  parentSuppressCheck?: boolean; // 父类禁止选择
  defaultFold?: boolean; // 默认是否全部展开
  extraButtons?: extraButtonProps[];
  onBeforeClose?: (checked: Record<string, any> | undefined) => boolean;
  onAfterClose?: () => void;
  onCancel?: () => void;
  onConfirm?: (checked: Record<string, any> | undefined) => void;
  onVisibleChange?: (visible: boolean) => void;
  [propName: string]: any;
}

const defaultAttrs: BaseSelectorAttrs = {
  title: '',
  confirmText: '确定',
  schema: [],
  defaultCheckedList: [],
  hiddenCloseIcon: false,
  maskClosable: true,
  max: 1,
  activeLabel: 'label',
  activeKey: 'key',
  activeChildren: 'children',
  activeDisabled: 'disabled',
  parentSuppressCheck: false,
  defaultFold: false,
  extraButtons: [],
  onBeforeClose: () => true,
  onAfterClose: () => {},
  onCancel: () => {},
  onConfirm: () => {},
  onVisibleChange: () => {},
};

Component({
  data: {
    ...defaultAttrs,
    checkedList: [],
  } as BaseSelectorAttrs,

  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show(options: BaseSelectorAttrs) {
      const { defaultCheckedList, ...customAttrs } = options;
      this.setData({
        checkedList: defaultCheckedList ? defaultCheckedList : [],
        ...customAttrs,
        test: () => void 0,
      });
      this.$popup.show();
    },

    close() {
      this.$popup.close();
    },

    async onConfirmHandler() {
      const isPass = await this.data.onBeforeClose(this.data.checkedList);
      if (isPass) {
        this.close();
        this.data.onConfirm(this.data.checkedList);
      }
    },

    // 点击关闭时模拟点击遮罩层关闭，从而触发onCancel方法
    mockMaskClose() {
      this.$popup.onMaskTapHandler({ target: { targetDataset: { nodeName: 'mask' } } });
    },

    // 代理onAfterClose事件
    proxyAfterClose() {
      this.data.onAfterClose();
      this.setData({ ...defaultAttrs, checkedList: [] });
    },

    // 代理onCancel事件
    proxyCancel() {
      this.data.onCancel();
    },

    proxyVisibleChange(visible) {
      this.data.onVisibleChange(visible);
    },

    // checkGroup修改
    onGroupCheckChangeHandler(checkedList) {
      this.setData({ checkedList });
    },

    // 自定义额外按钮点击
    onExtraButtonClickHandler(evt) {
      const label = evt.target.dataset.label;
      const targetCallback = this.data.extraButtons.find((x) => x.label === label).callback;
      targetCallback(this.data.checkedList);
    },
  },
});

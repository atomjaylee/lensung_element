import { deepClone } from '../../_utils/tool';
interface BaseCheckGroupProps {
  checkedList: [];
  max?: number;
  id?: string;
  onChange?: (checkedList) => void;
}

const defaultProps: BaseCheckGroupProps = {
  checkedList: [],
  max: Infinity,
};

export const PAGE_CONTEXT_NAME = '__checkGroup';

Component({
  props: defaultProps,

  onInit() {
    if (this.props.id === undefined) {
      console.error('checkGroup组件未传入id属性');
      return;
    }
    const groupId = `${PAGE_CONTEXT_NAME}${this.props.id}`;
    if (this.$page[groupId]) {
      console.error('页面中存在重复的groupID,请重新配置id');
      return;
    }
    this.__observerList__ = new Map();
    Object.defineProperty(this.$page, groupId, {
      get: () => ({
        link: this.observerAdd.bind(this),
        unLink: this.observerDelete.bind(this),
        update: this.observerUpdate.bind(this),
        refresh: this.childUpdate.bind(this),
      }),
      configurable: true,
    });
    Promise.resolve().then(() => this.childNotify());
  },

  didUpdate() {
    this.childNotify();
  },

  methods: {
    observerAdd(id: number, updateFunc: Function) {
      this.__observerList__.set(id, updateFunc);
    },

    observerDelete(id: number) {
      this.__observerList__.delete(id);
    },

    observerUpdate(value: number | string | boolean) {
      const _checkedList = deepClone(this.props.checkedList);
      const targetIndex = _checkedList.findIndex((item) => item === value);
      if (targetIndex === -1) {
        _checkedList.length < +this.props.max && _checkedList.push(value);
      } else {
        _checkedList.splice(targetIndex, 1);
      }
      this.props.onChange && this.props.onChange(_checkedList);
    },

    childUpdate(targetId) {
      const targetCheckUpdateFunc = this.__observerList__.get(targetId);
      targetCheckUpdateFunc(this.props.checkedList);
    },

    childNotify() {
      this.__observerList__.forEach((updateFunc) => updateFunc(this.props.checkedList));
    },
  },
});

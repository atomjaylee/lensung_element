import { deepClone, isObject } from '../../_utils/tool';
const defaultProps = {
  checkedList: [],
  max: Infinity
};
export const PAGE_CONTEXT_NAME = '__checkGroup';
Component({
  props: defaultProps,

  onInit() {
    if (this.props.id === undefined) {
      // eslint-disable-next-line no-console
      console.error('checkGroup组件未传入id属性');
      return;
    }

    const groupId = `${PAGE_CONTEXT_NAME}${this.props.id}`;

    if (this.$page[groupId]) {
      // eslint-disable-next-line no-console
      console.error('页面中存在重复的groupID,请重新配置id');
      return;
    }

    this.__observerList__ = new Map();
    Object.defineProperty(this.$page, groupId, {
      get: () => ({
        link: this.observerAdd.bind(this),
        unLink: this.observerDelete.bind(this),
        update: this.observerUpdate.bind(this),
        refresh: this.childUpdate.bind(this)
      }),
      configurable: true
    });
    Promise.resolve().then(() => this.childNotify());
  },

  didUpdate() {
    this.childNotify();
  },

  methods: {
    observerAdd(id, updateFunc) {
      this.__observerList__.set(id, updateFunc);
    },

    observerDelete(id) {
      this.__observerList__.delete(id);
    },

    observerUpdate(value, identify) {
      const _checkedList = deepClone(this.props.checkedList);

      const targetIndex = _checkedList.findIndex(item => isObject(item) ? item[identify] === value[identify] : item === value);

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
      this.__observerList__.forEach(updateFunc => updateFunc(this.props.checkedList));
    }

  }
});
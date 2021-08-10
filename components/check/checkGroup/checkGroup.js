import { deepClone } from '../../_utils/tool';
const defaultProps = {
  checkedList: [],
  max: Infinity
};
Component({
  props: defaultProps,

  onInit() {
    this.__observerList__ = new Map();
    const defaultSlotList = this.props.$slots.$default || [];
    this.childRegister(defaultSlotList);
    Promise.resolve().then(() => this.notify(this.props.checkedList));
  },

  deriveDataFromProps(nextProps) {
    if (nextProps.checkedList.length !== this.props.checkedList.length) {
      this.notify(nextProps.checkedList);
    }

    const slotList = this.props.$slots.$default || [];
    const nextSlotList = nextProps.$slots.$default || [];

    if (slotList.length !== nextSlotList.length) {
      this.__observerList__.clear();

      this.childRegister(nextSlotList);
      Promise.resolve().then(() => this.notify(nextProps.checkedList));
    }
  },

  methods: {
    childRegister(children) {
      children.forEach(child => {
        if (child.props._isLenSungChecked) {
          child.props.$groupId = this.$id;
          child.props.$groupRegister = this.observerAdd.bind(this);
          child.props.$groupUpdate = this.observerUpdate.bind(this);
        } else {
          const children = child.props.children || [];
          const childrenList = Array.isArray(children) ? children : [children];
          const filterChildrenList = childrenList.filter(x => typeof x === 'object');
          filterChildrenList.length && this.childRegister(filterChildrenList);
        }
      });
    },

    observerAdd(id, updateFunc) {
      this.__observerList__.set(id, updateFunc);
    },

    observerUpdate(value) {
      const _checkedList = deepClone(this.props.checkedList);

      const targetIndex = _checkedList.findIndex(item => item === value);

      targetIndex === -1 ? _checkedList.push(value) : _checkedList.splice(targetIndex, 1);
      this.props.onChange && this.props.onChange(_checkedList);
    },

    notify(newestCheckedList) {
      this.__observerList__.forEach(updateFunc => updateFunc(newestCheckedList));
    }

  }
});
import { deepClone } from '../../_utils/tool';
const defaultProps = {
  checkedList: [],
  max: Infinity
};
const observerList = new Map();
Component({
  props: defaultProps,

  onInit() {
    this.childRegister();
    Promise.resolve().then(() => this.notify(this.props.checkedList));
  },

  deriveDataFromProps(nextProps) {
    if (nextProps.checkedList.length !== this.props.checkedList.length) {
      this.notify(nextProps.checkedList);
    }
  },

  methods: {
    childRegister() {
      const defaultSlotList = this.props.$slots.$default || [];

      const addChildrenProps = children => {
        children.forEach(child => {
          if (child.props._isLenSungChecked) {
            child.props.$groupId = this.$id;
            child.props.$groupRegister = this.observerAdd;
            child.props.$groupUpdate = this.observerUpdate.bind(this);
          } else {
            const children = child.props.children || [];
            const childrenList = Array.isArray(children) ? children : [children];
            const filterChildrenList = childrenList.filter(x => typeof x === 'object');
            filterChildrenList.length && addChildrenProps(filterChildrenList);
          }
        });
      };

      addChildrenProps(defaultSlotList);
    },

    observerAdd(id, updateFunc) {
      observerList.set(id, updateFunc);
    },

    observerUpdate(value) {
      const _checkedList = deepClone(this.props.checkedList);

      const targetIndex = _checkedList.findIndex(item => item === value);

      targetIndex === -1 ? _checkedList.push(value) : _checkedList.splice(targetIndex, 1);
      this.props.onChange && this.props.onChange(_checkedList);
    },

    notify(newestCheckedList) {
      observerList.forEach(updateFunc => updateFunc(newestCheckedList));
    }

  }
});
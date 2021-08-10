import { deepClone } from '../../_utils/tool';
interface BaseCheckGroupProps {
  checkedList: [];
  max?: number;
  onChange?: (checkedList) => void;
  readonly $slots?: any;
}

const defaultProps: BaseCheckGroupProps = {
  checkedList: [],
  max: Infinity,
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
      const addChildrenProps = (children: any[]) => {
        children.forEach((child) => {
          if (child.props._isLenSungChecked) {
            child.props.$groupId = this.$id;
            child.props.$groupRegister = this.observerAdd;
            child.props.$groupUpdate = this.observerUpdate.bind(this);
          } else {
            const children = child.props.children || [];
            const childrenList = Array.isArray(children) ? children : [children];
            const filterChildrenList = childrenList.filter((x) => typeof x === 'object');
            filterChildrenList.length && addChildrenProps(filterChildrenList);
          }
        });
      };
      addChildrenProps(defaultSlotList);
    },

    observerAdd(id: number, updateFunc: Function) {
      observerList.set(id, updateFunc);
    },

    observerUpdate(value: number | string | boolean) {
      const _checkedList = deepClone(this.props.checkedList);
      const targetIndex = _checkedList.findIndex((item) => item === value);
      targetIndex === -1 ? _checkedList.push(value) : _checkedList.splice(targetIndex, 1);
      this.props.onChange && this.props.onChange(_checkedList);
    },

    notify(newestCheckedList) {
      observerList.forEach((updateFunc) => updateFunc(newestCheckedList));
    },
  },
});

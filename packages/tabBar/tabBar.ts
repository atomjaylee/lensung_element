import fmtEvent from '../_utils/fmtEvent';
import fmtClass from '../_utils/fmtClass';

export interface BaseTabBarProps {
  activeKey: String | Number;
  hidden?: Boolean;
  activeColor?: String;
  unActiveColor?: String;
  showLine?: Boolean;
  schema: SchemaType[];
  source?: Record<any, Number>;
  immediate?: Boolean;
  style?: String;
  className?: String;
  onChange?: (evt: tinyapp.IBaseEvent) => void;
}

type SchemaType = {
  label: String;
  key: String | Number;
};

const defaultProps: BaseTabBarProps = {
  activeKey: undefined,
  hidden: false,
  activeColor: '#ff5001',
  unActiveColor: '#333',
  showLine: true,
  immediate: false,
  schema: [],
  source: {},
};

Component({
  props: defaultProps,

  onInit() {
    if (this.props.immediate) {
      this.emitActiveKey(this.props.activeKey);
    }
  },

  methods: {
    onTapHandler({ target: { dataset } }) {
      const key = dataset.key;
      this.emitActiveKey(key);
    },

    emitActiveKey(key) {
      this.props.onChange && this.props.onChange(key);
    },
  },
});

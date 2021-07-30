export interface BaseTabBarProps {
  activeKey: string | number;
  hidden?: boolean;
  activeColor?: String;
  unActiveColor?: string;
  showLine?: boolean;
  schema: SchemaType[];
  source?: Record<any, number>;
  immediate?: boolean;
  style?: string;
  className?: string;
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

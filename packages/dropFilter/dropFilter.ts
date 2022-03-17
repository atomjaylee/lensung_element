export interface BaseFilterProps {
  id?: string;
  width?: string | 'auto';
  style?: string;
  className?: string;
  onVisibleChange?: (visible: boolean) => void;
  onBeforeOpen?: () => Promise<void>;
}

const defaultProps: BaseFilterProps = {
  width: 'auto',
};

Component({
  props: defaultProps,

  methods: {
    onDropPanelVisibleChange(visible) {
      this.props.onVisibleChange && this.props.onVisibleChange(visible);
    },

    async onProxyBeforeOpen() {
      this.props.onBeforeOpen && (await this.props.onBeforeOpen());
    },
  },
});

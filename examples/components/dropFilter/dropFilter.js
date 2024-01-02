const defaultProps = {
  width: 'auto'
};
Component({
  props: defaultProps,
  methods: {
    onDropPanelVisibleChange(visible) {
      this.props.onVisibleChange && this.props.onVisibleChange(visible);
    },

    async onProxyBeforeOpen() {
      this.props.onBeforeOpen && (await this.props.onBeforeOpen());
    }

  }
});
export {};
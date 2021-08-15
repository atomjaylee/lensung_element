export interface BaseSelectorProps {}

const defaultProps: BaseSelectorProps = {};

Component({
  props: defaultProps,
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show() {
      this.$popup.show();
    },
  },
});

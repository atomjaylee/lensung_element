export interface BaseSelectorProps {}

const defaultProps: BaseSelectorProps = {};

Component({
  props: defaultProps,
  methods: {
    popupInstance(ref) {
      this.$popupInstance = ref;
    },
  },
});

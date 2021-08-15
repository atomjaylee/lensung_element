const defaultProps = {};
Component({
  props: defaultProps,
  methods: {
    popup(ref) {
      this.$popup = ref;
    },

    show() {
      this.$popup.show();
    }

  }
});
export {};
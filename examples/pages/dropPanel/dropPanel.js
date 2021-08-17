Page({
  data: {
    visible: false,
  },
  onLoad() {},

  handleClosePanel() {
    const dropPanelInstanceMap = this.__dropPanelInstanceMap__;
    if (dropPanelInstanceMap) {
      dropPanelInstanceMap.forEach((instance) => instance.close());
    }
  },

  onVisibleChange({ target: { dataset } }) {
    this.setData({ visible: dataset.visible });
  },
});

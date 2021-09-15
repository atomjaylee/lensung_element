Page({
  data: {
    visible: false,
  },
  onLoad() { },

  handleClosePanel() {
    const dropPanelInstanceMap = this.__dropPanelInstanceMap__;
    if (dropPanelInstanceMap) {
      dropPanelInstanceMap.forEach((instance) => instance.close());
    }
  },

  onVisibleChange({ target: { dataset } }) {
    this.setData({ visible: dataset.visible });
  },

  async onBeforeOpenHandler() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(1000)
  }
});

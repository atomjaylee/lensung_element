Page({
  data: {},
  onLoad() { },

  handleClosePanel() {
    const dropPanelInstanceMap = this.__dropPanelInstanceMap__;
    if(dropPanelInstanceMap) {
      dropPanelInstanceMap.forEach(instance => instance.close());
    }
  }
});

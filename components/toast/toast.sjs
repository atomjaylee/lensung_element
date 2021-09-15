const fmtIcon = (icon) => {
  switch (icon) {
    case 'success':
      return 'icon-chenggong';
    case 'error':
      return 'icon-shibai';
    default:
      return icon;
  }
};

// 获取propData上的值或者是props上的值
const attr = (propData, attrName, propAttrValue) => {
  return propData[attrName] ? propData[attrName] : propAttrValue;
};

export default {
  fmtIcon,
  attr
};

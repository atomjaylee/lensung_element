/**
 * @param width 宽度 ， auto, number, string
 * @returns style样式
 */
const fmtWidth = (width) => {
  if (width === 'auto') {
    return `width: auto;padding-left: 18rpx;padding-right: 18rpx`;
  } else {
    return `width: ${width.split('rpx')[0]}rpx;`;
  }
};

// 格式化选中的label
const fmtLabel = (activeKey, schema, labelIdentify, keyIdentify) => {
  let label = '';
  schema.forEach((item) => {
    if (item[keyIdentify] === activeKey) {
      label = item[labelIdentify];
    }
  });
  return label;
};

export default {
  fmtWidth,
  fmtLabel,
};

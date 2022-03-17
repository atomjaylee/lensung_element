/**
 * @param width 宽度 ， auto, number, string
 * @returns style样式
 */
const fmtWidth = (width) => {
  if (width === 'auto') {
    return `width: auto;padding-left: 18rpx;padding-right: 18rpx`;
  } else if (typeof width === 'number') {
    return `width: ${width}rpx`;
  } else {
    return `width: ${width.split('rpx')[0]}rpx;`;
  }
};

export default {
  fmtWidth,
};

const fmtIcon = (icon) => {
  switch (icon) {
    case 'success':
      return 'icon-chenggong';
    case 'error':
      return 'icon-shibai';
    case 'warn':
      return 'icon-piliangxiugai_yichang';
    default:
      return icon;
  }
};

export default {
  fmtIcon,
};
